import React from 'react';
import { Background, Wrapper, Top, Logo, Tel, Span, Column, Find } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background { ...restProps }>{ children }</Background> : children;
};

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper { ...restProps }>{ children }</Wrapper>
};

Header.Top = function HeaderTop({ children, ...restProps }) {
	return <Top { ...restProps }>{ children }</Top>
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