import React from 'react';
import { CatContainer } from './containers/cat';
import { BodyContainer } from './containers/body';
import { SortContainer } from './containers/sort';
import { Container, Footer, Form, Header, Menu } from './components'
import logo from './logo.png';
const ItemsLi = ['Main', 'Gallery', 'News', 'Profile'];
const ItemsSort = ['По возрастанию', 'По убыванию'];

export function App() {
  return (
  	<>
      <Header>
        <Header.Wrapper>
          <Header.Top>
            <Header.Logo src={ logo } alt="Cats" />
            <Menu items={ ItemsLi }></Menu>
            <Header.Tel href="+544349000000">+544349000000</Header.Tel>
          </Header.Top>
          <Header.Find>
            Найдено 349 котов
          </Header.Find>
        </Header.Wrapper>
      </Header>
      <BodyContainer>
        <SortContainer items={ ItemsSort }/>
        <CatContainer/>
      </BodyContainer>
      <Container.Wrapper>
        <Container.Button>
          Показать еще 
        </Container.Button>
      </Container.Wrapper>
      <Container.Wrapper>
        <Footer.Inner>
          <Footer.Column>
            <h2>
              Успей купить!
            </h2>
            <h3>
              Подпишись и успей словить все акции
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
      </Container.Wrapper>
  	</>
  );
}

export default App;
