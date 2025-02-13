import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--cor-primaria);
  color: var(--cor-secundaria);
  padding: 20px;
  text-align: left;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>!POWERDRIVE</h1>
    </HeaderContainer>
  );
};

export default Header;
