import React from 'react';
import { Container } from '../components'

export function BodyContainer({ children }) {
	return (
		<Container.Wrapper>
			{ children }	
		</Container.Wrapper>
	)
}