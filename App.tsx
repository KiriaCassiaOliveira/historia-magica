
import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import StoryForm from './components/StoryForm';
import StoryView from './components/StoryView';
import Library from './components/Library';
import Pricing from './components/Pricing';
import PaywallModal from './components/PaywallModal';
import { Story, StoryConfig } from './types';
import { generateStory, generateStoryImage } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'form' | 'story' | 'library' | 'pricing'>('home');
  const [loading, setLoading] = useState(false);
  const [paywall, setPaywall] = useState<{show: boolean, reason: 'limit' | 'credits' | 'pdf' | 'library'}>({show: false, reason: 'limit'});
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [lastConfig, setLastConfig] = useState<StoryConfig | null>(null);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash === '#/library') setView('library');
    else if (hash === '#/form') setView('form');
    else if (hash === '#/pricing') setView('pricing');
    else if (hash.startsWith('#/read/')) setView('story');
    else setView('home');
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('magic_stories');
    if (stored) setSavedStories(JSON.parse(stored));
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const handleCreateStory = async (config: StoryConfig) => {
    setLoading(true);
    setLastConfig(config);
    try {
      const storyData = await generateStory(config);
      const imageUrl = await generateStoryImage(config.theme, storyData.title);
      
      const newStory: Story = {
        id: Math.random().toString(36).substring(2, 9),
        title: storyData.title,
        content: storyData.content,
        config,
        imageUrl,
        createdAt: Date.now()
      };

      setCurrentStory(newStory);
      window.location.hash = `#/read/${newStory.id}`;
    } catch (error: any) {
      if (error.message === "LIMIT_EXCEEDED") setPaywall({show: true, reason: 'limit'});
      else if (error.message === "CREDITS_INSUFFICIENT") setPaywall({show: true, reason: 'credits'});
      else if (error.message === "LIBRARY_FULL") setPaywall({show: true, reason: 'library'});
      else alert("Erro na magia, tente de novo!");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStory = () => {
    if (savedStories.length >= 3) {
      setPaywall({show: true, reason: 'library'});
      return;
    }
    if (currentStory && !savedStories.some(s => s.id === currentStory.id)) {
      const updated = [currentStory, ...savedStories];
      setSavedStories(updated);
      localStorage.setItem('magic_stories', JSON.stringify(updated));
    }
  };

  return (
    <Layout darkMode={currentStory?.config.bedtimeMode && view === 'story'} currentView={view}>
      {loading && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
          <div className="text-8xl float-animation">✨</div>
          <h3 className="text-4xl font-extrabold text-indigo-600 font-story mt-8">Tecendo Magia...</h3>
        </div>
      )}

      {paywall.show && <PaywallModal reason={paywall.reason} onClose={() => setPaywall({...paywall, show: false})} />}

      {view === 'home' && <Home onStart={() => window.location.hash = '#/form'} />}
      {view === 'form' && <StoryForm onSubmit={handleCreateStory} />}
      {view === 'pricing' && <Pricing />}
      {view === 'story' && currentStory && (
        <StoryView 
          story={currentStory} 
          onSave={handleSaveStory}
          onRegenerate={() => lastConfig && handleCreateStory(lastConfig)}
          isSaved={savedStories.some(s => s.id === currentStory.id)}
        />
      )}
      {view === 'library' && (
        <Library 
          stories={savedStories} 
          onSelect={(s) => { setCurrentStory(s); window.location.hash = `#/read/${s.id}`; }}
          onDelete={(id) => {
            const filtered = savedStories.filter(s => s.id !== id);
            setSavedStories(filtered);
            localStorage.setItem('magic_stories', JSON.stringify(filtered));
          }}
        />
      )}
    </Layout>
  );
};

export default App;
