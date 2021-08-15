import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";
import  { EntryBody, Head, Input, SaveBtn } from "../components/styles/NewEntryStyles";

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