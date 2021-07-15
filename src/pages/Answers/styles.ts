import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
  color: var(--gray-850);
  padding: 3rem;
`;

export const Question = styled.h3`
  padding: 1rem 0;
  font-size: 1.5rem;
`;

export const Answer = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.8rem;
  letter-spacing: normal;
`;

export const Qualidade = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  line-height: 3rem;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 1.3rem;
  color: var(--gray-850);
  border: 1px solid var(--gray-300);
  border-radius: 20px;
  padding: 0 0.4rem;
  margin: 0 10px;

  &:hover {
    font-weight: bold;
    background: #add8e6;
  }
`;
