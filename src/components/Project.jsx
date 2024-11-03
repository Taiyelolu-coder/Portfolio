import styled from "styled-components"

const Project = (props) =>{
    return(
        <Container>
            <Wrapper>

                <Cards>
                    <img src={props.image} alt="" />
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <p>{props.stack}</p>
                </Cards>
            </Wrapper>
        </Container>
    )
}

export default Project


const Container = styled.div``
const Wrapper = styled.div``
const Cards = styled.div``
// const Container = styled.div``