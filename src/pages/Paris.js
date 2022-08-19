import React from "react";
import axios from "axios";
import { CityExperienceCard } from "../components/CityExperienceCard";
import styled from "styled-components";

export const Paris = () => {
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

  const paris = [
    {
      name: "Bill Gate's trip to Paris",
      content:
        "Paris is beautiful, there's no arguing with that. But don't be fooled into thinking it's just a living museum, it is so much more than that.",
      imageUrl:
        "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Steve Job's trip to Paris",
      content:
        "Paris is worth visiting for the plethora of things to discover, see, and experience – all in one metropolis.",
      imageUrl:
        "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const barcelona = [
    {
      name: "Bill Gate's trip to Barcelona",
      content:
        "Barcelona is an enchanting seaside city with boundless culture, fabled architecture and a world-class dining scene.",
      imageUrl:
        "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 2,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Steve Job's trip to Barcelona",
      content:
        "Barcelona is a city with a wide range of original leisure options that encourage you to visit time and time again. Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
      imageUrl:
        "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 2,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const amsterdam = [
    {
      name: "Bill Gate's trip to Amsterdam",
      content:
        "There are endless things to do in Amsterdam in any weather and many of the most rewarding experiences lie beyond the well-trodden tourist paths of the city centre.",
      imageUrl:
        "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Steve Job's trip to Amsterdam",
      content:
        "I love Amsterdam. It was the first city I ever visited in Europe. Amsterdam has more canals than Venice. WAY more canals… close to three times as many canals.",
      imageUrl:
        "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <Wrapper>
      {paris.map((e) => {
        return (
          <Card>
            <Username>{e.name}</Username>
            <img src={e.imageUrl} style={{ width: "300px" }} />
            <CardData>{e.content}</CardData>
          </Card>
        );
      })}
    </Wrapper>
  );
};
