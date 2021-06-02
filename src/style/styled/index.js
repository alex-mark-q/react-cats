import { createGlobalStyle } from 'styled-components';

import Font from '../fonts/Montserrat-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat-Regular'),
    url(${Font}) format('ttf');
  }
`;