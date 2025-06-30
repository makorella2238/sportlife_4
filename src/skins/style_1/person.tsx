"use client";

import { useMatch } from "@/hooks";
import styled, { keyframes } from "styled-components";

export const Person = ({ kind, show }: { kind: string; show: boolean }) => {
  const match = useMatch();
  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <TeamBoxWrapper>
        <PersImage src="/personCard.png" alt="Player" />

        {kind == "goal" && <Goal>ГОЛ!</Goal>}
        {kind == "yellow" && <YellowBarLeft />}
        {kind == "red" && <RedBarLeft />}
        <TeamBox side="left">
          <LineWrapper>
            <YellowLine />
          </LineWrapper>
          <Col>
            <Row>
              <TeamName side="left">Иванов Олег 37’</TeamName>
            </Row>
            <TeamNameLit side="right">экспресс офис</TeamNameLit>
          </Col>
        </TeamBox>
        <TeamLogo side="right" src={match?.team_1?.img} />
      </TeamBoxWrapper>
    </Wrapper>
  );
};

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TeamBoxWrapper = styled.div`
  width: 469px;
  position: relative;
  display: flex;
  align-items: flex-start;
  animation: ${slideInFromLeft} 0.6s ease-out forwards;
`;

const YellowBarLeft = styled.div`
  position: absolute;
  top: 0;
  left: -58px;
  width: 58px;
  height: 100%;
  background: #ffc70f;

  z-index: 3;
`;

const RedBarLeft = styled.div`
  position: absolute;
  top: 0;
  left: -58px;
  width: 58px;
  height: 100%;
  background: rgba(255, 15, 15, 1);

  z-index: 3;
`;

const Goal = styled.div`
  position: absolute;
  top: -50px; /* чуть выше изображения */
  right: 130px; /* отступ от правого края блока */
  width: 121px;
  height: 50px;
  background: linear-gradient(
    90deg,
    /* направление: слева направо */ #00a954 0%,
    /* светло-зелёный в начале */ #00904a 50%,
    /* средний оттенок */ #006633 100% /* тёмно-зелёный в конце */
  );

  clip-path: polygon(25px 0, 100% 0, 100% 100%, 0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Furore", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  z-index: 4;
`;

const LineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 2;
`;

const YellowLine = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background: #0d7d03;
`;

const PersImage = styled.img`
  position: absolute;
  top: -130px;
  right: 10px;
  width: 120px;
  height: 130px;
  object-fit: cover;
  z-index: 2;
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  top: -34px;
  right: -90px;
  height: 186px;
  width: 186px;
  object-fit: contain;
  margin-left: 20px;
  z-index: 3;
  align-self: center;
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(14, 23, 63, 1) 0%,
    rgba(1, 9, 32, 1) 100%
  );
  position: relative;
  display: flex;
  height: 120px;
  align-items: center;
  overflow: hidden;
  justify-content: flex-end;
  padding-left: 100px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-right: 100px;
  align-items: flex-end;
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "Furore", sans-serif;
  font-size: 35px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
`;

const TeamNameLit = styled.div<{ side: "left" | "right" }>`
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Furore", sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  ${({ side }) =>
    side === "left"
      ? `
        padding-left: 40px;
        justify-content: flex-end;
      `
      : `
        padding-right: 15px;
        justify-content: flex-end;
      `}
`;
