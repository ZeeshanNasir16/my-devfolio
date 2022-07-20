import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, About, Skills, Work } from 'containers';
import { NavBar, Footer, SocialIcons } from 'components';
import { breakpoints } from 'constants';
import GlobalStyle from 'globalStyles';

const theme = {
  breakpoints,
  maxWidth: (bp) => `@media screen and (max-width: ${bp})`,
  minWidth: (bp) => `@media screen and (min-width: ${bp})`,
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <SocialIcons />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
