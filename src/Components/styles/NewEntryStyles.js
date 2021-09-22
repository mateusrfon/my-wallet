import styled from "styled-components";

const EntryBody = styled.div`
  width: 90%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  margin-top: 25px;
  margin-bottom: 40px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;

const Input = styled.input`
  height: 58px;
  margin-bottom: 13px;
  border-radius: 5px;
  padding: 18px 0 17px 15px;
  font-size: 20px;
  color: #000000;
  ::placeholder {
    color: #000000;
  }
`;

const Btn = styled.button`
  height: 46px;
  background-color: #a328d6;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export { EntryBody, Head, Input, Btn };
