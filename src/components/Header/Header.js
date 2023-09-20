import React from 'react';
import { ListHeader, StyledHeader, StyleLink } from './StyledHeader.styled';

export default function Header() {
  return (
    <StyledHeader>
      <ListHeader>
        <li>
          <StyleLink to={'/'}>Home</StyleLink>
        </li>
        <li>
          <StyleLink to={'/catalog'}>Catalog</StyleLink>
        </li>
        <li>
          <StyleLink to={'/favorite'}>Favorite</StyleLink>
        </li>
      </ListHeader>
    </StyledHeader>
  );
}
