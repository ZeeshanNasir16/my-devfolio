import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 70px;
  padding: 2rem;

  & .about-image {
    max-width: 250px;
    margin: 0 auto;
    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      width: 65%;
      margin: 0 auto 4rem;
    }
  }

  & .about-text {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;

    & > p {
      color: var(--secondary-color);
      font-weight: 500;
    }

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      align-items: center;
    }
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    padding-inline: 2em;
    display: block;
    text-align: justify;
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: inline-block;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  margin: 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
    box-sizing: border-box;
    border: 3px solid var(--secondary-color);
    top: 20px;
    left: -20px;
    z-index: -1;
  }

  & > div {
    box-sizing: border-box;
    display: block;
    max-width: 100%;

    & > img {
      max-width: 100%;
      display: block;
      margin: 0;
      border: none;
      padding: 0;
    }
  }

  & > img {
    position: absolute;
    inset: 0;
    padding: 0;
    width: 0;
    height: 0;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;
