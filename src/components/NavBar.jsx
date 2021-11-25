import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-siz: 14px;
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
`;

const Center = styled.div`
    width: 1;
    text-align: center;
`;

const Logo = styled.div`
    font-weight: bold;
`;

const Right = styled.div`
    width: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: poiter;
    margin-left: 25px;
`;

const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>Busca</Language>
                    <SearchContainer>
                        <Input/>
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