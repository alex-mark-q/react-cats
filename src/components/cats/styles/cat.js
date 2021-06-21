import styled from 'styled-components/macro';

export const Item = styled.article`
	width: 380px;
	    background-color: #F3F3F3;
`;
export const Wrapper = styled.article`
	grid-column: 3 span;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
`;
export const Image = styled.article`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Link = styled.a`
	position: relative;
  overflow: hidden;
  display: block;

  @media (max-width: 1000px) {

  }
`;
export const About = styled.div`
    height: 190px;
    display: flex;
    padding: 30px;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1000px) {

  }
`;
export const AboutWrapper = styled.div`
justify-content: flex-start;
    height: 75px;
	display: flex;
  align-items: center;
padding: 20px 0;
    justify-content: center;
  @media (max-width: 1000px) {

  }
`;
export const Color = styled.div`
border-left-width: 4px;
    height: 25px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	width: 150px;
border-left-color: #6EBBD3;
    border-left-style: solid;
    padding-left: 20px;
`;
export const Age = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	    width: 50px;
`;
export const Foot = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	    width: 50px;
`;
export const Title = styled.span`
	display: inline-flex;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 29px;

  @media (max-width: 1000px) {

  }
`;

export const Sale = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 29px;
`;
export const Buy = styled.div`
	border: none;
	padding: 14px 0;
	border-radius: 4px;
	width: 100%;
	color: #fff;
	background-color: #6EBBD3;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
	height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;

  @media (max-width: 1000px) {

  }
`;

export const H3 = styled.span`
	font-family: Montserrat-Bold, Arial, serif;
`