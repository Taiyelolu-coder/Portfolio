import styled from "styled-components"
import Github from "../assets/github.png"
import LinkedIn from "../assets/linkedin-in.png"

const Contact =()=>{
    return(
        <Container>
            <Wrapper> 
                <TextBox>
                    <h1>You've got questions?</h1>
                    <h1>Connect with me on:</h1>
                </TextBox>
            <Foot>
                <Logo>
                    <h1>Taiyelolu-coder</h1>
                </Logo>
            <ContactBox>
                <EmailPhone>
                 <p>+234 8148806160</p>
                 <p>alayandeebudola@gmail.com</p>
                 </EmailPhone>
                 <ImageBox>
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    
                 </ImageBox>
            </ContactBox>
            </Foot>
            </Wrapper>
        </Container>
    )

}

export default Contact


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: auto;
/* border: 1px solid black; */
/* margin-bottom: 50px; */

`
const Wrapper = styled.div`
height: calc(100vh - 70px);
width: 90%;
display: flex;

`

const Foot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* max-height: 80px; */
    /* border-bottom: 1px solid lightslategrey; */
    @media (max-width: 580px){
       flex-wrap: wrap;
       align-items: center;
    }
`

const TextBox = styled.div`

`
const Logo = styled.div`
h1{
@media (max-width: 580px){
    display: flex;
    text-align: center;
    font-size: 20px;
}
}`
const ContactBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 40px;
@media (max-width: 580px){
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
    }
`

const EmailPhone = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 40px;
@media (max-width: 580px){
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
    }

    p{
        color: #830b47;
    }
`
const ImageBox = styled.div`
display: flex;
align-items: center;
gap: 30px;

img{
    width: 35px;
}
`