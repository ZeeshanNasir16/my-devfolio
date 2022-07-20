import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import React from 'react';
import { Wrapper } from './styled';
import { greetings, contact } from 'portfolio';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Wrapper id='Contact'>
      <Container>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <div className='sectionHead'>
            <h2>Get In Touch</h2>
          </div>
          <div className='footer-desc'>
            <p>
              I'm looking for any new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <Button
              onClick={() => {
                window.location.href = `mailto:${contact.email}`;
              }}
            >
              Let's Talk
            </Button>
          </div>
          <div className='temp-info'>
            <p>Designed & Built by {greetings.name}</p>
          </div>
        </motion.div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
