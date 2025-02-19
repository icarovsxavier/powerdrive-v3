import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 40px;
`;

const Title = styled.h2`
  text-align: center;
  padding: 10px;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--cor-button);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-button-hover);
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Container>
      <Title>Login</Title>
      <form action="#" method="POST" id="login-form" onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" name="password" required />
        </InputGroup>
        <Button type="submit">Entrar</Button>
      </form>
      <Paragraph>
        Não tem uma conta? <a href="/cadastro-usuario">Cadastre-se</a>
      </Paragraph>
    </Container>
  );
};

export default LoginForm;
