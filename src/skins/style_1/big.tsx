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

      <ScenarioContainer>
        <ScenarioGradientOverlay />
      </ScenarioContainer>

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
          <TeamSlash side="right" />
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
  bottom: 60px;
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end; /* выравниваем по нижнему краю */
  justify-content: center;
  gap: 0;
  height: 90px;
  width: 100%;
  position: relative; /* для абсолютных логотипов */
  overflow: visible; /* чтобы логотипы не обрезались */
  border-bottom: 4px solid #0d7d03;
`;

const TeamBox = styled.div<{ side: "left" | "right"; color?: string }>`
  height: 110px;
  width: 585px;
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.side === "right" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => (props.side === "left" ? "0 0 0 60px" : "0 60px 0 0")};
  margin: ${(props) => (props.side === "left" ? "0 0 0 5px" : "0 5px 0 0")};
  background: linear-gradient(to bottom, #0e173f, #010920);
  border-bottom: 4px solid #0d7d03;
  height: 90px;

  clip-path: ${(props) =>
    props.side === "left"
      ? "polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0% 100%)"
      : "polygon(28px 0, 100% 0, 100% 100%, 0 100%)"};

  ${(props) =>
    props.side === "left"
      ? "transform: translateX(28px);"
      : "transform: translateX(-28px);"}
  z-index: 10;

  overflow: visible;
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 141px;
  height: 141px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-70px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-40px" : "auto")};
  top: ${(props) => (props.side === "right" ? "70px" : "75px")};
  transform: translateY(-50%);
  z-index: 20;
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
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
  max-width: 100%;

  padding-left: ${(props) => (props.side === "left" ? "40px" : "40px")};
  margin-right: ${(props) => (props.side === "right" ? "60px" : "30px")};

  position: relative;
  mask-image: linear-gradient(to right, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 90%, transparent 100%);
  z-index: 1;
`;

const TeamSlash = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 0;
  height: 119px;
  width: 20px;
  background: #0e173f;
  z-index: 3;

  ${(props) =>
    props.side === "left"
      ? `
        right: 0;
        clip-path: polygon(
          28px 0,   /* верхний левый отступ */
          100% 0,   /* верхний правый угол */
          100% 100%, /* нижний правый угол */
          0 0%    /* нижний левый угол */
        );
      `
      : `
        right: 0;
        clip-path: polygon(
          28px 0,   /* верхний левый отступ */
          100% 0,   /* верхний правый угол */
          100% 100%, /* нижний правый угол */
          0 0%    /* нижний левый угол */
        );
      `}
`;

const ScoreBox = styled.div`
  position: relative;
  background: #0e173f;
  color: #fff;
  font-weight: bold;
  padding: 0 40px;
  height: 119px; /* Сделали высоту 119px */
  display: flex;
  align-items: center; /* Вертикальное центрирование */
  justify-content: center;
  min-width: 200px;
  z-index: 1;
  border-bottom: 4px solid #0d7d03;
`;

const ScoreText = styled.div`
  width: 100%;
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
`;

const ScenarioContainer = styled.div`
  position: relative; /* вместо absolute */
  top: 60px;  /* убираем top, если не нужно */
  left: auto;
  width: 820px; /* чтобы покрыть всю ширину градиента */
  height: 43px;
  margin: 0 auto; /* центрируем */
  background: #00a954;
  clip-path: polygon(
    20px 0,
    calc(100% - 20px) 0,
    100% 100%,
    0% 100%
  );
  z-index: 0;
`;


const ScenarioContainerStart = styled.div`
  height: 43px;
  position: absolute;
  top: 0px; // Подвинуть вверх над счетчиком (регулируйте по необходимости)
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  display: flex;
  align-items: stretch;
  background: #00a954;
  clip-path: polygon(
    20px 0,
    /* верхний левый срез */ calc(100% - 20px) 0,
    /* верхний правый срез */ 100% 100%,
    /* нижний правый угол */ 0% 100% /* нижний левый угол */
  );
  z-index: 5;
`;

// Новая трапеция с градиентом поверх старой
const ScenarioGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 820px;
  height: 43px;
  clip-path: polygon(30px 0, calc(100% - 30px) 0, 100% 100%, 0% 100%);
  background: linear-gradient(90deg, #00a954 0%, #095102 51.98%, #00a954 100%);
  z-index: 6;
  pointer-events: none; /* чтобы не мешал кликам */
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
