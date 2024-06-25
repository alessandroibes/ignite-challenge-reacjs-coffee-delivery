import styled from 'styled-components';

import { mixins } from '../../styles/mixins';

export const Hero = styled.section`
  position: relative;
`;

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;
  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`;

export const CoffeeList = styled.section``;
