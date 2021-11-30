import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
    width: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    ${mobile( {display: "none" })}

`;

const SearchContainer = styled.div`
    border: 0.5px solid;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile( {width: "50px" })}

`;

const Center = styled.div`
    width: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile( {fontSize: "24px"} )}

`;

const Right = styled.div`
    width: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile( {flex: 2, justfyContent: "center"} )}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: poiter;
    margin-left: 25px;
    ${mobile( {fontSize: "12px", marginLeft: "10px"} )}

`;

const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>Busca</Language>
                    <SearchContainer>
                        <Input placeholder="Busca"/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Elliotti.Co</Logo>
                </Center>
                <Right>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>SING IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;