import React from "react";
import { Wrapper, Items, Caption, Select, CustomSelect, SelectTop, SelectDropdown, SelectList } from './styles/sort'

export default function Sort({ children, ...restProps }) {
  return (
  	<Wrapper { ...restProps }>
			{ children }
		</Wrapper>
  )
}
Sort.Items = function CatItems({ children, ...restProps }) {
	return <Items { ...restProps }>{ children }</Items>
}
Sort.Select = function CatSelect({ children, ...restProps }) {
	return <Select { ...restProps }>{ children }</Select>
}
Sort.Caption = function CatCaption({ children, ...restProps }) {
	return <Caption { ...restProps }>{ children }</Caption>
}
Sort.CustomSelect = function CatCustomSelect({ children, ...restProps }) {
	return <CustomSelect { ...restProps }>{ children }</CustomSelect>
}
Sort.SelectTop = function CatSelectTop({ children, ...restProps }) {
	return <SelectTop { ...restProps }>{ children }</SelectTop>
}
Sort.SelectDropdown = function CatSelectDropdown({ children, ...restProps }) {
	return <SelectDropdown { ...restProps }>{ children }</SelectDropdown>
}
Sort.SelectList = function CatSelectList({ children, ...restProps }) {
	return <SelectList { ...restProps }>{ children }</SelectList>
}