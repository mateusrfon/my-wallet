import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';

export default function NewEntry({ type }) {
    const entry = type === 'income' ? 'entrada' : 'saída';
    const factor = type === 'income' ? 1 : -1;
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [wait, setWait] = useState(false);
    const { user } = useContext(UserContext);
    const { token } = user;
    const history = useHistory();
    
    if (token === '') history.push("/sign-in");

    function save() {
        setWait(true);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const body = {
            value: value * factor,
            description
        };
        
        const request = axios.post('http://localhost:4000/transactions', body, config);
        request.then(() => {
            setWait(false);
            history.push("/");
        });
        request.catch(r => {
            console.log(r);
            alert("Algo deu errado.");
            setTimeout(() => {
                setWait(false);
            }, 100);            
        })
    }

    return (
       <EntryBody>
            <Head>Nova {entry}</Head>
            <Input disabled={wait} type="number" placeholder="Valor" value={value > 0 ? parseInt(value)/100 : ''} onChange={e => setValue(Number(e.target.value.replace(',','.')).toFixed(2)*100)}/>
            <Input disabled={wait} placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            <SaveBtn onClick={save}>Salvar {entry}</SaveBtn>
        </EntryBody>
    );
}

const EntryBody = styled.div`
    width: 90%;
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

const SaveBtn = styled.button`
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
`;