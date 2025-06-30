"use client";

import styled, { keyframes } from 'styled-components';
import { useMatch, useScoreboard, useScenario } from "@/hooks";

const getShortName = (name?: string) => (name ? name.slice(0, 4) : "");

export const Little = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const { scoreboard } = useScoreboard();

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <FuroreFont />

      {scoreboard.is_fouls && (
        <FollsContainer>
          {/* <FollsSlashLeft /> */}
          <FollsContent>
            <FollsCount>{scoreboard?.team_1_fouls ?? 0}</FollsCount>
            <FollsText>ФОЛЫ</FollsText>
            <FollsCount>{scoreboard?.team_2_fouls ?? 0}</FollsCount>
          </FollsContent>
          {/* <FollsSlashRight /> */}
        </FollsContainer>
      )}

      <Row>
        <TeamLogo side="left" src={match?.team_1?.img} />

        <TeamBox side="left" color={match?.team_1?.color}>
          <TeamName>{getShortName(match?.team_1?.name)}</TeamName>
          <TeamSlash side="left" />
        </TeamBox>

        <ScoreBox isFouls={scoreboard?.is_fouls}>
          <ScoreText>
            {scoreboard?.team_1_score}–{scoreboard?.team_2_score}
          </ScoreText>
        </ScoreBox>

        <TeamBox side="right" color={match?.team_2?.color}>
          <TeamSlash side="right" />
          <TeamName>{getShortName(match?.team_2?.name)}</TeamName>
        </TeamBox>
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
  top: 20px;
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

const FollsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -10px;
  z-index: 5;
`;

const FollsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 8px 19px;
  flex-grow: 1;
  position: relative;
  clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%);
  z-index: 1;
`;

const FollsText = styled.div`
  margin: 0 15px;
  font-family: "Furore", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  flex-grow: 1;
  text-align: center;
`;

const FollsCount = styled.div`
  font-family: "Furore", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  min-width: 20px;
  text-align: center;
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
`;

const TeamBox = styled.div<{ side: "left" | "right", color?: string }>`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.side === "right" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => (props.side === "left" ? "0 0 0 15px" : "0 15px 0 0")};
  margin: ${(props) => (props.side === "left" ? "0 0 0 5px" : "0 5px 0 0")};
  background: ${(props) =>
    props.side === "left"
      ? `linear-gradient(90deg, ${props.color} 0%, #191919 100%)`
      : `linear-gradient(90deg, #191919 0%, ${props.color} 100%)`};
  height: 56px;

  clip-path: ${(props) =>
    props.side === "left"
      ? "polygon(0 0, calc(100% - 19px) 0, 100% 100%, 0% 100%)"
      : "polygon(19px 0, 100% 0, 100% 100%, 0 100%)"};

  ${(props) =>
    props.side === "left"
      ? "transform: translateX(28px);"
      : "transform: translateX(-28px);"}
  z-index: 1;

  overflow: visible;
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 90px;
  height: 90px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-30px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-40px" : "auto")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const TeamName = styled.div`
  height: 56px;
  font-family: "Furore", sans-serif;
  font-weight: 400;
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
  padding: 0 20px;
  z-index: 1;
`;

const TeamSlash = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15px;
  background: ${(props) => (props.side === "left" ? "#008BB1" : "#FF0000")};
  z-index: 3;
  transform: ${(props) =>
    props.side === "left" ? "skewX(-160deg)" : "skewX(160deg)"};

  ${(props) =>
    props.side === "left"
      ? `right: 0; transform-origin: right;`
      : `left: 0; transform-origin: left;`}
`;

const ScoreBox = styled.div<{ isFouls?: boolean }>`
  width: 145.55px;
  margin: 0 10px;
  position: relative;
color: ${({ isFouls }) => (isFouls === false ? "#FFFFFF" : "#001134")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  background: ${({ isFouls }) => (isFouls === false ? "#000" : "transparent")};
`;


const ScoreText = styled.div`
  font-family: "Furore", sans-serif;
  font-size: 37px;
  font-weight: 400;
  text-align: center;
  line-height: 1;
`;

const ScenarioContainer = styled.div`
  position: relative; /* Чтобы сработали absolute-элементы */
  display: flex;
  align-items: stretch;
  width: auto;
  margin-top: 0;
  z-index: 2; /* Над фолами */
`;

const ScenarioText = styled.div`
  font-family: "Furore", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background: #000;
  padding: 8px 18px;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
  transform: translateY(-10px); /* Чуть выше */
  z-index: 3;
  position: relative;
`;

const ScenarioSlashLeft = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  width: 20px;
  height: 100%;
  background: #000;
  transform: skewX(20deg);
  z-index: 2;
`;

const ScenarioSlashRight = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 100%;
  background: #000;
  transform: skewX(-20deg);
  z-index: 2;
`;
