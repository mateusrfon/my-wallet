import styled from 'styled-components';

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

export { EntryBody, Head, Input, SaveBtn }