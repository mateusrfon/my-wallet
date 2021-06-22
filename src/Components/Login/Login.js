import { Container, Logo, Input, Button } from './Styled.js';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wait, setWait] = useState(false);

    function login(e) {
        e.preventDefault();
        setWait(true);
        //código de contato com o servidor e redirecionamento
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <form onSubmit={e => login(e)}>
                <Input disabled={wait} required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                <Input disabled={wait} required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password}/>
                <Button disabled={wait}>
                    Entrar
                </Button>
            </form>
            <Link to="/signin">Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}