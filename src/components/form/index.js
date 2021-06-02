import React from 'react';
import { Container, Input, Button, Text, Break, CheckBox } from './styles/form'

export default function Form({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}
Form.Input = function FormInput({ ...restProps }) {
	return <Input { ...restProps } />;
};
Form.Button = function FormButton({ children, ...restProps }) {
	return (
		<Button { ...restProps }>
			{ children } <img src="/images/icons/chevron-right.png" alt="placeholder+image" />
		</Button>
	)
};
Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.Break = function FormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
Form.CheckBox = function FormCheckBox({ ...restProps }) {
  return <CheckBox {...restProps} />;
};