export interface CoachShort {
  id: string;
  fio: string;
  img?: string;
}

export interface RepresentativShort {
  id: string;
  fio: string;
  img?: string;
}

export interface TeamFull {
  id: string;
  name: string;
  img: string;
  description: string;
  color?: string;
  coaches: CoachShort[];
  representativs: RepresentativShort[];
}

export interface TeamShort {
  id: string;
  name: string;
  img: string;
  description: string;
  color?: string;
}

export interface StadiumData {
  id: string;
  name: string;
  description?: string;
  city?: string;
  address?: string;
  contacts?: string;
  img?: string;
  lat?: number;
  lng?: number;
}

export interface JudgeShort {
  id: string;
  fio: string;
  img?: string;
}

export interface CommentatorShort {
  id: string;
  fio: string;
  img?: string;
}

export interface TournamentItem {
  id: string;
  position: number;
  name?: string;
  full_name?: string;
  date_start?: string;
  date_end?: string;
  img?: string;
  kind?: string;
  tours?: string[];
  teams?: string[];
}

export interface TournamentDataFull {
  id: string;
  position: number;
  name?: string;
  full_name?: string;
  date_start?: string;
  date_end?: string;
  img?: string;
  kind?: string;
  tours?: string[];
  teams?: TeamShort[];
  judges?: JudgeShort[];
  commentators?: CommentatorShort[];
}

export interface PlayerResultItem {
  id: string;
  is_active: boolean;
  player: string;
  player_fio: string;
  player_ampl: string;
  player_img?: string;
  player_number?: string;
  team: string;
  match: string;
  red: number;
  yellow: number;
  transits: number;
  goals: number;
  is_main_goalkeeper: boolean;
}

export interface PlayerItem {
  id: string;
  fio: string;
  number: string;
}

export interface MatchItem {
  id: string;
  date: string;
  time: string;
  team_1: TeamShort;
  team_2: TeamShort;
  team_1_score?: number;
  team_2_score?: number;
  status?: string;
  circle?: string;
  stadium?: StadiumData;
  tournament: TournamentItem;
  is_overtime: boolean;
  is_penalty: boolean;
  is_tech_win: boolean;
}

export interface MatchData {
  id: string;
  date: string;
  time: string;
  team_1: TeamFull;
  team_2: TeamFull;
  team_1_score: number;
  team_2_score: number;
  status?: string;
  circle?: string;
  stadium?: StadiumData;
  tournament: TournamentDataFull;
  team_1_score_penalty?: number;
  team_2_score_penalty?: number;
  is_overtime: boolean;
  is_penalty: boolean;
  is_tech_win: boolean;
  judges?: string[];
  commentators?: string[];
  results_1?: PlayerResultItem[];
  results_2?: PlayerResultItem[];
}