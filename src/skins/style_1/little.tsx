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
  height: 53px;
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
  width: 140px; // уменьшено с 175px
  padding: 6px 0; // меньше вертикального пространства
  border-radius: 16px; // чуть менее округлые углы
  background: #242625;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
`;


const FoulsRowNew = styled.div`
  font-size: 18px; // было 24px
  margin-bottom: 4px; // меньше отступ
  padding: 0 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 32px; // было 39px
  padding: 0 12px;
  width: 40px; // было 50px
  text-align: center;
  font-weight: 600;
  color: white;
`;


const WhiteDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4px;
  height: 40px;
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
  margin-top: 4px; // меньше отступа
  font-size: 18px; // было 24px
  font-weight: 600;
  color: #fff;
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

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 80px;
  height: 80px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "-40px" : "auto")};
  right: ${(props) => (props.side === "right" ? "-50px" : "auto")};
  top: ${(props) => (props.side === "right" ? "20px" : "18px")};
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

const FoulText = styled.div`
  font-size: 16px; // было 20px
  padding: 0 8px;
  height: auto;
  margin-top: 2px;
  text-transform: uppercase;
  color: #fff;
`;
