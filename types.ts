export type Lang = "en" | "ar";

export type Bilingual<T = string> = { en: T; ar: T };

export interface TimelineItem {
  date: Bilingual;
  img: string;
  h: Bilingual;
  p: Bilingual;
  accent?: boolean;
  tag?: Bilingual;
}

export interface Project {
  win?: boolean;
  year: string;
  cat: Bilingual;
  h: Bilingual;
  p: Bilingual;
  s: string;
}

export interface LightboxItem {
  src?: string;
  video?: string;
  cap?: Bilingual | string;
  date?: string;
}

export interface Credential {
  date: number;
  sort: number;
  cat: "data" | "award" | "impact";
  title: Bilingual;
  issuer: Bilingual;
  img?: string;
  cover?: string;
  badge?: number;
  set?: LightboxItem[];
  doc?: "pdf" | "docx";
  href?: string;
}

export interface Writing {
  date: number;
  sort: number;
  doc: "pdf" | "docx";
  href: string;
  title: Bilingual;
  blurb: Bilingual;
  body?: string[];
}
