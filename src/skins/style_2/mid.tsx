"use client";

import { useMatch } from "@/hooks";
import styled from "styled-components";
export const Mid = ({ show }: { show: boolean }) => {
  const match = useMatch();
  const titleWords = match?.tournament?.full_name?.split(" ") || [];
  const line1 = titleWords.slice(0, 2).join(" ");
  const line2 = titleWords.slice(2, 4).join(" ");

  return (
    <Wrapper style={{ display: show ? "flex" : "none" }}>
      <BackgroundImage />
      <TitleContainer>
        <TitleLine>{line1}</TitleLine>
        <TitleLine>{line2}</TitleLine>
      </TitleContainer>

      <TeamsContainer>
        <TourBlock variant="normal">
          <TourText>Солидарность Самара Арена</TourText>
        </TourBlock>
        <TourBlock variant="inverted">
          <TourText>{match?.circle}</TourText>
        </TourBlock>
      </TeamsContainer>

      <TeamsRow>
        <TeamLogo side="left" src={match?.team_1?.img} />
        <TeamBox side="left" style={{ marginRight: "250px" }}>
          <TeamName side="left">{match?.team_1?.name}</TeamName>
          <TeamSlash side="left" />
        </TeamBox>

        <TeamBox side="right" style={{ marginLeft: "250px" }}>
          <TeamSlash side="right" />
          <TeamName side="right">{match?.team_2?.name}</TeamName>
        </TeamBox>
        <TeamLogo side="right" src={match?.team_2?.img} />
      </TeamsRow>
      <BottomInfo>
        <DateText>31.07.2025</DateText>
        <GradientSlash />
        <TimeText>03:00</TimeText>
      </BottomInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
  margin-top: 50px;
  margin-left: 150px;
  position: relative;
  width: 1400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Furore", sans-serif;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/Group.png") no-repeat center center / cover;
  z-index: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const TitleLine = styled.div`
  font-family: "Furore", sans-serif;
  font-weight: 400;
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
  gap: 50px;
  z-index: 5;
  margin-top: 40px;
  margin-bottom: 64px;
`;

const TourBlock = styled.div<{ variant?: "normal" | "inverted" }>`
  position: relative;
  padding: 20px 50px;
  background: #00063c;
  border-top: 4px solid #29356a;
  border-bottom: 4px solid #29356a;
  overflow: hidden;
  transform: ${({ variant }) =>
    variant === "inverted" ? "skewX(-20deg)" : "skewX(20deg)"};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 8px;
    height: 100%;
    background-color: #29356a;
    z-index: 1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  /* "отменяем" наклон внутри текста */
  > * {
    transform: ${({ variant }) =>
      variant === "inverted" ? "skewX(20deg)" : "skewX(-20deg)"};
    display: inline-block;
  }
`;

const TourText = styled.div`
  font-size: 37px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

const BottomInfo = styled.div`
  position: absolute;
  bottom: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 5;
  padding: 15px 40px;
`;

const DateText = styled.div`
  font-family: "Furore", sans-serif;
  font-weight: 400;
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  /* leading-trim: cap-height; */
`;

const TimeText = styled(DateText)``;

const GradientSlash = styled.div`
  width: 21px;
  height: 26px;
  background: url("/line.png") no-repeat center center / cover;
`;

const TeamsRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  margin-top: 20px;
  z-index: 5;
`;

const TeamBox = styled.div<{ side: "left" | "right" }>`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.side === "right" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => (props.side === "left" ? "0 30px 0 0" : "0 0 0 30px")};
  margin: ${(props) => (props.side === "left" ? "0 0 0 5px" : "0 5px 0 0")};
  background: ${(props) =>
    props.side === "left"
      ? "linear-gradient(90deg, #008BB1 0%, #191919 100%)"
      : "linear-gradient(90deg, #191919 0%, #FF0000 100%)"};
  height: 78px;
  width: 650px;

  clip-path: ${(props) =>
    props.side === "left"
      ? "polygon(0 0, calc(100% - 19px) 0, 100% 100%, 0% 100%)"
      : "polygon(19px 0, 100% 0, 100% 100%, 0 100%)"};

  ${(props) =>
    props.side === "left"
      ? "transform: translateX(28px);"
      : "transform: translateX(-28px);"}
  z-index: 10;

  overflow: visible;
`;

const TeamName = styled.div<{ side: "left" | "right" }>`
  height: 78px;
  width: 570px;
  display: flex;
  align-items: center;
  font-family: "Furore", sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 37.33px;
  letter-spacing: -2%;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;

  ${({ side }) =>
    side === "left"
      ? `
        padding-left: 30px;
        justify-content: flex-end; 
      `
      : `
        padding-right: 30px;
        justify-content: flex-start;
      `};
`;

const TeamLogo = styled.img<{ side: "left" | "right" }>`
  position: absolute;
  width: 263px;
  height: 263px;
  object-fit: contain;
  left: ${(props) => (props.side === "left" ? "11%" : "auto")};
  right: ${(props) => (props.side === "right" ? "13%" : "auto")};
  top: ${(props) => (props.side === "right" ? "-50%" : "-106%")};
  :45px ;
  transform: translateY(50%);
  z-index: 20;
`;

const TeamSlash = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  background: ${(props) => (props.side === "left" ? "#008BB1" : "#FF0000")};
  z-index: 3;
  transform: ${(props) =>
    props.side === "left" ? "skewX(-167deg)" : "skewX(167deg)"};

  ${(props) =>
    props.side === "left"
      ? `right: 0; transform-origin: right;`
      : `left: 0; transform-origin: left;`}
`;
