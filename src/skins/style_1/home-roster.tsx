"use client";

import styled, { keyframes } from "styled-components";
import { useMatch } from "@/hooks";
export const HomeRoster = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const players = match?.results_1 || [];
  const teamName = match?.team_1?.name || "";

  return (
    <Container style={{ display: show ? "flex" : "none" }}>
      <Wrapper>
        <HeaderRow>
          <Title>СОСТАВ {teamName}</Title>
        </HeaderRow>
        <Row>
          <LeftCol>
            <GridWrapper>
              {players.map((player, i) => (
                <PlayerBlock key={i}>
                  <LeftImage src="/pers.png" />
                  <RightInfo>
                    <NameBlock>{player.player_fio}</NameBlock>
                    <NumberBlock>{player.player_number}</NumberBlock>
                  </RightInfo>
                </PlayerBlock>
              ))}
            </GridWrapper>
          </LeftCol>

          <RightCol>
            <TeamLogo src={match?.team_1?.img} alt="Team Logo" />
            <Spacer />

            <PlayerBlock>
              <LeftImage src="/pers.png" alt="Coach" />
              <Rint>
                <Fio>{match.team_2.coaches[0].fio.replace(" ", "\n")}</Fio>
                <BottomInf>Тренер</BottomInf>
              </Rint>
            </PlayerBlock>

            <PlayerBlock>
              <LeftImage src="/pers.png" alt="Coach" />
              <Rint>
                <Fio>{match.team_2.coaches[1].fio.replace(" ", "\n")}</Fio>
                <BottomInf>Представитель</BottomInf>
              </Rint>
            </PlayerBlock>
          </RightCol>
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
  text-color: #fff;
  width: 1720px;
  height: 920px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #0e173f, #001b94);
  padding: 100px 55px 70px 70px; /* top right bottom left */
  width: 100%;
  height: 100%;
  animation: ${slideDown} 1s ease forwards;
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightCol = styled.div`
  width: 272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 55px;
`;

const HeaderRow = styled.div`
  height: 45px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  text-transform: uppercase;
`;

const TeamLogo = styled.img`
  width: 272px;
  height: 272px;
  object-fit: contain;
`;

const Spacer = styled.div`
  height: 124px;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 112px;
  gap: 20px 60px;
`;

const PlayerBlock = styled.div`
  margin-top: 20px;
  display: flex;
  width: 272px;
  height: 112px;
`;

const LeftImage = styled.img`
  width: 90px;
  height: 112px;
  object-fit: cover;
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin-top: 69px;
  display: flex;
`;

const NameBlock = styled.div`
  margin-top: 2px;
  width: 150px;
  height: 44px;
  background: linear-gradient(90deg, #095102 0%, #00a954 51.68%, #095102 100%);
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-line;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.2;
`;

const NumberBlock = styled.div`
  width: 46px;
  height: 44px;
  background: #0e173f;
  color: #ffffff;

  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomInf = styled.div`
  width: 100%;
  height: 44px;
  background: #0e173f;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fio = styled.div`
  padding: 8px 16px;

  width: 182px;
  height: 44px;
  background: #000000; /* ← пропущена ; */
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-line; /* ← обязательно для \n */
`;

const Rint = styled.div`
  display: flex; /* ← исправлено dislay */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;