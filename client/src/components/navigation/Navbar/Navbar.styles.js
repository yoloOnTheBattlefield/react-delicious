import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100%;
  height: 55px;
  padding-bottom: 5px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #ffc0cb, #800080);
    bottom: -5px;
  }
`;

export const NavbarInner = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 10px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LinksContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;

`;

export const AuthContainer = LinksContainer.extend`
  width: 20%
`;

export const Item = styled.div`
  font-size: 20px;
  color: #999;
  transition: 0.2s;
  &:hover{
    color: #333;
  }
`;


export const Home = styled(Link)`
  width: 20%;
  padding: 0 20px;
  font-size: 40px;
  line-height: 40px;
  font-family: 'Dancing Script', cursive;
  background: #800080;
  background: linear-gradient(to right, #ffc0cb, #800080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
