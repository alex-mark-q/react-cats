import React from 'react';
import { Link, Wrapper, Title, About, Sale, Buy, Color, Age, Foot, Image, AboutWrapper, Item, H3 } from './styles/cat'

export default function Cat({ children, ...restProps }) {
	return (
		<Item { ...restProps }>
			{children}
		</Item>
	)
}
Cat.Wrapper = function CatWrapper({ children, ...restProps }) {
	return <Wrapper { ...restProps }>{ children }</Wrapper>
}
Cat.Link = function CatLink({ children, ...restProps }) {
	return (
		<Link { ...restProps }>
			<Image>
				<img src="./images/cat_0.png" alt="Open" />
			</Image>
		</Link>
	)
}
Cat.Title = function CatTitle({ children, ...restProps }) {
	return (
		<Title { ...restProps }>
			<H3>
				{children}
			</H3>
		</Title>
	)
}
Cat.About = function CatAbout({ children, ...restProps }) {
	return (
		<About { ...restProps }>
			{ children }
		</About>
	)
}
Cat.AboutWrapper = function CatAboutWrapper({ children, ...restProps }) {
	return <AboutWrapper {...restProps}>{ children }</AboutWrapper>
}
Cat.Color = function CatColor({ children, ...restProps }) {
	return <Color { ...restProps }>{ children }</Color>
}
Cat.Age = function CatCAge({ children, ...restProps }) {
	return <Age { ...restProps }>{ children }</Age>
}
Cat.Foot = function CatFoot({ children, ...restProps }) {
	return <Foot { ...restProps }>{ children }</Foot>
}
Cat.Sale = function CatSale({ children, ...restProps }) {
	return <Sale { ...restProps }>{ children }</Sale>
}
Cat.Buy = function CatBuy({ children, ...restProps }) {
	return <Buy { ...restProps }>{ children }</Buy>
}		