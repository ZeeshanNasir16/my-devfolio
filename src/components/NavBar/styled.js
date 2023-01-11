import styled from 'styled-components';
import { images } from 'constants';

export const Nav = styled.div`
  width: 100%;
  padding-block: 1em;
  padding-inline: 4em;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: var(--narrow-shadow);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: fixed;
  z-index: 20;

  & .navitems-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    padding-inline: 2em;
  }
`;

export const NavbarLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  li {
    margin: 0 1rem;
    cursor: pointer;
    flex-direction: column;

    div {
      width: 5px;
      height: 5px;
      margin: 5px auto;
      background: transparent;
      border-radius: 50%;
      margin-bottom: 5px;
    }

    a {
      color: var(--gray-color);
      text-decoration: none;
      flex-direction: column;
      text-transform: uppercase;
      font-size: var(--fz-md);
      font-weight: 500;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--secondary-color);
      }
    }

    &:hover {
      div {
        background-color: var(--secondary-color);
      }
    }
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  cursor: pointer;

  svg {
    width: 70%auto;
    height: 70%auto;
    color: var(--white-color);
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    padding: 1rem;
    width: 60%;
    height: 100vh;
    display: none;
    justify-content: end;
    align-items: end;
    flex-direction: column;
    background-image: url('${images.circlesBg}');
    background-color: var(--white-color);
    background-size: cover;
    background-repeat: repeat;

    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

    svg {
      width: 35px;
      height: 35px;
      color: var(--secondary-color);
      margin: 0.5rem 1rem;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      li {
        margin: 1rem;
        a {
          color: var(--gray-color);
          text-decoration: none;
          font-weight: 500;
          text-transform: uppercase;
          font-size: var(--fz-md);
          transition: all 0.4s ease-in-out;

          &:hover {
            color: var(--secondary-color);
          }
          &::after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            background: var(--black-color);
            transition: width 0.5s;
          }
          &:hover::after,
          &.active:after {
            width: 100%;
          }
        }
      }
    }

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      display: flex;
    }
    ${(props) => props.theme.maxWidth('500px')} {
      width: 100%;
    }
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    display: flex;
  }
  /* @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  } */
`;
