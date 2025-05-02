export interface API {
  id: number;
  url: string;
  name: string;
  type: Type;
  language: Language;
  genres: string[];
  status: Status;
  runtime: number | null;
  averageRuntime: number;
  premiered: string;
  ended: Date | null;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: Country | null;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Self;
  previousepisode: Episode;
  nextepisode?: Episode;
}

export interface Episode {
  href: string;
  name: string;
}

export interface Self {
  href: string;
}

export interface Country {
  name: Name;
  code: Code;
  timezone: Timezone;
}

export enum Code {
  CA = "CA",
  Cl = "CL",
  De = "DE",
  Es = "ES",
  Fr = "FR",
  GB = "GB",
  Jp = "JP",
  Nl = "NL",
  Pt = "PT",
  Us = "US",
}

export enum Name {
  Canada = "Canada",
  Chile = "Chile",
  France = "France",
  Germany = "Germany",
  Japan = "Japan",
  Netherlands = "Netherlands",
  Portugal = "Portugal",
  Spain = "Spain",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}

export enum Timezone {
  AmericaNewYork = "America/New_York",
  AmericaSantiago = "America/Santiago",
  AmericaToronto = "America/Toronto",
  AsiaTokyo = "Asia/Tokyo",
  EuropeAmsterdam = "Europe/Amsterdam",
  EuropeBusingen = "Europe/Busingen",
  EuropeLisbon = "Europe/Lisbon",
  EuropeLondon = "Europe/London",
  EuropeMadrid = "Europe/Madrid",
  EuropeParis = "Europe/Paris",
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: null | string;
}

export interface Image {
  medium: string;
  original: string;
}

export enum Language {
  Dutch = "Dutch",
  English = "English",
  French = "French",
  German = "German",
  Japanese = "Japanese",
  Portuguese = "Portuguese",
  Spanish = "Spanish",
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: null | string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: Day[];
}

export enum Day {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

export enum Status {
  Ended = "Ended",
  Running = "Running",
  ToBeDetermined = "To Be Determined",
}

export enum Type {
  Animation = "Animation",
  Documentary = "Documentary",
  News = "News",
  Reality = "Reality",
  Scripted = "Scripted",
  TalkShow = "Talk Show",
}


