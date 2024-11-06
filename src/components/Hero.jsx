import styled from "styled-components"
import Taiwo from "../assets/TAIWO.jpeg"


const Hero = () =>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>Hello,
                        <br />
                       My name is <br /> <span>Taiwo Alayande.</span> 
                    </h1>

                    <h1 id="software">
                        I'm a software developer.
                    </h1>
                </TextBox>
                <ImageBox>
                    <img src={Taiwo} alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default Hero
const Container = styled.div`
margin: auto;
margin-top: 50px;
margin-bottom: 50px;
max-width: 1280px;
/* background-color : #ffeeee; */
box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
border-radius: 10px;

@media (max-width: 580px){
    margin: auto;
}
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 85%;
/* border: 1px solid black; */
margin: auto;
min-height: calc(100vh - 70px);


padding: 50px;
@media (max-width: 580px){
    flex-wrap: wrap-reverse;
    align-items: center;
    gap: 30px;
    justify-content: center;
}
`
const TextBox = styled.div`
text-align: start;
@media (max-width: 580px){
    margin: auto;
    
}
h1{
       font-size: 40px;
       /* margin-left: 300px; */
       color: #830b47;
       @media (max-width: 580px){
        font-size:30px ;
        text-align: center;
       }
    }
span {
    
    font-size: 45px;
    background: linear-gradient(to right, #833754, #1f2a58,#610761, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media (max-width: 580px){
        font-size: 35px;
}
}

#software{
    color: darkgreen;
 
}
`
const ImageBox= styled.div`
/* width: 600px; */
display: flex;
align-items: center;
justify-content: center;
margin: auto;

@media (max-width: 580px){
    margin: auto;
}

/* border: 1px solid black; */
img{
    width: 500px;
    /* height: 400px; */
    border: 2px solid lightgrey;
    /* border-top-left-radius: 60%;
    border-bottom-right-radius: 50%; */
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    /* margin-left: 100px; */
    @media (max-width: 580px){
        width: 300px;
        margin: auto;
    }

}
img:hover{
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateY(-10px);
}
`
// const = styled.div``