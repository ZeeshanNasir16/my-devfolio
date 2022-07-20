import React from 'react';
import { Content, ImageWrapper } from './styles';
import { greetings } from 'portfolio';
import { Container } from 'components/common/Container';
import { Section } from 'components/common/Section';
import { Button } from 'components/common/Button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id='About'>
      <Container>
        <div className='sectionHead'>
          <h2>About Me</h2>
        </div>
        <Content>
          <div className='about-image'>
            <ImageWrapper
              whileInView={{
                opacity: [0, 1],
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                },
              }}
              translation={{ duration: 0.5 }}
            >
              <div>
                <img
                  alt=''
                  aria-hidden='true'
                  role='presentation'
                  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
                />
              </div>
              <img
                alt={greetings.name}
                src={`${greetings.profileImg}`}
                decoding='async'
              />
            </ImageWrapper>
          </div>
          <div className='about-text'>
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              {greetings.description.map((el, i) => (
                <p key={`desc${i}`}>{el}</p>
              ))}
            </motion.div>
            <Button
              onClick={() => {
                window.location.href = `#Work`;
              }}
            >
              My Work
            </Button>
          </div>
        </Content>
      </Container>
    </Section>
  );
};

export default About;
