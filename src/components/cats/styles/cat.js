import styled from 'styled-components/macro';

export const Item = styled.article`
	width: 380px;
	height: 521px;
`;
export const Wrapper = styled.article`
	grid-column: 3 span;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;

  @media (max-width: 1000px) {

  }
`;
export const AboutWrapper = styled.div`
	display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1000px) {

  }
`;
export const Color = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
`;
export const Age = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
`;
export const Foot = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
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

  @media (max-width: 1000px) {

  }
`;