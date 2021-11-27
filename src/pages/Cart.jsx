import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { mobile } from '../responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"};
    background-color: ${props=> props.type === "filled" ? "black" :  "transparent"};
    color: ${props=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`;

const Botton = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "collumn" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "collumn" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
`;

const ProductId = styled.span`
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px sild lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.div`
`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;



export const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Seu Carrinho</Title>
                <Top>
                    <TopBotton>Continue Comprando</TopBotton>
                    <TopTexts>
                        <TopText>Carrinho (2)</TopText>
                        <TopText>Favoritos (0)</TopText>
                    </TopTexts>
                    <TopBotton type="filled">Finalizar Compras</TopBotton>
                </Top>
                <Botton>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="/assets/images/pet/156292834_117759463581484_2339716990922724670_n.jpg"/>
                                <Details>
                                    <ProductName>
                                        <b> Product:</b> Casinha Pet
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b> 123456789
                                    </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>
                                        <b>Size: </b> 1
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> R$ 200 </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="/assets/images/pet/156292834_117759463581484_2339716990922724670_n.jpg"/>
                                <Details>
                                    <ProductName>
                                        <b> Product:</b> Casinha Pet
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b> 123456789
                                    </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>
                                        <b>Size: </b> 1
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> R$ 200 </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DA COMPRA</SummaryTitle> 
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>    
                            <SummaryItemText>R$ 200</SummaryItemText>    
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Frete</SummaryItemText>    
                            <SummaryItemText>R$ 10</SummaryItemText>    
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Disconto Frete</SummaryItemText>    
                            <SummaryItemText>R$ -10</SummaryItemText>    
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemPrice>Total</SummaryItemPrice>    
                            <SummaryItemText>R$ 200</SummaryItemText>    
                        </SummaryItem>
                        <SummaryButton>Finalizar Compra</SummaryButton>
                    </Summary>
                </Botton>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;