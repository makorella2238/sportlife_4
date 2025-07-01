"use client";

import { useMatch, useScoreboard, useScenario } from "@/hooks";
import styled, { keyframes } from "styled-components";

export const Big = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const { scoreboard } = useScoreboard();
  const scenario = useScenario();

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <FuroreFont />

      <Row>
        <TeamLogo side="left" src={match?.team_1?.img} />

        <TeamBox side="left" color={match?.team_1?.color}>
          <TeamName side="left">{match?.team_1?.name}</TeamName>
        </TeamBox>

        <ScoreBox>
          <ScoreText>
            {scoreboard?.team_1_score}–{scoreboard?.team_2_score}
          </ScoreText>
        </ScoreBox>

        <TeamBox side="right" color={match?.team_2?.color}>
          <TeamName side="right">{match?.team_2?.name}</TeamName>
        </TeamBox>
      </Row>

      <TeamLogo side="right" src={match?.team_2?.img} />

      <ScenarioContainerStart>
        <ScenarioText>{scenario}</ScenarioText>
      </ScenarioContainerStart>
    </Wrapper>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SlideUpDiv = styled.div`
  animation: ${slideUp} 0.5s ease forwards;
`;

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
  bottom: 100px;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  font-family: "Furore", sans-serif;
  z-index: 100;
  width: 1500px;
  animation: ${slideUp} 0.5s ease forwards;
`;

const Row = styled.div`
  border-radius: 70px 70px 0 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  align-items: end; /* выравниваем по нижнему краю */
  justify-content: center;
  gap: 0;
  height: 125px;
  width: 100%;
  position: relative; /* для абсолютных логотипов */
  overflow: visible; /* чтобы логотипы не обрезались */
  background: #D43927
`;

const TeamBox = styled.div<{ side: "left" | "right"; color?: string }>`
  height: 110px;
  width: 561px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: "flex-start" 
  
  /* Убираем padding */
  padding: 0;

  ${(props) =>
    props.side === "left"
      ? "transform: translateX(50px);"
      : "transform: translateX(20px);"};

  z-index: 10;
  overflow: visible;
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
  width: calc(100% - 60px);
  font-family: "Furore", sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  display: flex;

  margin-left: ${(props) => (props.side === "right" ? "30px" : "60px")};
  margin-right: ${(props) => (props.side === "left" ? "40px" : "0px")};

  position: relative;
  mask-image: linear-gradient(to right, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 90%, transparent 100%);
  z-index: 1;
`;


const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 189px;
  height: 180px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-93px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-40px" : "auto")};
  top: ${(props) => (props.side === "right" ? "55px" : "66px")};
  transform: translateY(-50%);
  z-index: 20;
`;

const ScoreText = styled.div`
  width: 100%;
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
`;

const ScenarioContainerStart = styled.div`
  width: 311px;
  height: 88px;
  background: #B92025; /* проверь, что ; стоит в конце */
  border-radius: 0 0 25px 25px;
  position: absolute;
  top: 125px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ScoreBox = styled.div`
  position: relative;
  background: #242625; /* добавь точку с запятой */
  color: #fff;
  font-weight: bold;
  height: 125px;
  width: 414px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 70px 70px 0 0;
  z-index: 1;
`;

// Скорректируем ScenarioText, чтобы занял всё пространство
const ScenarioText = styled.div`
  flex: 1;
  font-family: "Furore", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  padding: 0 20px;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScenarioSlashLeft = styled.div`
  width: 0; // убираем ширину, т.к. срезы есть в clip-path
`;

const ScenarioSlashRight = styled.div`
  width: 0; // то же самое
`;
