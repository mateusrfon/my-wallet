import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Head = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
`;

const Entries = styled.ul`
  width: 100%;
  height: 100%;
  margin-bottom: 13px;
  background-color: #fff;
  border-radius: 5px;
  list-style-type: none;
  padding: 23px 11px 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`;

const Transactions = styled.div`
  width: 100%;
  .empty {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #868686;
    font-size: 20px;
    text-align: center;
  }
  li {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;
  }
  .date {
    color: #c6c6c6;
    margin-right: 5px;
  }
  .description {
    color: #000000;
  }
`;

const Balance = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: 700;
  font-size: 17px;
`;

const Value = styled.span`
  font-weight: 400;
  color: ${(props) => (props.value === "positive" ? "#03AC00" : "#C70000")};
`;

const Buttons = styled.div`
  height: 114px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  a {
    width: 47.5%;
  }
`;

const EntryBtn = styled.button`
  width: 100%;
  height: 114px;
  border-radius: 5px;
  background-color: #a328d6;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 17px;
    text-align: left;
    font-weight: 700;
  }
`;

export {
  Container,
  Head,
  Entries,
  Transactions,
  Balance,
  Value,
  Buttons,
  EntryBtn,
};
