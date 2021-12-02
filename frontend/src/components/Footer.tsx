import { EmailOutlined, Instagram, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDierection: "column" })}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}

`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items:center;
`;


export const Footer = () => {
    return (
        <Container>
           <Left>
               <Logo>Elliottii.Co</Logo>
               <Desc>Uma descrição bem loca</Desc>
                <SocialContainer>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
           </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Cozinha</ListItem>
                    <ListItem>Mini-moveis</ListItem>
                    <ListItem>Montessorianos</ListItem>
                    <ListItem>Moveis</ListItem>
                    <ListItem>Para amantes de livros</ListItem>
                    <ListItem>Pets</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>622 RUA</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>35 999999</ContactItem>
                <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>elliottii@gmail.com</ContactItem>
            </Right>
        </Container>
    );
;}

export default Footer;
