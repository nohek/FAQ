import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Question, Answer, Qualidade, Button } from './styles';

const Answers: React.FC = () => (
  <Container>
    <button>
      <FaArrowLeft />
    </button>
    <Question>Vamos supor que aqui tem uma pergunta?</Question>

    <Answer>
      vamo fingir que aqui tem uma respostavamo fingir que aqui tem uma
      respostavamo fingir que aqui tem uma respostavamo fingir que aqui tem uma
      resposta vamo fingir que aqui tem uma respostavamo fingir que aqui tem uma
      respostavamo fingir que aqui tem uma resposta.
    </Answer>

    <img src=""></img>

    <Qualidade>
      Essa resposta foi útil?
      <br />
      <Button>Sim</Button>
      <Button>Não</Button>
    </Qualidade>
  </Container>
);

export default Answers;
