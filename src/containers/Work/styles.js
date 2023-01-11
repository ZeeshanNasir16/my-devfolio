import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
  &:nth-of-type(2n) {
    .image-back .logo {
      margin-inline: auto 0;
    }
  }

  ${(props) => props.theme.minWidth(props.theme.breakpoints.md)} {
    &:nth-of-type(2n + 1) {
      .image {
        grid-column: 1 / 8;
      }
      .tech-list {
        -webkit-box-pack: end;
        justify-content: flex-end;
        & li {
          margin: 0px 0px 5px 20px;
        }
      }
      .content {
        grid-column: 7 / -1;
        text-align: right;
      }
    }
  }
`;

export const ProjectImage = styled(motion.div)`
  box-shadow: 0 10px 30px -15px var(--lightGray-color);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  height: 300px;

  & .image-back {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.color};
    padding: 2rem 1rem;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    gap: 1rem;

    .logo {
      width: fit-content;
      ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
        margin: 0 auto;
        margin-right: 0;
      }
      img {
        width: 100%;
        max-width: 250px;
        object-fit: contain;
      }
    }

    .mockup {
      width: fit-content;
      max-height: 160px;
      margin: 0 auto;
      img {
        width: 100%;
        max-width: 250px;
        object-fit: contain;
        vertical-align: middle;
        ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
          filter: grayscale(100%) contrast(1) brightness(50%);
        }
      }
    }
  }

  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.85;

    & .image-back {
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }
`;
export const ProjectContent = styled(motion.div)`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  z-index: 2;
  color: var(--white-color);
  ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;

    & .overline {
      color: inherit;
    }
  }

  & .overline {
    margin: 10px 0px;
    color: var(--secondary-color);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
    text-transform: uppercase;
  }
  & .title {
    color: var(--black-color);
    font-size: clamp(24px, 5vw, 28px);
    text-transform: uppercase;
    margin: 0px 0px 20px;

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      margin: 0px 0px 10px;
      color: inherit;
    }
  }
  & .description {
    position: relative;
    z-index: 2;
    padding-block: 25px;

    ${(props) => props.theme.minWidth(props.theme.breakpoints.md)} {
      padding: 25px;
      box-shadow: 0 10px 30px -15px var(--shadow-lightbg);
      border-radius: var(--border-radius);
      background-color: var(--secondary-color);
      color: var(--white-color);
    }
    font-size: var(--fz-md);
  }

  & .tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    color: var(--black-color);

    ${(props) => props.theme.maxWidth(props.theme.breakpoints.md)} {
      justify-content: center;
      color: inherit;
    }

    li {
      margin: 0px 20px 5px 0px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }
`;
export const PersProjects = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  position: relative;

  & > li {
    box-shadow: var(--narrow-shadow);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--white-color);
    flex-direction: column;

    header {
      .proj-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 35px;

        .folder {
          color: var(--secondary-color);
          svg {
            width: 40px;
            height: 40px;
          }
        }
        .proj-links {
          display: flex;
          align-items: center;
          margin-right: -10px;
          color: var(--light-slate);

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 7px;

            svg {
              color: var(--secondary-color);
              width: 25px;
              height: 25px;
            }
          }
        }
      }
      .proj-title {
        margin: 0px 0px 10px;
        font-size: var(--fz-xl);
        font-weight: 600;
      }
      .proj-desc {
        line-height: 1.5;
        font-size: var(--fz-sm);
      }
    }

    footer {
      .proj-tech-list {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        gap: 4px;
        flex-wrap: wrap;
        padding: 0px;
        margin: 20px 0px 0px;
        list-style: none;
        li {
          font-family: var(--font-base);
          font-size: var(--fz-xs);
          font-weight: 600;
          line-height: 1.5;
          position: relative;
        }
        li:not(:last-of-type) {
          margin-right: 15px;
          &:after {
            content: '';
            position: absolute;
            right: -11px;
            width: 2px;
            height: 90%;
            background-color: var(--dark-gray-color);
          }
        }
      }
    }
  }
`;
