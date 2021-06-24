import styled from "styled-components";
import axios from 'axios';
import UserContext from '../Contexts/UserContext.js';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import logout from '../Vectors/logout.svg';
import dayjs from 'dayjs';
import plus from '../Vectors/plus.svg';
import minus from '../Vectors/minus.svg';
import { Link } from 'react-router-dom';

export default function Home() {
    const [transactions, setTransactions] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const { name, token } = user;
    const history = useHistory();
    
    if (token === '') history.push("/sign-in");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get("http://localhost:4000/transactions", config);
        request.then(r => {
            if (r.data.length > 0 ) {
                setTransactions(r.data);
            }
        });
    }, []);
    
    function signout() {
        setUser({ user: '', token: ''});
    }

    return (
        <Container>
            <Head>
                <span>{`Olá, ${name}`}</span>
                <img src={logout} alt="logout" onClick={signout}/>
            </Head>
            <Entries>
                {transactions 
                    ? transactions.map(item => {
                            return (
                                <li>
                                    <div>
                                        <span class="date">{dayjs(item.date).format('DD/MM')}</span>
                                        <span class="description">{item.description}</span>
                                    </div>
                                    <span class="value">{(item.value/100).toFixed(2).replace('.',',')}</span>
                                </li>
                            )
                        })
                    : <div>Não há registros de<br/>entrada ou saída</div>}
            </Entries>
            <Buttons>
                <Link to="/new-income">
                    <EntryBtn>
                            <img src={plus} alt="plus vector" />
                            <p>Nova<br/>entrada</p>
                    </EntryBtn>
                </Link>
                <Link to="/new-expense">
                    <EntryBtn>
                        <img src={minus} alt="minus vector" />
                        <p>Nova<br/>saída</p>
                    </EntryBtn>
                </Link>
            </Buttons>
        </Container>
    )
}

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
    >div {
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
        color: #C6C6C6;
        margin-right: 5px;
    }
    .description {
        color: #000000;
    }
    .value {
        color: #C70000;
    }
`;

const Buttons = styled.div`
    height: 114px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    a {
        width: 47.50%;
    }
`;

const EntryBtn = styled.button`
    width: 100%;
    height: 114px;
    border-radius: 5px;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    p {
        color: #fff;
        font-size: 17px;
        text-align: left;
        font-weight: 700;
    }
`;