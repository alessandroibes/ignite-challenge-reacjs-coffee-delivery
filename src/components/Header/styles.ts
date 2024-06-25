import styled from 'styled-components';

import { mixins } from '../../styles/mixins';

export const Container = styled.header`
  max-width: 1160px;
  padding: 2rem 1.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.625rem 0.5rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['purple-light']};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  a {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`;
