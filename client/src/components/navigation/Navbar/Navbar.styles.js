import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100%;
  height: 50px;
`;

export const NavbarInner = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 10px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Home = styled(Link)`
  padding: 0 50px;
  font-size: 30px;
  font-family: 'Dancing Script', cursive;
`;
