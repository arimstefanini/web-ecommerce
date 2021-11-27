import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "collumn" })}
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 60%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterType = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterTypeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;



export const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="/assets/images/livros/101693753_2617084761895391_462793482357384793_n.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Apoio de Leitura</Title>
                    <Desc>Já teve problemas em querer ler uma livro com uma mão e ter dificuldade em segurar as páginas. Pois então seus problemas acabaram com o Apoi de leitura.</Desc>
                    <Price>R$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="block"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="pink"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Desing</FilterTitle>
                            <FilterType>
                                <FilterTypeOption>Circulo</FilterTypeOption>
                                <FilterTypeOption>Coração</FilterTypeOption>
                            </FilterType>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;
