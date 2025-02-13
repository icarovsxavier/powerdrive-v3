import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--cor-primaria);
  color: var(--cor-secundaria);
  text-align: center;
  padding: 10px;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 !POWERDRIVE. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
