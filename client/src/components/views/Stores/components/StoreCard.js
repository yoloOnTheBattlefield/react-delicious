import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default ({ store }) => (
  <Card>
    <Link to={`/store/${store.slug}`}>
      <Image
         src='https://images.unsplash.com/photo-1492574037190-8b88b600ca50?dpr=2&auto=format&fit=crop&w=1080&h=899&q=80&cs=tinysrgb&crop='
         style={{width: '100%', height: 200}}
      />
    </Link>
    <Card.Content>
      <Card.Header>{store.name}</Card.Header>
      <Card.Meta>{store.tags}</Card.Meta>
      <Card.Description>{store.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/store/${store.slug}`}>
        Check out {store.name}
      </Link>
    </Card.Content>
  </Card>
)
