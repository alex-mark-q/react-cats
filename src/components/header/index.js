import React from 'react';
import { Background, Container, Logo, Tel, Span, Column, Find } from './styles/header';

export default function Header({ children, ...restProps }) {
	return <Background { ...restProps }>{ children }</Background>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
    <Logo {...restProps} />
  );
};
Header.Tel = function HeaderTel({ ...restProps }) {
  return (
  	<Column>
	    <Tel {...restProps} />
	    <Span>Звони скорее!</Span>
    </Column>
  );
};
Header.Find = function HeaderFind({ children, ...restProps }) {
  return (
    <Find>
    	{ children }
    </ Find>
  );
};