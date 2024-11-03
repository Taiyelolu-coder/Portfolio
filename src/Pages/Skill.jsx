import styled from "styled-components"
import Image1 from "../assets/html.png"
import Image2 from "../assets/css.png"
import Image3 from "../assets/javascript.png"
import Image4 from "../assets/typescript.png"
import Image5 from "../assets/react.png"
import Image6 from "../assets/vscode.png"
import Image7 from "../assets/github.png"


const Skill = () =>{
    return(
        <Container>
            <Wrapper>
                <h1>Here are the technologies I use:</h1>
                <Images>          
                <img src={Image1} alt="" />        
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
                <img src={Image7} alt="" />
                </Images>

            </Wrapper>
        </Container>
    )
}

export default Skill

const Container = styled.div`
/* border: 1px solid red; */
margin: auto;

max-width: 1280px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
border-radius: 5px;
height: calc(100vh - 150px);
margin-top: 50px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

  
    width: 75%;
    margin: auto;

    @media (max-width: 580px){
        
    }

    h1{
       font-size: 50px;
       /* margin-left: 300px; */
       color: #830b47;
       @media (max-width: 580px){
        font-size: 35px;
        margin: auto;
    }
    }
`


const Images = styled.div`
/* border: 1px solid green; */
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center ;
justify-content: space-between;
padding: 50px;
gap: 50px;
margin: auto;


@media (max-width: 580px){
    display: flex;
        flex-wrap: wrap;
        gap: 25px;
        margin: auto;
    }
img{
    width: 100px;
    /* margin-left: 100px; */
    img:hover{
        

}
    @media (max-width: 580px){
        margin:auto ;
    }
}
`