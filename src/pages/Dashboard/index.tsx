import React from 'react';
import { FaSearch, FaArrowLeft, FaAngleRight } from 'react-icons/fa';
import {
  Header,
  Title,
  Button,
  Categories,
  Subtitle,
  CategoriesButton,
  QuestionsContainer,
  Question,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <Button>
          <FaArrowLeft />
        </Button>
        <Title>Como podemos ajudar?</Title>
      </Header>

      <Subtitle>
        <h2>Perguntas Frequentes</h2>
        <button>
          <FaSearch />
        </button>
      </Subtitle>

      <Categories>
        <CategoriesButton> Valores </CategoriesButton>
        <CategoriesButton> Solicitações </CategoriesButton>
        <CategoriesButton> Contato </CategoriesButton>
        <CategoriesButton> Contato </CategoriesButton>
        <CategoriesButton> Rotas </CategoriesButton>
        <CategoriesButton> Contato </CategoriesButton>
        <CategoriesButton> Valores </CategoriesButton>
        <CategoriesButton> Solicitações </CategoriesButton>
      </Categories>

      <QuestionsContainer>
        <Question href="#">
          Como me tornar um parceiro? <FaAngleRight />
        </Question>
        <Question href="#">
          Como contratar o serviço? <FaAngleRight />
        </Question>
        <Question href="#">
          Aplicativo com erro, qual o procedimento? <FaAngleRight />
        </Question>
        <Question href="#">
          Como me tornar um parceiro? <FaAngleRight />
        </Question>
      </QuestionsContainer>
    </>
  );
};

export default Dashboard;
