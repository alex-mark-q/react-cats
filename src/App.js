import React from 'react';
import { CatContainer } from './containers/cat';
import { BodyContainer } from './containers/body';
import { Container, Footer, Form, Header, Menu } from './components'
import logo from './logo.png';
const ItemsLi = ['Main', 'Gallery', 'News', 'Profile'];

export function App() {
  return (
  	<>
      <Header>
        <Header.Frame>
          <Header.Logo src={ logo } alt="Cats" />
          <Menu items={ ItemsLi }></Menu>
          <Header.Tel href="+544349000000">+544349000000</Header.Tel>
        </Header.Frame>
        <Header.Find>
          Найдено 349 котов dsds
        </Header.Find>
      </Header>
      <BodyContainer>
        <CatContainer/>
      </BodyContainer>
      <Container.Inner>
        <Container.Button>
          Показать еще 
        </Container.Button>
      </Container.Inner>
      <Footer.Inner>
        <Footer.Column>
          <h2>
            Успей купить!
          </h2>
          <h3>
            Успей купить!
          </h3>
        </Footer.Column>
        <Footer.Column>
          <Form>
            <Form.Input placeholder="Email"/>
            <Form.Button>Подписаться</Form.Button>
            <Form.CheckBox type="checkbox"></Form.CheckBox>
          </Form>
        </Footer.Column>
      </Footer.Inner>
  	</>
  	
    // <div className="main">
    //   <section class = "top"></section>
    //   <section class = "fluid">
    //   	<div class = "container fluid__container">
    //   		<div class = "sort"></div>
    //   		<div class = "cats">
    //   			<ul class = "cats__grid">
    //   				<li class = "cats__grid-item">
    //   					<article class = "cat"></article>
      					
    //   				</li>
    //   			</ul>
    //   			<button type = "magic" id="loadMore">Показать еще</button>
    //   		</div>
    //   	</div>
    //   </section>
    // </div>
  );
}

export default App;
