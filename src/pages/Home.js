import { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import UserContext from "../contexts/UserContext.js";
import logout from "../vectors/logout.svg";
import plus from "../vectors/plus.svg";
import minus from "../vectors/minus.svg";
import {
  Container,
  Head,
  Entries,
  Transactions,
  Balance,
  Value,
  Buttons,
  EntryBtn,
} from "../components/styles/HomeStyles";

export default function Home() {
  const [transactions, setTransactions] = useState(false);
  const [balance, setBalance] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const { name, token } = user;
  const history = useHistory();

  if (token === "") history.push("/sign-in");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const request = axios.get("http://localhost:4000/transactions", config);
    request.then((r) => {
      if (r.data.length > 0) {
        setTransactions(r.data);
        const balance = r.data.reduce((acc, item) => {
          return acc + item.value;
        }, 0);
        setBalance(balance);
      }
    });
  }, [token]);

  function signout() {
    setUser({ user: "", token: "" });
  }

  if (transactions)
    document.getElementById("entries").lastElementChild.scrollIntoView();

  return (
    <Container>
      <Head>
        <span>{`Olá, ${name}`}</span>
        <img
          src={logout}
          alt="logout"
          onClick={signout}
          style={{ cursor: "pointer" }}
        />
      </Head>
      <Entries id="entries">
        <Transactions>
          {transactions ? (
            transactions.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <span className="date">
                      {dayjs(item.date).format("DD/MM")}
                    </span>
                    <span className="description">{item.description}</span>
                  </div>
                  <Value value={item.value >= 0 ? "positive" : "negative"}>
                    {(item.value / 100).toFixed(2).replace(".", ",")}
                  </Value>
                </li>
              );
            })
          ) : (
            <div className="empty">Não há registros de entrada ou saída</div>
          )}
        </Transactions>
        {transactions ? (
          <Balance>
            <span>SALDO</span>
            <Value value={balance >= 0 ? "positive" : "negative"}>
              {(balance / 100).toFixed(2).replace(".", ",")}
            </Value>
          </Balance>
        ) : (
          ""
        )}
      </Entries>
      <Buttons>
        <Link to="/new-income">
          <EntryBtn>
            <img src={plus} alt="plus vector" />
            <p>
              Nova
              <br />
              entrada
            </p>
          </EntryBtn>
        </Link>
        <Link to="/new-expense">
          <EntryBtn>
            <img src={minus} alt="minus vector" />
            <p>
              Nova
              <br />
              saída
            </p>
          </EntryBtn>
        </Link>
      </Buttons>
    </Container>
  );
}
