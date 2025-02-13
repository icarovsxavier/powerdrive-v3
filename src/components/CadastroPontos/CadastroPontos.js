import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  max-width: 600px;
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

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical; /* Allows the user to resize the textarea vertically */
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

const CadastroPontos = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log('Cadastro realizado', { nome, endereco, descricao });
  };

  return (
    <Container itemScope>
      <Title>Cadastro de Pontos de Recarga</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="nome">Nome do Ponto</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="endereco">Endereço</Label>
          <Input
            type="text"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="descricao">Descrição</Label>
          <Textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            rows="4"
          />
        </InputGroup>
        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};

export default CadastroPontos;
