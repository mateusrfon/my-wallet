import { Container, Logo, Input, Button } from './Styled.js';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [wait, setWait] = useState(false);
    const history = useHistory();

    function signup(e) {
        e.preventDefault();
        setWait(true);
        if (password !== passwordConfirm) {
            return setTimeout(() => {
                alert('A senha e a confirmação devem ser iguais.');
                setWait(false); 
            }, 100);
        }
        //código de contato com o servidor e redirecionamento
        setTimeout(() => {
            setWait(false);
            history.push("/sign-in");
        }, 2000); //teste apenas
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <form onSubmit={e => signup(e)}>
                <Input disabled={wait} required type="text" placeholder="Nome" onChange={e => setName(e.target.value)} value={name}/>
                <Input disabled={wait} required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                <Input disabled={wait} required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password}/>
                <Input disabled={wait} required type="password" placeholder="Confirme a senha" onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm}/>
                <Button disabled={wait}>
                    Cadastrar
                </Button>
            </form>
            <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </Container>
    )
}