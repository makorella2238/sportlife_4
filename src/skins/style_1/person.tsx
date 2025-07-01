"use client";

import { useMatch } from "@/hooks";
import styled, { keyframes } from "styled-components";

export const Person = ({ kind, show }: { kind: string; show: boolean }) => {
  const match = useMatch();
  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <TeamBoxWrapper>
        {kind !== "yellow" && kind !== "red" && <PersImage src="/personCard.png" alt="Player"  />}

        {kind == "goal" && <Goal>ГОЛ!</Goal>}
        {kind == "yellow" && <YellowBarLeft />}
        {kind == "red" && <RedBarLeft />}
        <TeamBox side="left" wide={kind === "yellow" || kind === "red"}>
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
  justify-content: flex-end;
  
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
    border-bottom: none
`;

const TeamBoxWrapper = styled.div`
  width: 469px;
  position: relative;
  display: flex;
  align-items: flex-start;
  animation: ${slideInFromLeft} 0.6s ease-out forwards;
`;

const YellowBarLeft = styled.div`
  border-radius: 12px 0 0 0;
  position: absolute;
  top: 0;
  left: 0px;
  width: 58px;
  height: 100%;
  background: #ffc70f;

  z-index: 3;
`;

const RedBarLeft = styled.div`
  border-radius: 12px 0 0 0;
  position: absolute;
  top: 0;
  left: 0px;
  width: 58px;
  height: 100%;
  background: rgba(255, 15, 15, 1);

  z-index: 3;
`;

const Goal = styled.div`
  border-radius: 12px 12px 0 0;
  position: absolute;
  top: -43px; /* чуть выше изображения */
  right: 210px; /* сдвинуть влево для нависания */
  width: 121px;
  height: 43px;
  background: #d43927;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Furore", sans-serif;
  font-size: 28px;
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

const PersImage = styled.img<{ wide?: boolean }>`
  position: absolute;
  top: -130px;
  right: ${({ wide }) => (wide ? "60px" : "110px")}; /* 110 + 60 = 170 */
  width: 120px;
  height: 130px;
  object-fit: cover;
  z-index: 2;
`;

const TeamBox = styled.div<{ side: "left" | "right"; wide?: boolean }>`
  width: ${({ wide }) => (wide ? "450px" : "392px")};
  border-radius: ${({ wide }) => (wide ? "24px 0 0 0" : "24px 24px 0 0")};
  : ;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(14, 23, 63, 1) 0%,
    rgba(1, 9, 32, 1) 100%
  );
  display: flex;
  height: 120px;
  align-items: center;
  overflow: hidden;
  justify-content: flex-end;
  text-align: right;
  border-bottom: none
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%; /* занять всю ширину */
  padding-right: 20px; /* отступ справа */
  align-items: flex-end;
    border-bottom: none
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
  width: 100%; /* занять всю ширину */
  text-align: right; /* прижать текст к правому краю */
  font-family: "Furore", sans-serif;
  font-size: 35px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  /* убираем display: flex для обычного текста */
`;

const TeamNameLit = styled.div<{ side: "left" | "right" }>`
  width: 100%;
  text-align: right;
  font-weight: 600;
  font-family: "Furore", sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  padding-right: 15px;
`;
