import React from 'react';
import catData from '../fixtures/cats';
import { Cat } from '../components';

export function CatContainer() {
	return (
		<Cat.Wrapper>
			{
				catData.map((item) => (
					<Cat key = { item.id }>
						<Cat.Link href="#"/>
						<Cat.About>
							<Cat.Title>
								{ item.title }
							</Cat.Title>
							<Cat.AboutWrapper>
								<Cat.Color>
									{ item.color }
								</Cat.Color>
								<Cat.Age>
									{ item.age }
								</Cat.Age>
								<Cat.Foot>
									{ item.foot }
								</Cat.Foot>
							</Cat.AboutWrapper>
							<Cat.Sale>
								{ item.sale }
							</Cat.Sale>
						</Cat.About>
						<Cat.Buy>
							Купить
						</Cat.Buy>
					</Cat>
				))
			}
		</Cat.Wrapper>
	)
}