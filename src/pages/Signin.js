import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../contexts/UserContext.js';
import { Container, Logo, Input, Button } from '../components/styles/SignStyles.js';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wait, setWait] = useState(false);
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    function signin(e) {
        e.preventDefault();
        setWait(true);
        const body = {
            email,
            password
        }
        const request = axios.post('http://localhost:4000/sign-in', body);
        request.then(r => {
            setWait(false);
            setUser(r.data);
            history.push("/");
        });
        request.catch(r => {
            setWait(false);
            alert('Algo deu errado.');
        });
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <form onSubmit={e => signin(e)}>
                <Input disabled={wait} required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                <Input disabled={wait} required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password}/>
                <Button disabled={wait}>
                    Entrar
                </Button>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}