"use client";

import styled from "styled-components";
import { useMatch, useScenario, useScoreboard, useTimer } from "@/hooks";

export const Person = ({ show }: { show: boolean }) => {
  const match = useMatch();

  
  const rows = [];
  const players = match?.results_2 || [];

  let i = 0;
  let toggle = true;

  while (i < players.length) {
    const count = toggle ? 3 : 4;
    rows.push(players.slice(i, i + count));
    i += count;
    toggle = !toggle;
  }

const limitedRows = [];
let total = 0;

for (const row of rows) {
  if (total >= 17) break;

  const remaining = 17 - total;
  const slicedRow = row.slice(0, remaining);
  limitedRows.push(slicedRow);
  total += slicedRow.length;
}



  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <HeaderRow>
        <Title>СОСТАВ</Title>
        <Subtitle>
          ЭКСПРЕСС <br /> ОФИС
        </Subtitle>
        <Logo src={match?.team_1?.img} alt="Logo" />
      </HeaderRow>

<div>
  <div>
    {limitedRows.map((rowPlayers, idx) => (
      <Grid key={idx} columns={rowPlayers.length}>
        {rowPlayers.map((player, i) => (
          <Parallelogram key={i}>
            <PlayerImage src="/player.png" alt="Player" />
            <NameText>{player.player_fio.split(" ").join("\n")}</NameText>
            <NumberBlock>{player.player_number}</NumberBlock>
          </Parallelogram>
        ))}
      </Grid>
    ))}
  </div>



        <BottomRow>
          <RepresentativeParallelogram>
            <ParallelogramRow>
              <RepImage src="/player.png" alt="Player" />
              <RepName>
                {match.team_2.coaches[0].fio.replace(" ", "\n")}
              </RepName>
            </ParallelogramRow>
            <RepPost>Представитель</RepPost>
          </RepresentativeParallelogram>

          <RepresentativeParallelogram>
            <ParallelogramRow>
              <RepImage src="/player.png" alt="Player" />
              <RepName>
                {match.team_2.coaches[0].fio.replace(" ", "\n")}
              </RepName>
            </ParallelogramRow>
            <RepPost>Представитель</RepPost>
          </RepresentativeParallelogram>
        </BottomRow>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url("/person.png") no-repeat center center / cover;
  width: 1492px;
  height: 809px;
  font-family: "Furore", sans-serif;
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-size: 142.15px;
  font-weight: 400;
  line-height: 177.69px;
  letter-spacing: -2%;
  color: white;
  margin-right: 27px;
`;

const Subtitle = styled.h2`
  font-size: 56px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -2%;
  margin: 0;
`;

const HeaderRow = styled.div`
  margin-top: 64px;
  margin-bottom: 44px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin-top: 14px;
  width: 155px;
  height: 155px;
`;

const Grid = styled.div<{ columns: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, auto);
  grid-auto-rows: 80px;
  justify-content: center;
  column-gap: 20px; /* заменяет margin между элементами */
`;


const Parallelogram = styled.div`
  position: relative;
  width: 347px;
  height: 61px;
  background: white;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
`;

const PlayerImage = styled.img`
  position: absolute;
  left: -1.5px;
  margin-right: 2px;
  width: 101px;
  height: 61px;
  object-fit: cover;
  flex-shrink: 0;
  clip-path: polygon(10px 0%, 100% 0%, 90% 100%, 0% 100%);
`;

const NameText = styled.div`
  flex: 1;
  font-size: 20px;
  line-height: 20px;
  color: #001134;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* прижимаем к правому краю */
  text-align: center;
  white-space: pre-line;
`;

const NumberBlock = styled.div`
  width: 111px;
  height: 61px;
  background: #008bb1;
  color: white;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(40px 0%, 100% 0%, 90% 100%, 0% 100%);
  flex-shrink: 0;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const RepresentativeParallelogram = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 0;
  overflow: hidden;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
`;

const RepName = styled.div`
  white-space: pre-line;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* прижимаем к правому краю */
  height: 100%;
  text-align: left;
  padding-right: 46px; /* немного отступа */
  flex: 1;
`;


const ParallelogramRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 61px;
  width: 280px;
  background: #008bb1;
  color: white;
  font-size: 20px;
  font-weight: 400;
  font-family: "Furore", sans-serif;
`;

const RepPost = styled.div`
  width: 100%;
  height: 20px;
  background: white;
  color: #000533;
  font-family: "Furore", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -2%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px; /* убираем лишние отступы */
`;

const RepImage = styled.img`
  position: absolute;
  left: -7px;
  width: 101px;
  height: 61px;
  object-fit: cover;
  flex-shrink: 0;
`;
