import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "rigth" && "10px"};
    margin: auto;
    cursor: poiter;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-200vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: poiter;
`;


const Slider = () => {
    //const [slideIndex, setSlideIndex] = useState(0);
    //const handleClick = (direction) => {}
    
    return (
        <Container>
             <Arrow direction="left" /*onClick={()=>handleClick("left")}*/>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://s1.1zoom.me/b5638/247/Penguins_5_King_penguin_Stroll_554182_1920x1080.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>NOME DO OBJETO</Title>
                        <Description>DESCRICAO DO OBJETO DESCRICAO DO OBJETO DESCRICAO DO OBJETO </Description>
                        
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://s1.1zoom.me/b5638/247/Penguins_5_King_penguin_Stroll_554182_1920x1080.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>NOME DO OBJETO</Title>
                        <Description>DESCRICAO DO OBJETO DESCRICAO DO OBJETO DESCRICAO DO OBJETO </Description>
                        
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://s1.1zoom.me/b5638/247/Penguins_5_King_penguin_Stroll_554182_1920x1080.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>NOME DO OBJETO</Title>
                        <Description>DESCRICAO DO OBJETO DESCRICAO DO OBJETO DESCRICAO DO OBJETO </Description>
                        
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="rigth" /*onClick={()=>handleClick("rigth")}*/>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;
