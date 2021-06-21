import styled from 'styled-components/macro';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(../images/cat_3.png);
  height: 252px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Wrapper = styled.div`
    max-width: 1440px;
  margin: 0 auto;
    width: 1440px;
    padding: 13px 130px;
`
export const Top = styled.div`
  display: flex;
justify-content: flex-start;
  align-items: center;
;

`;
export const Logo = styled.img`

`;

export const Tel = styled.a`
  color: #FFFFFF;
  font-size: 24px;
line-height: 29px;
`;
export const Span = styled.span`
  font-size: 18px;
line-height: 22px;
color: #FFFFFF;
`;
export const Column = styled.div`

`;
export const Find = styled.h2`
  color: #FFFFFF;
  font-size: 38px;
line-height: 46px;

`;