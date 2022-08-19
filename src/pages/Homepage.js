import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { style } from "@mui/system";

export const Homepage = () => {
  const [city, setCity] = useState([]);

  const renderCity = async () => {
    try {
      const response = await axios.get("http://localhost:4000/city");
      const result = response.data;
      setCity(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    renderCity();
  }, []);

  console.log(city);

  return (
    <Wrapper>
      {!city ? (
        <h2>Loading...</h2>
      ) : (
        city.map((c) => (
          <Link to={`/${c.name}`}>
            {" "}
            <ImageWrapper>
              <Image src={c.picture} alt={c.name} />
              <ImageHeader>{c.name}</ImageHeader>
            </ImageWrapper>
          </Link>
        ))
      )}
    </Wrapper>
  );
};

const Image = styled.img`
  height: 500px;
  width: 300px;
  border-radius: 5px;
`;

const ImageWrapper = styled.div`
  margin-right: 40px;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageHeader = styled.h1`
  color: #14213d;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #2a9d8f;
  }
`;
