"use client";

import { useMatch } from "@/hooks";
import styled from "styled-components";

export const PersonKindPage = ({ person_kind }: { person_kind: any }) => {
  const match = useMatch();

  return (
    <Wrapper>
      <TeamBoxWrapper>
        {person_kind == "goal" && <Goal>гооол!</Goal>}
        <PersImage src="/personCard.png" alt="Player" />
        <TeamBox side="left">
          <DiagonalBar />
          <Col>
            <Row>
              {(person_kind === "yellow" || person_kind === "red") && (
                <Card color={person_kind} />
              )}

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

const Row = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Goal = styled.div`
  background: linear-gradient(90deg, #191919 23.68%, #008bb1 80.03%);
  color: #FFFFFF;
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
`;

const TeamBoxWrapper = styled.div`
  width: 575px;
  position: relative;
  display: flex;
  align-items: flex-start;
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

const TeamName = styled.div<{ side: "left" | "right" }>`
  height: 40px;
  display: flex;
  align-items: center;
  font-family: "Furore", sans-serif;
  font-size: 35px;
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
