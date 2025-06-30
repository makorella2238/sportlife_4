import { createContext, ReactNode, useContext, useState } from 'react';

import {
  MatchData,
  Person,
  Replacement,
  Scenario,
  Scoreboard,
  SkinData,
  Table,
  Teams,
  TimerData
} from '@/models';
import {
  match as match_data,
  skins as skins_data,
  teams_data,
  scoreboard_data,
  timer_data,
  table_data,
  scenario_data,
  person_data,
  replacement_data
} from '@/data/data';

export const AppContext = createContext<any>(null);

export interface AppContextType {
  match: MatchData;
  skins: SkinData[];
  teams: Teams;
  scoreboard: Scoreboard;
  timer: TimerData;
  table: Table;
  scenario: Scenario;
  person: Person;
  replacement: Replacement;
  set_table: (table: Table) => void;
  set_scenario: (scenario: Scenario) => void;
  set_person: (person: Person) => void;
  set_replacement: (replacement: Replacement) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [match] = useState<MatchData>(match_data);  
  const [teams] = useState<Teams>(teams_data);
  const [scoreboard] = useState<Scoreboard>(scoreboard_data);
  const [timer] = useState<TimerData>(timer_data);
  const [table, set_table] = useState<Table>(table_data);
  const [scenario, set_scenario] = useState<Scenario>(scenario_data);
  const [person, set_person] = useState<Person>(person_data);
  const [replacement, set_replacement] = useState<Replacement>(replacement_data);
  const [skins] = useState<SkinData[]>(skins_data);

  const value = {
    match,
    teams,
    scoreboard,
    timer,
    table,
    scenario,
    person,
    replacement,
    skins,
    set_table,
    set_scenario,
    set_person,
    set_replacement,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => useContext(AppContext);