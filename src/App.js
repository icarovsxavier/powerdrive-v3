import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import CadastroUsuario from './components/CadastroUsuario/CadastroUsuario';
import GlobalStyles from './components/Styles/GlobalStyles';
import CadastroPontos from './components/CadastroPontos/CadastroPontos';
import Sidebar from './components/Sidebar/Sidebar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Dashboard = () => (
  <DashboardContainer>
    <Sidebar />
    <CadastroPontos />
  </DashboardContainer>
);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cadastro-pontos" element={<Dashboard />} />
        </Routes>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
