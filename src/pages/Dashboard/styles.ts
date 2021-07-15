import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  background-color: var(--blue);
  padding: 1.5rem;
  border-radius: 0 0 5px 5px;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 1.8rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  padding: 0.8rem;
  margin: 0.5rem;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray-900);
  font-size: 0.9rem;
`;

export const Button = styled.button`
  color: var(--white);
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  padding: 0 0.8rem;
`;

export const CategoriesButton = styled.button`
  text-align: center;
  margin-top: 0.8rem;

  border: 1px solid var(--gray-300);
  border-radius: 50px;
  padding: 0.2rem 1rem;
  color: var(--gray-850);

  transition: 0.3s;

  & + button {
    margin-left: 1.4rem;
  }

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    font-weight: 700;
  }
`;

export const QuestionsContainer = styled.div`
  margin-top: 1rem;
  background-color: var(--background);
  border-radius: 5px;
`;

export const Question = styled.a`
  text-decoration: none;
  color: var(--gray-850);
  padding: 1rem;
  font-size: 1.1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 2rem;
  border-radius: 5px;
  box-shadow: 10px 3px 10px var(--gray-50);

  & + a {
    border-top: 1px solid var(--gray-100);
  }

  transition: 0.3s;

  &:hover {
    background-color: ${shade(0.05, '#F0F8FF')};
    font-size: 1.12rem;
  }
`;
