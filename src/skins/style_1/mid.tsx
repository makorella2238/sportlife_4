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
        <Overlay /> {/* <-- вот сюда */}
        <TitleContainer>
          <TitleLine>{titleWords}</TitleLine>
        </TitleContainer>
        <TeamsContainer>
          <TourTextCom>{match?.stadium?.name}</TourTextCom>
        </TeamsContainer>
        <TeamsRow>
          <TeameBox color={match?.team_1?.color}>
            <TeamLogo src={match?.team_1?.img} />
            <TeamName>{match?.team_1?.name}</TeamName>
          </TeameBox>

          <LogoCombo>
            <TeamLogo1 src="/vs/V.png" />
            <TeamLogo2 src="/vs/moln.png" />
            <TeamLogo3 src="/vs/S.png" />
          </LogoCombo>

          <TeameBox color={match?.team_2?.color}>
            <TeamLogo src={match?.team_2?.img} />
            <TeamName>{match?.team_2?.name}</TeamName>
          </TeameBox>
        </TeamsRow>
        <Row>
          <DateBox>31.07.2025</DateBox>
          <TourBox>
            <TourText>1 тур</TourText>
          </TourBox>
          <TimeBox>03:00</TimeBox>
        </Row>
      </Wrapper>
    </Container>
  );
};
const pulse = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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

const pulseScale = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const lightningStrike = keyframes`
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 0 transparent);
    transform: translateX(0);
    opacity: 1;
  }
  10% {
    filter: brightness(3) drop-shadow(0 0 10px #fff);
    opacity: 1;
    transform: translateX(2px);
  }
  20% {
    filter: brightness(1.5) drop-shadow(0 0 5px #f0f8ff);
    opacity: 0.8;
    transform: translateX(-2px);
  }
  30% {
    filter: brightness(2.5) drop-shadow(0 0 12px #aaf);
    opacity: 1;
    transform: translateX(1px);
  }
  50% {
    filter: brightness(1) drop-shadow(0 0 0 transparent);
    opacity: 0.7;
    transform: translateX(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #d43927, #942619, #d43927);
  background-size: 400% 400%;
  animation: ${pulse} 8s ease-in-out infinite;
  z-index: 5;
  opacity: 0.9; /* Задаём прозрачность всей подложке */
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
  position: relative; /* <<< ДОБАВЬ ЭТО */
  border-radius: 64px;
  width: 1290px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Furore", sans-serif;
  overflow: hidden;
  background: url("/Group.png") no-repeat center center / cover;
  animation: ${slideDown} 0.5s ease forwards;
  padding-bottom: 20px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
`;

const TitleContainer = styled.div`
  padding: 32px 45px;
  width: 891px;
  border-radius: 0 0 24px 24px;
  display: flex;
  background: #242424;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const TitleLine = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
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

const TeamsRow = styled.div`
  display: flex;
  juctify-content: center;
  width: 1039px;
  position: relative; /* Чтобы позиционировать LogoCombo относительно этого контейнера */
  display: flex;
  justify-content: space-between; /* Команды слева и справа */
  align-items: center;
  margin-top: 20px;
  z-index: 5;
`;

const TeameBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TeamLogo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin-bottom: 20px;
  animation: ${pulseScale} 3s ease-in-out infinite;
`;

const Row = styled.div`
  border-radius: 24px 24px 0 0;

  width: 581px;
  margin-top: 64px;
  height: 88px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgb(148, 38, 25);
  z-index: 5;
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 37px;
  text-transform: uppercase;
  padding: 0 20px;
`;

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 37px;
  text-transform: uppercase;
  padding: 0 20px;
`;

const TourBox = styled.div`
  border-radius: 24px 24px 0 0;

  width: 180px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242625;
  color: #fff;
`;

const TourText = styled.div`
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
  user-select: none;
`;

const TourTextCom = styled.div`
  font-weight: 600;
  font-size: 37px;
  text-transform: uppercase;
  color: #fff;
  user-select: none;
`;

const TeamLogo1 = styled.img`
  width: 98.11px;
  height: 105.7px;
  object-fit: contain;
`;

const TeamLogo2 = styled.img`
  width: 68px;
  height: 182px;
  object-fit: contain;
  animation: ${lightningStrike} 2.5s ease-in-out infinite;
`;

const TeamLogo3 = styled.img`
  width: 87.72px;
  height: 108.75px;
  object-fit: contain;
`;

const LogoCombo = styled.div`
  position: absolute; /* Абсолютное позиционирование */
  left: 50%; /* Сдвигаем в центр по левому краю */
  transform: translateX(-50%); /* Центрируем по середине */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  z-index: 10; /* Поверх всего */
  width: 300px; /* Можно подстроить под размеры логотипов */
`;
