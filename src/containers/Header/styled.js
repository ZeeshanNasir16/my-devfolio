import styled from 'styled-components';
import { images } from 'constants';
import { motion } from 'framer-motion';

export const AppHeader = styled.div`
  position: relative;
  background-image: url('${images.bgImg}');
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  padding-top: 6.5rem;
  padding-inline: 4rem;
  padding-bottom: 2rem;

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    padding-inline: 2rem;
  }

  & > div {
    gap: 2rem;

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      flex-direction: column;
      padding-inline: 2rem;
    }
  }
`;

export const HeaderInfo = styled(motion.div)`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  h1 {
    font-size: clamp(30px, 7vw, 40px);
  }
  & span {
    color: var(--secondary-color);
  }
  h4 {
    margin-top: 0.2em;
  }
  p {
    margin-top: 0.8rem;
    font-size: var(--fz-md);
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    & > * {
      width: 100%;
      text-align: center;
    }
  }
`;

export const HeaderImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const CircleOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Circle = styled.div`
  position: absolute;
  background: var(--white-color);
  border-radius: 50%;
  z-index: 5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  svg {
    width: 60%;
    height: 60%;
  }

  &.circle1 {
    top: 40%;
    width: 120px;
    height: 120px;
  }
  &.circle2 {
    top: 8%;
    right: 0;
    width: 100px;
    height: 100px;
  }
  &.circle3 {
    top: 75%;
    right: 15%;
    width: 80px;
    height: 80px;
  }
  &.circle4 {
    top: 10%;
    left: 23%;
    width: 50px;
    height: 50px;
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.lg)} {
    &.circle1 {
      width: 85px;
      height: 85px;
    }
    &.circle2 {
      width: 80px;
      height: 80px;
    }
    &.circle3 {
      width: 70px;
      height: 70px;
    }
    &.circle4 {
      width: 40px;
      height: 40px;
    }
  }
  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    &.circle1 {
      width: 70px;
      height: 70px;
      left: 5%;
    }
    &.circle2 {
      width: 60px;
      height: 60px;
      right: 5%;
    }
    &.circle3 {
      width: 40px;
      height: 40px;
    }
    &.circle4 {
      width: 25px;
      height: 25px;
    }
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.sm)} {
    &.circle1 {
      width: 50px;
      height: 50px;
    }
    &.circle2 {
      width: 40px;
      height: 40px;
      top: 15%;
    }
    &.circle3 {
      width: 25px;
      height: 25px;
    }
    &.circle4 {
      width: 15px;
      height: 15px;
    }
  }
`;
