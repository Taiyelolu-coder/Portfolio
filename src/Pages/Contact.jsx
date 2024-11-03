import styled from "styled-components"
import GithubImage from "../assets/github.png"
import LinkedIn from "../assets/linkedin-in.png"
import Mail from "../assets/mail.png"
import PhoneImg from "../assets/contact.jpg"

const Contact =()=>{
    return(
        <Container>
            <Wrapper> 
                <TextBox>
                    <h1>You've got some questions?</h1>
                   
                    <h1>Connect with me on:</h1>
                </TextBox>
                <Contacts>
                    <Phone>
                        <img src={PhoneImg} alt="" />
                        <p>+234 8148806160</p>
                    </Phone>
                    <Email>
                        <img src={Mail} alt="" />
                        <a href="https://alayandeebudola@gmail.com">Taiwo Alayande</a>
                    </Email>
                    <Github>
                        <img src={GithubImage} alt="" />
                       
                        <a href="https://github.com/Taiyelolu-coder/">Taiyelolu-coder</a>
                    </Github>
                    <Linkedin>
                        <img src={LinkedIn} alt="" />
                        
                        <a href="https://linkedin.com/in/taiwo-alayande08">Taiwo Alayande</a>
                    </Linkedin>
                </Contacts>
            </Wrapper>
        </Container>
    )

}

export default Contact


const Container = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
align-items: center;
margin: auto;
/* border: 1px solid black; */
/* margin-bottom: 50px; */

`
const Wrapper = styled.div`
height: calc(100vh - 70px);
margin-top: 50px;
width: 90%;
display: flex;
align-items: center;
flex-direction:column ;
/* border: 1px solid black; */
/* justify-content: space-between; */
padding: 20px;
gap: 20px;

`
const Contacts = styled.div`
display: flex;
gap: 50px;
justify-content: space-between;
img{
    width: 50px;
}`
const Email = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Github = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Linkedin = styled.div`
display: flex;
align-items: center;
gap: 20px;
`


const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 45px;
    color: #830b47;;
}
`
const Phone = styled.div`
display: flex;
align-items: center;
gap: 20px;
`