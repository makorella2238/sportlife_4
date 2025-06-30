"use client";

import { useMatch } from "@/hooks";
import { RefObject, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export const Mid = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const titleWords = match?.tournament?.full_name;

  return (
    <Container>
      <Wrapper style={{ display: show ? "flex" : "none" }}>
        <BackgroundImage />
        <TitleContainer>
          <TitleLine>{titleWords}</TitleLine>
        </TitleContainer>

        <TeamsContainer>
          <TourText>{match?.stadium?.name}</TourText>
        </TeamsContainer>

        <TeamsRow>
          <TeameBox color={match?.team_1?.color}>
            <TeamLogo src={match?.team_1?.img} />
            <TeamName>{match?.team_1?.name}</TeamName>
          </TeameBox>

          <TeameBox color={match?.team_2?.color}>
            <TeamLogo src={match?.team_2?.img} />
            <TeamName>{match?.team_2?.name}</TeamName>
          </TeameBox>
        </TeamsRow>

        <Row>
          <TimeBox side="left">
            <InnerBox side="left">
              <TeamNameForData>31.07.2025</TeamNameForData>
            </InnerBox>
          </TimeBox>

          <Divider />

          <TimeBox side="right">
            <InnerBox side="right">
              <TeamNameForData>03:00</TeamNameForData>
            </InnerBox>
          </TimeBox>

          <Trapezoid>
            <TrapezoidText>1 тур</TrapezoidText>
          </Trapezoid>
        </Row>
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1290px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Furore", sans-serif;
  overflow: hidden;
  background: linear-gradient(145.95deg, #0e173f 16.18%, #0d7d03 87.03%);
  animation: ${slideDown} 0.5s ease forwards;

  padding-bottom: 20px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145.95deg, #0e173f 16.18%, #0d7d03 87.03%);

  z-index: 1;
`;

const TitleContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const TitleLine = styled.div`
  font-family: "Furore", sans-serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 70px;
  letter-spacing: -2%;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  margin-bottom: 10px;
  z-index: 5;
`;

const TourText = styled.div`
  font-size: 37px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  text-color: #fff;
`;

const TeamsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 168px;
  margin-top: 20px;
  z-index: 5;
`;

const TeameBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 5px;
  height: 56px;
  background: #fff;
  z-index: 3;
  border-bottom: 4px solid #0d7d03;
`;

const TeamName = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 40px;
  color: #fff;
  padding: 0 24px;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TeamNameForData = styled.div`
  width: 224px;
  font-weight: 600;
  font-size: 37px;
  color: #fff;
  padding: 0 24px;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TeamLogo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const Row = styled.div`
  width: 452px;
  margin-top: 45px;
  height: 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const TimeBox = styled.div<{ side: "left" | "right" }>`
  background: linear-gradient(to top, #010920, #0e173f);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  position: relative;
  border-bottom: 4px solid #0d7d03;
`;

const InnerBox = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  padding: ${({ side }) => (side === "right" ? "0 20px" : "0 20px")};
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const Trapezoid = styled.div`
  position: absolute;
  top: 100%; /* сразу под Row */
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 40px;
  background: #fff;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

const TrapezoidText = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: #0e173f;
`;
