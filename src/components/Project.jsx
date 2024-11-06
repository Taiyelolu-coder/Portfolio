import styled from "styled-components"


const Project = (props) =>{
    return(
        <Container>
            <Wrapper>

                <Cards>
                    <img src={props.image} alt="" />
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <p>Teck stack: {props.stack}</p>
                    <Links>
                       <a href={props.link}>View Site</a>
                       <a href={props.url}>View Repo</a>
                    </Links>
                </Cards>
            </Wrapper>
        </Container>
    )
}

export default Project


const Container = styled.div`
display: flex;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 450px;

/* border: 1px solid grey; */
margin: auto;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2pxz 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
border-radius: 10px;

@media (max-width: 580px){
 
    
}
h3{
    font-size: 20px;
    color: #493d9b;
}
p{
    font-size: 14px;
    text-align: center;
    font-weight: 600;
}

`
const Cards = styled.div`
display: flex;
align-items: center;
flex-direction: column;
/* justify-content: end; */
text-align: center;

`
const Links = styled.div`
display: flex;
gap: 25px;

a{
    font-size: 16px;
    font-weight: 800;
}
:hover{
    color:  #830b47;
}
`
