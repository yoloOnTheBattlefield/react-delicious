import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100%;
  height: 55px;
  padding-bottom: 1px;
  position: relative;
  background: #111;
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #54DEFD, #49C6E5);
    bottom: -5px;
    z-index: -1;
    transition: 0.2s ease-in-out;
  }
  &:hover:after{
    transform: translatey(-100%);
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
  padding: 5px;
  height: 100%;
  width: 100%;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
  text-align: center;
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: red;
    bottom: 0;
    left: 0;
    transition: 0.2s ease-in-out;
    transform: translatey(200%);
  }
  &:hover:after{
    transform: translatey(0%);
  }
  &:hover{
    color: white;
  }
`;


export const Home = styled(Link)`
  width: 20%;
  padding: 0 20px;
  font-size: 40px;
  line-height: 40px;
  font-family: 'Dancing Script', cursive;
  background: #49C6E5;
  background: linear-gradient(to right, #54DEFD, #49C6E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
