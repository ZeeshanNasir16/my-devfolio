import { Container } from 'components/common/Container';
import { Section } from 'components/common/Section';
import {
  ProjectList,
  ListItem,
  ProjectContent,
  ProjectImage,
  PersProjects,
} from './styles';
import React from 'react';
import { projects } from 'portfolio';
import { Icon } from '@iconify/react';
import { images } from 'constants';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <>
      <Section id='Work'>
        <Container>
          <div className='sectionHead'>
            <h2>Project's I've Worked On</h2>
          </div>
          <ProjectList>
            {projects.collaboration.map((proj, i) => (
              <ListItem key={proj.logo}>
                <ProjectImage
                  className='image'
                  color={proj.extras.color}
                  whileInView={{ x: [i % 2 === 0 ? 100 : -100, 0] }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <div className='image-back'>
                    <div className='logo'>
                      <img
                        src={proj?.logo || images.lotpot}
                        alt={proj.name}
                        min-width='250px'
                        min-height='200px'
                      />
                    </div>
                    <div className='mockup'>
                      <img src={proj.extras.screenshot} alt={proj.name} />
                    </div>
                  </div>
                </ProjectImage>
                <ProjectContent
                  className='content'
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.55, ease: 'easeOut' }}
                >
                  <div>
                    <p className='overline'>{proj.projectType}</p>
                    <h3 className='title'>{proj.name}</h3>
                    <p className='description'>{proj.desc}</p>
                    <ul key={`${proj.logo}-${i}`} className='tech-list'>
                      {proj.techList.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </ProjectContent>
              </ListItem>
            ))}
          </ProjectList>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='sectionHead'>
            <h2>Personal Projects</h2>
          </div>
          <PersProjects>
            {projects.personal.map((proj, i) => (
              <motion.li
                key={proj.repoLink}
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                <header>
                  <div className='proj-top'>
                    <div className='folder'>
                      <Icon icon='arcticons:folder' data-inline='false' />
                    </div>
                    <div className='proj-links'>
                      <a
                        href={proj.repoLink}
                        aria-label='GitHub Link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Icon icon='eva:github-outline' data-inline='false' />
                      </a>
                    </div>
                  </div>
                  <div className='proj-title'>{proj.name}</div>
                  <div className='proj-desc'>{proj.desc}</div>
                </header>
                <footer>
                  <ul className='proj-tech-list'>
                    {proj.techList.map((el) => (
                      <li key={`tech-${el}`}>{el}</li>
                    ))}
                  </ul>
                </footer>
              </motion.li>
            ))}
          </PersProjects>
        </Container>
      </Section>
    </>
  );
};

export default Work;
