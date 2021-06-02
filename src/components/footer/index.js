import React from 'react';
import { Inner, Column } from './styles/footer'

export default function Footer({ children, ...restProps }) {
	return { children }
}
Footer.Inner = function FooterInner({ children, ...restProps }) {
	return (
		<Inner>{ children }</Inner>
	)
}
Footer.Column = function FooterColumn({ children, ...restProps }) {
	return (
		<Column>{ children }</Column>
	)
}