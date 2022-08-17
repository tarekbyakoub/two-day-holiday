import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../store/user/selectors';
import { logOut } from '../store/user/slice';

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <Container>
      <Nav>
        <Logo href="/">
          2Day<span>Holliday</span>
        </Logo>
        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu open={open}>
          {token ? (
            <div>
              <MenuLink>MySpace</MenuLink>
              <MenuLink onClick={() => dispatch(logOut())}>Logout</MenuLink>
            </div>
          ) : (
            <MenuLink href="/login">Login</MenuLink>
          )}
          <MenuInput type="text" placeholder="Search"></MenuInput>
        </Menu>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  background: #e1e5f2;
  height: 100px;
`;

const MenuInput = styled.input`
  height: 20px;
  border-radius: 5px;
  border: none;
`;

const MenuLink = styled.a`
  margin: 20px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #14213d;
  transition: all 0.3s ease-in;
  font-size: 16px;

  &:hover {
    color: #2a9d8f;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #14213d;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
