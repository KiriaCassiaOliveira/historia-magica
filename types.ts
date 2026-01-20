
export enum StoryTheme {
  ADVENTURE = 'Aventura',
  FANTASY = 'Fantasia',
  ANIMALS = 'Animais Amigos',
  SPACE = 'Espaço Sideral',
  DINOSAURS = 'Dinossauros Felizes',
  PRINCESSES = 'Príncipes e Princesas',
  FOOTBALL = 'Futebol e Esportes',
  NATURE = 'Natureza Mágica'
}

export enum StoryMood {
  CALM = 'Calmo e Relaxante',
  FUNNY = 'Divertido e Engraçado',
  GENTLE_ADVENTURE = 'Aventura Leve'
}

export enum StoryValue {
  FRIENDSHIP = 'Amizade',
  COURAGE = 'Coragem',
  SHARING = 'Compartilhar',
  SELF_ESTEEM = 'Autoestima',
  GRATITUDE = 'Gratidão'
}

export enum StoryLength {
  SHORT = 'Curta (~3 min)',
  MEDIUM = 'Média (~6 min)',
  LONG = 'Longa (~10 min)'
}

export interface StoryConfig {
  childName: string;
  ageGroup?: string;
  theme: StoryTheme;
  mood: StoryMood;
  value?: StoryValue;
  length: StoryLength;
  bedtimeMode: boolean;
  parentName?: string;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  config: StoryConfig;
  imageUrl?: string;
  createdAt: number;
}
