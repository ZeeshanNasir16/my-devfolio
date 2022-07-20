import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-inline: 4rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    padding-inline: 2rem;
  }

  .footer-desc {
    color: var(--gray-color);
    font-size: var(--fz-md);
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    line-height: 1.4;
  }

  & .sectionHead {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 0 40px;
    width: 100%;
    white-space: nowrap;
    &::before,
    ::after {
      content: '';
      display: block;
      margin-inline: 10px;
      width: 80px;
      height: 1px;
      position: relative;
      top: -5;
      background-color: var(--secondary-color);
    }
  }

  .temp-info {
    padding: 3rem 2rem 2rem;
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
