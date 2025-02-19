import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.nav`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 15px;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink to="/cadastro-pontos">Cadastro de Pontos de Recarga</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/">Logoff</SidebarLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
