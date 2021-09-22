import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  a {
    font-weight: 700;
    color: #fff;
    font-size: 15px;
  }
`;

const Logo = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #fff;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 90%;
  height: 58px;
  margin-bottom: 13px;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 15px;
  color: #000;
  ::placeholder {
    opacity: 1;
    color: #000;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 46px;
  margin-bottom: 36px;
  border-radius: 5px;
  background-color: #a328d6;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export { Container, Logo, Input, Button };
