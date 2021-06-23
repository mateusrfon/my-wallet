import styled from "styled-components";
import axios from 'axios';
import logout from '../Vectors/logout.svg';

export default function Home() {
    return (
        <Container>
            <Head>
                <span>{'Olá, Fulano'}</span>
                <img src={logout} alt="logout" />
            </Head>
            <Entries>
                <div>Não há registros de<br/>entrada ou saída</div> {/*MAP FROM ARRAY*/}
            </Entries>
            <Functions>
                <span>oi</span>
                <span>oi</span>
            </Functions>
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
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #868686;
        font-size: 20px;
        text-align: center;
    }    
`;

const Functions = styled.div`
    height: 114px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;