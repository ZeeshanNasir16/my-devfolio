import styled from 'styled-components';
import { images } from 'constants';

export const SocialWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 20px;
  left: auto;
  z-index: 19;
  color: var(--secondary-color);

  & > ul {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    a {
      padding: 5px;
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
    }
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--black-color);
    }
  }
  ${(props) => props.theme.maxWidth(props.theme.breakpoints.lg)} {
    right: 10px;
    left: auto;
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    display: none;
  }
`;
