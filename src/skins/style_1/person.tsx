"use client";

import { useMatch } from "@/hooks";
import styled, { keyframes } from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";

const getFontSizeByLength = (text: string) => {
  const length = text.length;

  if (length <= 15) return 36;
  if (length <= 20) return 32;
  if (length <= 22) return 28;
  if (length <= 25) return 24;
  return 17;
};

const fio = 'Бердымухаммедов Гурбангулы 37’'

export const Person = ({ kind, show }: { kind: string; show: boolean }) => {
  const match = useMatch();
  
  const nameRef = useRef<HTMLDivElement>(null);
  const dynamicFontSize = useMemo(() => getFontSizeByLength(fio), [fio]);


  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <TeamBoxWrapper>
        {kind == "goal" && <Goal>гооол!</Goal>}
        <PersImage src="/personCard.png" alt="Player" />
        <TeamBox side="left">
          <DiagonalBar />
          <Col>
            <Row>
              {(kind === "yellow" || kind === "red") && <Card color={kind} />}

              <TeamName ref={nameRef} side="left" fontSize={dynamicFontSize}>
                {fio}
              </TeamName>
            </Row>
            <TeamNameLit side="right" >
              Тульский комбинат экспресс офис
            </TeamNameLit>
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
  margin-left: 30px;
`;

const Goal = styled.div`
  background: linear-gradient(90deg, #191919 23.68%, #008bb1 80.03%);
  color: #ffffff;
  width: 190px;
  height: 56px;
  position: absolute;
  top: 50%;
  left: -110px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Furore", sans-serif;
  border-radius: 4px;

  /* Скошен левый нижний угол */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 20px 100%);
`;

const Wrapper = styled.div`
  position: absolute;
  right: 162px;
  bottom: 62px;
  width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamBoxWrapper = styled.div`
  width: 575px;
  position: relative;
  display: flex;
  align-items: flex-start;
  animation: ${slideInFromLeft} 0.6s ease-out forwards;
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
  top: -30px;
  right: -107px;
  height: 186px;
  width: 186px;
  object-fit: contain;
  margin-left: 20px;
  z-index: 3;
  align-self: center;
`;

const Card = styled.div<{ color: "yellow" | "red" }>`
  width: 28px;
  height: 38px;
  background: ${(props) => props.color};
  border-radius: 3px;
  margin-right: 20px;
  z-index: 4;
`;

const DiagonalBar = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  width: 15px;
  height: 100%;
  background: #008bb1;
  transform: skewX(-35deg);
  z-index: 0;
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  position: relative;
  display: flex;
  height: 120px;
  width: 630px;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(100deg, #191919 23.68%, #008bb1 80.03%);
  justify-content: flex-end;
  padding-left: 100px;
  clip-path: polygon(84px 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-right: 80px;
  align-items: flex-end;
`;

const TeamName = styled.div<{ side: "left" | "right";  fontSize: number }>`
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "Furore", sans-serif;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  padding-left: ${(props) => props.fontSize == 17 ? "0px" : "30px"};
`;


const TeamNameLit = styled.div<{ side: "left" | "right" }>`
  height: 40px;
  max-width: 320px;
  display: flex;
  align-items: center;
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
        justify-content: flex-start;
      `
      : `
        padding-right: 15px;
        justify-content: flex-start;
      `}

  /* Эффект затухания справа */
  -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  mask-image: linear-gradient(to right, black 80%, transparent 100%);
`;
