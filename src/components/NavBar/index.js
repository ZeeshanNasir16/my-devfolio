import React, { useState } from 'react';
import { Nav, NavbarLinks, MobileMenu } from './styled';
import { Container } from 'components/common/Container';
import { Logo } from 'components';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((st) => !st);
  };

  return (
    <Nav>
      <Container className='navitems-wrapper'>
        <Logo>ZN</Logo>
        <NavbarLinks>
          {navItems.map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </NavbarLinks>
        <MobileMenu>
          <HiMenuAlt3 onClick={handleToggle} />
          {toggleMenu && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <IoClose onClick={handleToggle} />
              <ul>
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={handleToggle}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </MobileMenu>
      </Container>
    </Nav>
  );
};

export default NavBar;
