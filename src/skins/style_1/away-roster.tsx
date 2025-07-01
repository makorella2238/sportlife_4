"use client";

import styled, { keyframes } from "styled-components";
import { useMatch } from "@/hooks";
export const AwayRoster = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const players = match?.results_1?.slice(0, 9) || [];
  const teamName = match?.team_1?.name || "";

  return (
    <Container>
      <Wrapper style={{ display: show ? "flex" : "none" }}>
        <BackgroundImage />
        <Overlay /> {/* <-- вот сюда */}
        <TitleContainer>
          <TitleLine>Состав {teamName}</TitleLine>
        </TitleContainer>
        <TeamLogo src={match?.team_1?.img} />
        <Trener>
          <TrItem>
            <TrTitle>ГЛАВНЫЙ ТРЕНЕР</TrTitle>
            <TrName>{match?.team_1?.coaches[0].fio}</TrName>
          </TrItem>
          <TrItem>
            <TrTitle>Тренер</TrTitle>
            <TrName>{match?.team_1?.representativs[0].fio}</TrName>
          </TrItem>
        </Trener>
        <GridWrapper>
          {players.map((player, i) => (
            <PlayerBlock key={`player-${i}`}>
              <RightInfo>
                <NumberBlock>{player.player_number}</NumberBlock>
                <NameBlock>{player.player_fio}</NameBlock>
              </RightInfo>
              <LeftImage src="/personCard.png" />
            </PlayerBlock>
          ))}
        </GridWrapper>
      </Wrapper>
    </Container>
  );
};

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: -2%;
  right: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1432px;
  height: 960px;
`;

const Wrapper = styled.div`
  border-radius: 64px;
  width: 1432px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Furore", sans-serif;
  overflow: hidden;
  background: url("/Group.png") no-repeat center center / cover;
  animation: ${slideDown} 0.5s ease forwards;
  padding-bottom: 20px;
  position: relative; /* для абсолютных элементов внутри */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d43927;
  opacity: 0.7;
  z-index: 2;
`;

const TitleContainer = styled.div`
  padding: 32px 45px;
  width: 686px;
  border-radius: 0 0 24px 24px;
  display: flex;
  background: #242424;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  margin-bottom: 30px;
`;

const TitleLine = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

const TeamLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 168px;
  height: 168px;
  object-fit: contain;
  margin-bottom: 20px;
  z-index: 5;
`;

const Trener = styled.div`
  display: flex;
  gap: 54pxpx;
  margin-top: 30px;
  margin-bottom: 32px;
  z-index: 5;
`;

const TrTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const RightInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 12px;
  justify-content: space-between;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px); /* 3 колонки фиксированной ширины */
  column-gap: 40px; /* отступ между колонками */
  row-gap: 20px; /* отступы между строками */
  justify-content: center; /* центрируем грид */
  max-height: calc(7 * (79px + 20px)); /* высота 7 строк */
  max-width: 100%;
  padding: 0; /* убираем внешние отступы */
  z-index: 5;
  margin-bottom: 74px;

`;

const PlayerBlock = styled.div`
  display: flex;
  align-items: center;
  height: 79px;
  width: 386px; /* фиксированная ширина */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #9b1000 40%,
    rgba(255, 255, 255, 0) 100%
  );
  box-sizing: border-box;
  border-radius: 8px;
  /* Убираем margin-left */
  margin-left: 0;
`;

const NumberBlock = styled.div`
  width: 24px;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
`;

const NameBlock = styled.div`
  width: 231px
  font-weight: 600;
  font-size: 23px;
  text-transform: uppercase;
  color: #fff;
  margin-left: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1; /* чтобы занимать максимум доступного места */
`;

const LeftImage = styled.img`
  width: 71px;
  height: 79px;
  object-fit: contain;
  flex-shrink: 0;
`;

// Для тренеров делаем контейнер с фиксированной шириной,
// чтобы ФИО не переносилось и влезало
const TrItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px; /* достаточно широкая, чтобы ФИО помещалось */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrName = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #fff;
  max-width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
