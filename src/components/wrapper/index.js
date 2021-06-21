import React from 'react';
import { Wrapper } from './styles/wrapper'

export default function Wrapper({ children, ...restProps }) {
	return (
		<Wrapper { ...restProps }>
			{children}
		</Wrapper>
	)
}