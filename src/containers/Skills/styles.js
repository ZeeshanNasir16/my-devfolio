import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  // align-items: center;
  display:flex;
  gap:2.5rem 0;
  flex-direction:column
}

${(props) => props.theme.minWidth(props.theme.breakpoints.md)} {
     display: grid;
     grid-template-columns: repeat(12, 1fr);
     gap: 10px;
    
   }
`;

export const SkillList = styled(motion.div)`
  display: flex;
  grid-column: 1 / 6;
  /*grid-area: 1 / 6 / -1 / -1;*/
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: flex-end; */
  // align-items: baseline;
  align-content: center;
  gap: 1.5rem;
  flex: 1;

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    gap: 1.25rem;
  }
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease-in-out;

  & span {
    font-size: var(--fz-sm);
  }

  & > div {
    width: 70px;
    height: 70px;
    box-shadow: var(--narrow-shadow);
    border-radius: 50%;
    background-color: var(--white-color);

    & svg {
      width: 50%;
      height: 50%;
    }

    &:hover {
      box-shadow: var(--back-shadow);
    }

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.sm)} {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ExperienceSect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 2;
  grid-column: 7 / -1;
  /* grid-area: 1 / 6 / -1 / -1; */
`;

export const ExpItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  flex-wrap: nowrap;

  & .role {
    color: var(--secondary-color);
  }
  & span {
    font-size: var(--fz-sm);
  }

  & ul {
    margin-top: 1rem;
    font-size: var(--fz-sm);
    margin-left: 1rem;

    & li:not(:last-child) {
      margin-bottom: 0.4rem;
    }
  }
`;
