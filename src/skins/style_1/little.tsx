"use client";

import styled, { keyframes } from "styled-components";
import { useMatch, useScoreboard, useScenario } from "@/hooks";

const getShortName = (name?: string) => (name ? name.slice(0, 4) : "");

export const Little = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const { scoreboard } = useScoreboard();

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <FuroreFont />
      <Row>
        <TeamLogo side="left" src={match?.team_1?.img} />

        <TeamBox side="left">
          <InnerBox side="left">
            <TeamName>{getShortName(match?.team_1?.name)}</TeamName>
          </InnerBox>
        </TeamBox>

        <ScoreBox>
          {scoreboard.is_fouls && (
            <FoulsRowNew>
              <FoulNumber>{scoreboard?.team_1_fouls ?? 0}</FoulNumber>
              <FoulText>ФОЛЫ</FoulText>
              <FoulNumber>{scoreboard?.team_2_fouls ?? 0}</FoulNumber>
            </FoulsRowNew>
          )}

          <MainScore>
            <ScoreValue>{scoreboard?.team_1_score}</ScoreValue>
            <WhiteDivider>
              <DividerTop />
              <div style={{ height: "25px" }} />

              <DividerBottom />
            </WhiteDivider>

            <ScoreValue>{scoreboard?.team_2_score}</ScoreValue>
          </MainScore>

          <TimerText>{"26:03"}</TimerText>
        </ScoreBox>

        <TeamBox side="right">
          <InnerBox side="right">
            <TeamName>{getShortName(match?.team_2?.name)}</TeamName>
          </InnerBox>
        </TeamBox>

        <TeamLogo side="right" src={match?.team_2?.img} />
      </Row>

      <TeamLogo side="right" src={match?.team_2?.img} />
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

const TeamBox = styled.div<{ side: "left" | "right" }>`
  background: ${({ side }) => (side === "right" ? "#D43927" : "#03A8FC")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;
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

const ScoreBox = styled.div`
  box-shadow: -3px -2px 11px 0px #00000099;
  width: 175px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #242625;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FoulsRowNew = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  aign-items: center;
  font-weight: 500;
  font-size: 24px;
  padding: 0 12px;
  margin-bottom: 8px;
`;

const FoulNumber = styled.div`
  color: #fff;
  font-weight: 600;
`;

const MainScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0; /* можно использовать gap, если нужно */
`;

const ScoreValue = styled.div`
  font-size: 39px;
  font-weight: 600;
  color: white;
  padding: 0 18px;
  width: 50px; /* или auto, если текст фиксированной ширины */
  text-align: center;
`;

const WhiteDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4px;
  height: 63px;
`;

const DividerSegment = styled.div`
  width: 100%;
  background: white;
`;

const DividerTop = styled(DividerSegment)`
  height: 19px;
`;

const DividerBottom = styled(DividerSegment)`
  height: 19px;
`;

const TimerText = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  width: 100%; /* чтобы занимал всю ширину родителя */
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

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 80px;
  height: 80px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-40px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-50px" : "auto")};
  top: ${(props) => (props.side === "right" ? "30px" : "35px")};
  z-index: 10;
`;

const TeamName = styled.div`
  font-family: "Furore", sans-serif;
  font-weight: 600;
  font-size: 39px;
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

const FoulText = styled.div`
  margin-top: 4px;
  height: 22px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  padding: 0 14px;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
`;
