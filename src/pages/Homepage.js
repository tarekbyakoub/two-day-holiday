import { Title } from '../styled';
import { Link } from 'react-router-dom';
import { LinkWord } from '../styled';
import styled from 'styled-components';

export const Homepage = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src="https://i.pinimg.com/564x/5d/56/34/5d5634f4a1ee8017c79eac486c72004a.jpg"
          alt="Paris"
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="https://i.pinimg.com/564x/78/8e/c0/788ec0907b68dfe29cda89d019684b72.jpg"
          alt="Barcelona"
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="https://i.pinimg.com/564x/de/0b/b4/de0bb4e0448983ce548ad97b33438234.jpg"
          alt="Amsterdam"
        />
      </ImageWrapper>
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
