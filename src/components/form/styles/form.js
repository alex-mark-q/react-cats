import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  @media (max-width: 1000px) {
  }
`;

export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const CheckBox = styled.input`

`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  max-width: 250px;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {

  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
