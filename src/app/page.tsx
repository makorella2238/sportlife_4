"use client";

import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { PersonKind, TableKind, person_Kind, person_kinds } from "@/models";

const styles = ["style_1", "style_2"];

interface Skin {
  Little: React.ComponentType<{ show: boolean }>;
  Big: React.ComponentType<{ show: boolean }>;
  Mid: React.ComponentType<{ show: boolean }>;
  HomeRoster: React.ComponentType<{ show: boolean }>;
  AwayRoster: React.ComponentType<{ show: boolean }>;
  Person: React.ComponentType<{ kind: PersonKind; show: boolean }>;
  Replace: React.ComponentType<{ show: boolean }>;
}

export default function App() {
  const [style, set_style] = useState<string>("style_1");
  const [skin, set_skin] = useState<Skin | null>(null);
  const [table_kind, set_table_kind] = useState<TableKind>("little");
  const [person_kind, set_person_kind] = useState<person_Kind>("goal");


  useEffect(() => {
    if (!style) return;
    (async () => {
      const Little = (await import(`@/skins/${style}/little`)).Little;
      const Big = (await import(`@/skins/${style}/big`)).Big;
      const Mid = (await import(`@/skins/${style}/mid`)).Mid;
      const HomeRoster = (await import(`@/skins/${style}/home-roster`))
        .HomeRoster;
      const AwayRoster = (await import(`@/skins/${style}/away-roster`))
        .AwayRoster;
      const Person = (await import(`@/skins/${style}/person`)).Person;
      const Replace = (await import(`@/skins/${style}/replace`)).Replace;
      set_skin({
        Little,
        Big,
        Mid,
        HomeRoster,
        AwayRoster,
        Person,
        Replace,
      });
    })();
  }, [style]);

  if (!skin) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Back>
        <skin.Big show={table_kind === "big"} />
        <skin.Little show={table_kind === "little"} />
        <skin.Mid show={table_kind === "mid"} />
        <skin.HomeRoster show={table_kind === "home-roster"} />
        <skin.AwayRoster show={table_kind === "away-roster"} />
        <skin.Person kind={person_kind} show={table_kind === "person"} />
        <skin.Replace show={table_kind === "replace"} />
        <Tools>
          <Select value={style} onChange={(e) => set_style(e.target.value)}>
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </Select>
          <Button onClick={() => set_table_kind("little")}>Little</Button>
          <Button onClick={() => set_table_kind("big")}>Big</Button>
          <Button onClick={() => set_table_kind("mid")}>Mid</Button>
          <Button onClick={() => set_table_kind("home-roster")}>
            Home Roster
          </Button>
          <Button onClick={() => set_table_kind("away-roster")}>
            Away Roster
          </Button>
          <Select
            value={person_kind}
            onChange={(e) => set_person_kind(e.target.value as PersonKind)}
          >
            {person_kinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </Select>
          <Button onClick={() => set_table_kind("person")}>Person</Button>
          <Button onClick={() => set_table_kind("replace")}>Replace</Button>
          <Button onClick={() => set_table_kind("off")}>Off</Button>
        </Tools>
      </Back>
    </>
  );
}

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;


const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  overflow: hidden;
  box-sizing: border-box;
  background-color: transparent;
`;

const Tools = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  width: 240px;
  gap: 12px;
  align-items: stretch;
`;

const Select = styled.select`
  flex: 1;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  width: 100%;
`;
