export interface Teams {
  team_1_name: string;
  team_2_name: string;
  team_1_color: string;
  team_2_color: string;
}

export interface Scoreboard {
  team_1_score: number;
  team_2_score: number;
  is_fouls: boolean;
  team_1_fouls: number;
  team_2_fouls: number;
}

export interface TimerData {
  time: number;
}

export interface TableKindOption {
  label: string;
  value: TableKind;
}

export const table_kind_options: TableKindOption[] = [
  { label: 'Афиша', value: 'mid' },
  { label: 'Большое', value: 'big' },
  { label: 'Сборная 1', value: 'home-roster' },
  { label: 'Сборная 2', value: 'away-roster' },
  { label: 'Малое', value: 'little' },
  { label: 'Выкл', value: 'off' },
];

export type TableKind = 'little' | 'big' | 'mid' | 'home-roster' | 'away-roster' | 'person' | 'replace' | 'off';

export interface Table {
  kind: TableKind;
  style: string;
}

export type Scenario = 'begin' | '1' | '2' | 'pause' | 'end' | 'VAR' | 'out' | 'penalty' | 'начало матча';

export interface ScenarioOption {
  label: string;
  value: Scenario;
}

export const scenario_options: ScenarioOption[] = [
  { label: 'Начало матча', value: 'begin' },
  { label: '1 тайм', value: '1' },
  { label: 'Перерыв', value: 'pause' },
  { label: '2 тайм', value: '2' },
  { label: 'Конец матча', value: 'end' },
  { label: 'VAR', value: 'VAR' },
  { label: 'Тайм-аут', value: 'out' },
  { label: 'Пенальти', value: 'penalty' },
];

export interface SkinData {
  id: string;
  title: string;
  name: string;
}

export interface Person {
  id: string;
  fio: string;
  img?: string;
  number?: string;
  ampl?: string;
  team?: string;
  red?: number;
  yellow?: number;
  transits?: number;
  goals?: number;
  is_main_goalkeeper?: boolean;
}

export interface Replacement {
  from: Person;
  to: Person;
}

export const person_events = [
  'show_team_1_coach',
  'show_team_2_coach',
  'show_judge',
  'show_commentator',
  'show_team_1_grey',
  'show_team_2_grey',
  'show_team_1_yellow',
  'show_team_2_yellow',
  'show_team_1_red',
  'show_team_2_red'
];
export type PersonEvent = (typeof person_events)[number];

export interface PersonMessage {
  event: PersonEvent;
  person: Person;
}

export const replacement_events = [
  'show_team_1_replacement',
  'show_team_2_replacement'
];
export type ReplacementEvent = (typeof replacement_events)[number];

export interface ReplacementMessage {
  event: ReplacementEvent;
  replacement: Replacement;
}

export const table_kinds = ['big', 'little', 'mid', 'home-roster', 'away-roster', 'person', 'replace', 'off'];

export const person_kinds = ['goal', 'yellow', 'red', 'judge', 'coach'] as const;
export type PersonKind = (typeof person_kinds)[number];

export type person_Kind = "goal" | "yellow" | "red" | "judge" | "coach";