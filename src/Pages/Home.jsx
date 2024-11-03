import styled from "styled-components"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ContactMe from "../components/ContactMe"
import Project from "../components/Project"



const Home = () =>{
    return(
        <Container>
            <Hero />
            <Skills />
            <ProjectContent>
                <h1>Projects</h1>
                <p>Some of my projects so far</p>
            <ProjectCards>
            <Project img heading="" text="" stack=""/>
            <Project img heading="" text="" stack=""/>
            <Project img heading="" text="" stack=""/>
            <Project img heading="" text="" stack=""/>
            </ProjectCards>
            </ProjectContent>
            <ContactMe />
        </Container>
    )
}

export default Home
const Container = styled.div`
/* position: absolute; */
`

const ProjectContent = styled.div``

const ProjectCards = styled.div`
/* display: flex;
flex-wrap: wrap;
@media (max-width: 580px){
    display: grid;
    align-items: center;
    justify-content: center;
    margin: auto;
} */
`