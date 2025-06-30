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
          <TeamSlash side="left" />
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

      <ScenarioContainer>
        <ScenarioSlashLeft />
        <ScenarioText>{scenario}</ScenarioText>
        <ScenarioSlashRight />
      </ScenarioContainer>
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
  bottom: 20px;
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end; /* выравниваем по нижнему краю */
  justify-content: center;
  gap: 0;
  height: 90px;
  width: 100%;
  position: relative; /* для абсолютных логотипов */
  overflow: visible; /* чтобы логотипы не обрезались */
`;

const TeamBox = styled.div<{ side: "left" | "right"; color?: string }>`
  width: 585px;
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.side === "right" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => (props.side === "left" ? "0 0 0 60px" : "0 60px 0 0")};
  margin: ${(props) => (props.side === "left" ? "0 0 0 5px" : "0 5px 0 0")};
  background: ${(props) =>
    props.side === "left"
      ? `linear-gradient(90deg, ${props.color} 0%, #191919 100%)`
      : `linear-gradient(90deg, #191919 0%, ${props.color} 100%)`};
  height: 90px;

  clip-path: ${(props) =>
    props.side === "left"
      ? "polygon(0 0, calc(100% - 19px) 0, 100% 100%, 0% 100%)"
      : "polygon(19px 0, 100% 0, 100% 100%, 0 100%)"};

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
  top: 45px;
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
  bottom: 0;
  width: 20px;
  background: ${(props) => (props.side === "left" ? "#008BB1" : "#FF0000")};
  z-index: 3;
  transform: ${(props) =>
    props.side === "left" ? "skewX(-167deg)" : "skewX(167deg)"};

  ${(props) =>
    props.side === "left"
      ? `right: 0; transform-origin: right;`
      : `left: 0; transform-origin: left;`}
`;

const ScoreBox = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  font-weight: bold;
  padding: 0 40px;
  height: 80px;
  margin-bottom: -5px
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  z-index: 1;
`;

const ScoreText = styled.div`
  font-family: "Furore", sans-serif;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
`;

const ScenarioContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: auto;
  margin-top: 0; /* Убрали отступ */
`;

const ScenarioText = styled.div`
  font-family: "Furore", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  background: #000;
  padding: 8px 12px;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase; /* Капс */
`;

const ScenarioSlashLeft = styled.div`
  width: 20px;
  background: #000;
  transform: skewX(20deg);
  margin-right: -10px;
`;

const ScenarioSlashRight = styled.div`
  width: 20px;
  background: #000;
  transform: skewX(-20deg);
  margin-left: -10px;
`;
