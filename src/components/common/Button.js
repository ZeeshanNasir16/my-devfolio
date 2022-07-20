import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 190px;
  height: 45px;
  line-height: 40px;
  text-align: center;
  border-radius: 50px;
  border: 3px solid var(--secondary-color);
  color: var(--secondary-color);
  font-size: var(--fz-md);
  position: relative;
  overflow: hidden;
  background: transparent;
  text-transform: uppercase;
  transition: all 0.35s;
  transition-delay: 0.3s;
  margin-bottom: 0;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    background: var(--secondary-color);
    z-index: -1;
    transition: all 0.35s;
  }

  &:before {
    opacity: 0.5;
  }

  &:after {
    transition-delay: 0.2s;
  }

  &:hover {
    color: #fff;
    background: var(--secondary-color);
  }

  &:hover:before,
  &:hover:after {
    top: 0;
  }
`;
