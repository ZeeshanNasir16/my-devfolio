import styled from 'styled-components';

export const Section = styled.div`
  padding-inline: 4rem;
  padding-block: 6rem;

  &:nth-child(odd) {
    background-color: var(--primary-color);
    & .sectionHead {
      justify-content: end;
      &::after {
        display: block;
        margin-left: 10px;
      }
    }
  }
  &:nth-child(even) {
    background-color: transparent;
    & .sectionHead::before {
      display: block;
      margin-right: 10px;
    }
  }
  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    padding-inline: 2rem;
  }

  & .sectionHead {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 40px;
    width: 100%;
    white-space: nowrap;

    &::before,
    ::after {
      content: '';
      display: none;
      width: 80px;
      height: 1px;
      position: relative;
      top: -5;
      background-color: var(--secondary-color);
    }
  }
`;
