export interface RaidData {
  _links: Links;
  character: Character;
  expansions: Expansion[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Character {
  key: Key;
  name: string;
  id: number;
  realm: Realm;
}

export interface Key {
  href: string;
}

export interface Realm {
  key: Key2;
  name: string;
  id: number;
  slug: string;
}

export interface Key2 {
  href: string;
}

export interface Expansion {
  expansion: Expansion2;
  instances: Instance[];
}

export interface Expansion2 {
  key: Key3;
  name: string;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface Instance {
  instance: Instance2;
  modes: Mode[];
}

export interface Instance2 {
  key: Key4;
  name: string;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface Mode {
  difficulty: Difficulty;
  status: Status;
  progress: Progress;
}

export interface Difficulty {
  type: string;
  name: string;
}

export interface Status {
  type: string;
  name: string;
}

export interface Progress {
  completed_count: number;
  total_count: number;
  encounters: Encounter[];
}

export interface Encounter {
  encounter: Encounter2;
  completed_count: number;
  last_kill_timestamp: number;
}

export interface Encounter2 {
  key: Key5;
  name: string;
  id: number;
}

export interface Key5 {
  href: string;
}

export interface JournalInstance {
  _links: Links;
  id: number;
  name: string;
  map: Map;
  description: string;
  encounters: Encounter[];
  expansion: Expansion;
  location: Location;
  modes: Mode[];
  media: Media;
  minimum_level: number;
  category: Category;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Map {
  name: string;
  id: number;
}

export interface Encounter {
  key: Key;
  name: string;
  id: number;
}

export interface Key {
  href: string;
}

export interface Expansion {
  key: Key2;
  name: string;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface Location {
  name: string;
  id: number;
}

export interface Mode {
  mode: Mode2;
  players: number;
  is_tracked: boolean;
}

export interface Mode2 {
  type: string;
  name: string;
}

export interface Media {
  key: Key3;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface Category {
  type: string;
}

export interface JournalMedia {
  _links: Links;
  assets: Asset[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Asset {
  key: string;
  value: string;
}
