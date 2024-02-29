import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin-top: 100px;
  padding: 0;
}

body {
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #000;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sr-only {
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

/* 스크롤바 전체의 스타일 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* 스크롤바 트랙의 스타일 */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* 스크롤바 엄지(thumb)의 스타일 */
::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 10px;
}

/* 스크롤바 엄지(thumb)를 호버할 때의 스타일 */
::-webkit-scrollbar-thumb:hover {
  background: #a5a4a4;
}
`;

export default GlobalStyle;
