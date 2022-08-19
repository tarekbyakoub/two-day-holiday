import { ImageList } from "@mui/material";
import userEvent from "@testing-library/user-event";
import React from "react";
import styled from "styled-components";
import { Experiencepage } from "../pages/Experiencepage";

export const CityExperienceCard = (props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Card = styled.div`
    display: flex;
  `;
  const CardData = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Username = styled.h1``;

  return (
    <Wrapper>
      {props.experiences.map((e) => {
        return (
          <Card>
            <Username>{e.name}</Username>
            <img src={e.imageUrl} />
            <CardData>{e.content}</CardData>
          </Card>
        );
      })}
    </Wrapper>
  );
};
