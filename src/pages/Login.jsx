import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgb(255,255,255,0.5),
        rgb(255,255,255,0.5)
    ),
    url("/assets/logo/248834439_127986506265379_640078809210944444_n.jpg") 
    center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;
`;


const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return(
        <Container>
            <Wrapper>
                <Title>SUA CONTA</Title>
                <Form>
                    <Input placehoder="Nome" />
                    <Input placehoder="Sobrenome" />
                    <Button>Login</Button>
                    <Link>Esqueceu sua senha?</Link>
                    <Link>Criar uma conta</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;