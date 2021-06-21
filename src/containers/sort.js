import React from 'react';
import { Sort } from '../components';

export function SortContainer({ items }) {
	return (
		<Sort.Items>
			<Sort.Select>
				<Sort.Caption>
					Сортировать по:
				</Sort.Caption>
				<Sort.CustomSelect>
					<Sort.SelectTop>
						Цене
					</Sort.SelectTop>
					<Sort.SelectDropdown>
						<Sort.SelectList>
							{items && items.map((name, index) => (
			          <li key={`${name}_${index}`} >
			            { name }
			          </li>
			        ))}
						</Sort.SelectList>
					</Sort.SelectDropdown>
				</Sort.CustomSelect>
				<Sort.CustomSelect>
					<Sort.SelectTop>
						Возрасту
					</Sort.SelectTop>
					<Sort.SelectDropdown>
						<Sort.SelectList>
							{items && items.map((name, index) => (
			          <li key={`${name}_${index}`} >
			            { name }
			          </li>
			        ))}
						</Sort.SelectList>
					</Sort.SelectDropdown>
				</Sort.CustomSelect>
			</Sort.Select>
		</Sort.Items>
	)
}