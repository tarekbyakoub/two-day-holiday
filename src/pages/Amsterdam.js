import React from "react";
import axios from "axios";
import { CityExperienceCard } from "../components/CityExperienceCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Amsterdam = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    a:link {
      text-decoration: none;
      color: black;
    }
    a:visited {
      text-decoration: none;
      color: black;
    }
    width: 700px;
  `;

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e1e5f2;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 15px;
  `;

  const CardData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    text-align: center;
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
        "https://media.istockphoto.com/photos/spanish-cities-the-sacred-barcelona-family-picture-id1301579230?b=1&k=20&m=1301579230&s=170667a&w=0&h=lx_qYx9mHAP2emRwBLX6JY7Q9wJEik7HjAfnQnzKsjE=",
      cityId: 2,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Steve Job's trip to Barcelona",
      content:
        "Barcelona is a city with a wide range of original leisure options that encourage you to visit time and time again. Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
      imageUrl:
        "https://media.istockphoto.com/photos/park-guell-in-barcelona-spain-picture-id148543868?b=1&k=20&m=148543868&s=170667a&w=0&h=6cMbqpqpbPbo0uD4tS9E7JlhUVkRDoKcbOJHRXxnndk=",
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
        "https://media.istockphoto.com/photos/channel-in-amsterdam-netherlands-houses-river-amstel-picture-id1143539287?k=20&m=1143539287&s=612x612&w=0&h=2sUr7IPEMLriJfC4S8n2hum_NQiuZ3iWKr9IEUaOYzo=",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Steve Job's trip to Amsterdam",
      content:
        "I love Amsterdam. It was the first city I ever visited in Europe. Amsterdam has more canals than Venice. WAY more canals… close to three times as many canals.",
      imageUrl:
        "https://img.freepik.com/premium-photo/canal-sunset-amsterdam-is-capital_146671-11289.jpg?w=2000",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <Container>
      <Wrapper>
        {amsterdam.map((e) => {
          return (
            <Link to={`/amsterdam/${amsterdam.indexOf(e) + 1}`}>
              <Card>
                <Username>{e.name}</Username>
                <img src={e.imageUrl} style={{ width: "300px" }} />
                <CardData>{e.content}</CardData>
              </Card>
            </Link>
          );
        })}
      </Wrapper>
    </Container>
  );
};
