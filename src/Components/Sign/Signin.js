import { Container, Logo, Input, Button } from './Styled.js';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wait, setWait] = useState(false);
    const history = useHistory();

    function signin(e) {
        e.preventDefault();
        setWait(true);
        //código de contato com o servidor e redirecionamento
        setTimeout(() => {
            setWait(false);
            history.push("/");
        }, 2000); //teste apenas
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