import React from 'react';
import { Wrapper, Button, Inner } from './styles/body'

export default function Container({ children, ...restProps }) {
	return { children }
}
Container.Wrapper = function ContainerWrapper({ children, ...restProps }) {
	return <Wrapper { ...restProps }>{ children }</Wrapper>
}
Container.Inner = function ContainerInner({ children, ...restProps }) {
	return <Inner { ...restProps }>{ children }</Inner>
}
Container.Button = function ContainerButton({ children, ...restProps }) {
	return <Button { ...restProps }>{ children }</Button>
}
