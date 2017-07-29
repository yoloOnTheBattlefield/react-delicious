import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  margin: 10px;
  width: 300px;
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
  &:after{
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(255,255,255, 0.4);
  }
`;

const CardImageBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  top: 0px;
  left: 0;
  background: url(${props => props.src});
  background-size: cover;
  background-position: 50%;
  filter: blur(5px);
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  top: 0px;
  left: 0;
  background: linear-gradient(to bottom, #111 0%, rgba(0,0,0,0.5) 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.div`
  width: 280px;
  height: 280px;
  margin: 10px auto;
  border-radius: 10px;
  background: url(${props => props.src});
  background-size: cover;
  background-position: 50%;
  box-shadow: 0px 20px 50px #111;
`;

const CardDescription = styled.div`
  position: absolute;
  width: 280px;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px auto;
  font-size: 15px;
  color: white;
`;

export default ({ store }) => {
  if(!store){
    return null;
  }

  const storePhoto = store.photo;
  const altPhoto = 'https://images.unsplash.com/photo-1492574037190-8b88b600ca50?dpr=2&auto=format&fit=crop&w=1080&h=899&q=80&cs=tinysrgb&crop='

  return (
    <Card>
      <CardImageBlur src={storePhoto || altPhoto} />
      <Wrapper>
        <Link to={`/stores/${store._id}`}>
          <CardImage src={storePhoto || altPhoto} />
        </Link>
      </Wrapper>
      <CardDescription>
        <h2>{store.name}</h2>
        <div>
          {
            store.description ?
              `Description: ${store.description.split(' ').slice(0, 25).join(' ')}`
              :
              ''
          }
        </div>
        <div style={{color: '#999'}}>{store.tags}</div>
        <Link to={`/stores/${store._id}/edit`}>Edit Store</Link>
      </CardDescription>
    </Card>
  )
}
