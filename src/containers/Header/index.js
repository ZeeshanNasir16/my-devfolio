import React from 'react';
import {
  AppHeader,
  HeaderInfo,
  HeaderImage,
  Circle,
  ImageContainer,
  CircleOverlay,
} from './styled';
import { Container } from 'components/common/Container';
import { greetings } from 'portfolio';
import { images } from 'constants';
import { Icon } from '@iconify/react';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const { name, title, role, info } = greetings;
  return (
    <AppHeader id='Home'>
      <Container className='app__flex'>
        {/* whileinVIew is to translate it from -100px to 0 along x axis */}
        <HeaderInfo
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          translation={{ duration: 0.5 }}
        >
          <h1>
            {title}
            <br />
            <span>{name}</span>
          </h1>
          <h4>{role}</h4>
          <p>{info}</p>
        </HeaderInfo>

        <ImageContainer
          whileInView={{ opacity: [0, 1] }}
          translation={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <HeaderImage
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.banner}
            alt='profile-circle'
          />
          <CircleOverlay
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            {[
              'logos:react',
              'simple-icons:mui',
              'logos:redux',
              'logos:firebase',
            ].map((el, i) => (
              <Circle
                className={`app__flex circle${i + 1}`}
                key={`circle-${i}`}
              >
                {' '}
                <Icon
                  icon={el}
                  data-inline='false'
                  color={i === 1 ? '#007fff' : 'default'}
                />
              </Circle>
            ))}
          </CircleOverlay>
        </ImageContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
