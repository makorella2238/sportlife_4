"use client";

import styled, { keyframes } from "styled-components";
import { useMatch, useScoreboard, useScenario } from "@/hooks";

const getShortName = (name?: string) => (name ? name.slice(0, 4) : "");

export const Little = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const falloff = 5; // количество кругов-фолов
  const { scoreboard } = useScoreboard();

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <FuroreFont />
      <Row>
        <TeamLogo side="left" src={match?.team_1?.img} />

        <TeamBox side="left">
          <InnerBox side="left">
            <FoulsRow side="left">
              {[...Array(falloff)].map((_, i) => (
                <FoulCircle
                  key={i}
                  active={(scoreboard?.team_1_fouls ?? 0) > i}
                />
              ))}
            </FoulsRow>
            <TeamName>{getShortName(match?.team_1?.name)}</TeamName>
            <ScoreText side="right">{scoreboard?.team_1_score ?? 0}</ScoreText>
          </InnerBox>
        </TeamBox>

        <Divider />

        <TeamBox side="right">
          <InnerBox side="right">
            <FoulsRow side="right">
              {[...Array(falloff)].map((_, i) => (
                <FoulCircle
                  key={i}
                  active={(scoreboard?.team_2_fouls ?? 0) > i}
                />
              ))}
            </FoulsRow>
            <TeamName>{getShortName(match?.team_2?.name)}</TeamName>
            <ScoreText side="left">{scoreboard?.team_2_score ?? 0}</ScoreText>
          </InnerBox>
        </TeamBox>

        <TeamLogo side="right" src={match?.team_2?.img} />
      </Row>

      <TeamLogo side="right" src={match?.team_2?.img} />

      <ScenarioContainer>
        <ScenarioSlashLeft />
        <ScenarioText>64:35</ScenarioText>
        <ScenarioSlashRight />
      </ScenarioContainer>
    </Wrapper>
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

// Подключаем шрифт Furore
const FuroreFont = styled.div`
  @font-face {
    font-family: "Furore";
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/s/furore/v1/ypvEbB4cI5nq3x4.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/s/furore/v1/ypvEbB4cI5nq3x4.woff")
        format("woff");
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  font-family: "Furore", sans-serif;
  z-index: 100;
  width: 638px;
  overflow: visible;
  animation: ${slideDown} 0.5s ease forwards;
`;

const FoulsRow = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: -42px; /* 32px (размер круга) + 10px отступ */
  left: ${({ side }) => (side === "left" ? "25%" : "auto")};
  right: ${({ side }) => (side === "right" ? "15%" : "auto")};
  display: flex;
  gap: 6px;
  z-index: 5;
`;

const Divider = styled.div`
  width: 5px;
  height: 56px;
  background: #fff;
  z-index: 3;
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  background: linear-gradient(to top, #010920, #0e173f);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  position: relative;
`;

const InnerBox = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ side }) =>
    side === "right" ? "0 50px 0 20px" : "0 20px 0 50px"};
  box-sizing: border-box;
  position: relative;
`;

const ScoreText = styled.div<{ side: "left" | "right" }>`
  font-family: "Furore", sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  margin: ${({ side }) => (side === "left" ? "0 12px 0 0" : "0 0 0 12px")};
`;

const FoulCircle = styled.div<{ active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ active }) =>
    active
      ? "linear-gradient(137.26deg, #0D7D03 17.85%, #010920 98.94%)"
      : "#1a1a1a"};
  border: 1px solid #333;
`;

const Row = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative; /* логотипы будут позиционироваться относительно Row */
  z-index: 10;
  overflow: visible;
  border-bottom: 4px solid #0d7d03;
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 90px;
  height: 90px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-40px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-50px" : "auto")};
  top: ${(props) => (props.side === "right" ? "-15px" : "-14px")};
  z-index: 10;
`;

const TeamName = styled.div`
  font-family: "Furore", sans-serif;
  font-weight: 600;
  font-size: 37px;
  line-height: 48px;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  z-index: 1;
`;

const ScenarioContainer = styled.div`
  position: absolute;
  top: 89px;
  left: 50%;
  transform: translate(-50%, -50%); /* Центр по X и Y */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Должен быть выше Row, но можно настраивать */
`;

const ScenarioText = styled.div`
  height: 22px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background: #0e173f;
  padding: 8px 20px;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
  transform: translateY(-10px); /* Чуть выше */
  z-index: 3;
  position: relative;

  display: flex;
  align-items: center; /* Вертикальный центр */
  justify-content: center;
`;

const ScenarioSlashLeft = styled.div`
  position: absolute;
  left: -30px;
  top: -10px;
  width: 50px;
  height: 100%;
  background: #0e173f;
  transform: skewX(45deg);
  z-index: 2;
`;

const ScenarioSlashRight = styled.div`
  position: absolute;
  right: -30px;
  top: -10px;
  width: 50px;
  height: 100%;
  background: #0e173f; /* Или другой цвет, чтобы было заметно */
  transform: skewX(-45deg);
  z-index: 2;
`;
