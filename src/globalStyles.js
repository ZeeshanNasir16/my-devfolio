import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --font-base: 'Montserrat', sans-serif;
  --font-mono: 'Fira Code', monospace;
  --primary-color: #edf2f8;
  --secondary-color: #7510f7;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --dark-gray-color: #666666;
  --white-color: #ffffff;
  --shadow-lightbg: rgba(0, 0, 0, 0.08);
  --back-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  --narrow-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  --border-radius: 4px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  WebkitOverflowScrolling: 'touch',
}

body {
  font-family: var(--font-base);
  line-height: 1.3;
}

p:not(:last-child) {
  margin-bottom: 1rem;
}

#root {
  overflow: hidden;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
