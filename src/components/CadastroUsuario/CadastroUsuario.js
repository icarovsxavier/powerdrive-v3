import React, { useState } from 'react';
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

const Select = styled.select`
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

const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
`;

const CadastroUsuario = () => {
  const [tipoCadastro, setTipoCadastro] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const mostrarCampos = () => {
    // Lógica para mostrar campos dependendo do tipo de cadastro
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    // Lógica de validação do formulário
    navigate('/dashboard');
  };

  return (
    <Container>
      <Title>Cadastro de Usuário</Title>
      <form id="cadastro-form" onSubmit={validarFormulario}>
        <InputGroup>
          <Label htmlFor="tipo-cadastro">Tipo de Cadastro</Label>
          <Select
            id="tipo-cadastro"
            name="tipo-cadastro"
            onChange={(e) => {
              setTipoCadastro(e.target.value);
              mostrarCampos();
            }}
            required
          >
            <option value="">Selecione</option>
            <option value="fisica">Pessoa Física</option>
            <option value="juridica">Pessoa Jurídica</option>
          </Select>
          <ErrorMessage id="tipo-error">{errors.tipoCadastro}</ErrorMessage>
        </InputGroup>

        {tipoCadastro === 'fisica' && (
          <div id="campos-fisica">
            <InputGroup>
              <Label htmlFor="nome">Nome Completo</Label>
              <Input type="text" id="nome" name="nome" />
              <ErrorMessage id="nome-error">{errors.nome}</ErrorMessage>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="cpf">CPF</Label>
              <Input type="text" id="cpf" name="cpf" />
              <ErrorMessage id="cpf-error">{errors.cpf}</ErrorMessage>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="nascimento">Data de Nascimento</Label>
              <Input type="date" id="nascimento" name="nascimento" />
              <ErrorMessage id="nascimento-error">{errors.nascimento}</ErrorMessage>
            </InputGroup>
          </div>
        )}

        {tipoCadastro === 'juridica' && (
          <div id="campos-juridica">
            <InputGroup>
              <Label htmlFor="razao-social">Razão Social</Label>
              <Input type="text" id="razao-social" name="razao-social" />
              <ErrorMessage id="razao-error">{errors.razaoSocial}</ErrorMessage>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input type="text" id="cnpj" name="cnpj" />
              <ErrorMessage id="cnpj-error">{errors.cnpj}</ErrorMessage>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="responsavel">Nome do Responsável</Label>
              <Input type="text" id="responsavel" name="responsavel" />
              <ErrorMessage id="responsavel-error">{errors.responsavel}</ErrorMessage>
            </InputGroup>
          </div>
        )}

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
          <ErrorMessage id="email-error">{errors.email}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" name="password" required />
          <ErrorMessage id="password-error">{errors.password}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirm-password">Confirme a Senha</Label>
          <Input type="password" id="confirm-password" name="confirm-password" required />
          <ErrorMessage id="confirm-password-error">{errors.confirmPassword}</ErrorMessage>
        </InputGroup>

        <Button type="submit">Cadastrar</Button>
      </form>
      <Paragraph>
        Já tem uma conta? <a href="/">Faça login</a>
      </Paragraph>
    </Container>
  );
};

export default CadastroUsuario;
