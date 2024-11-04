import styled from "styled-components"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ContactMe from "../components/ContactMe"
import Project from "../components/Project"
import Remote from "../assets/remote.png"
import Desserts from "../assets/desserts.png"
import Coolors from "../assets/coolors.png"
import Country from "../assets/country.png"




const Home = () =>{
    return(
        <Container>
            <Hero />
            <Skills />
            <ProjectContent>
                <h1>Projects</h1>
                <p><span>Some of my projects so far</span></p>
            <ProjectCards>
            <Project image={Country} title="Country-clone" text="This project was done using HTML, CSS, and JavaScript to render countries of the world. It has dark and light theme, showing the name, continent and region of each country" stack="HTML, CSS, JavaScript." link="https://milestoneproject2-country.vercel.app/" url="https://github.com/Taiyelolu-coder/Milestoneproject2-Country.git"/>
            <Project image={Desserts} title="Dessert Shopping Cart" text="This is a clone of a dessert product page, with a add to cart function, increase and decrease quantity button" stack="HTML, CSS, JavaScript" link="https://milestoneproject2-desserts.vercel.app/" url="https://github.com/Taiyelolu-coder/Milestoneproject2-Desserts.git" />
            <Project image={Coolors} title="Coolors.co" text="This homepage was recreated using a React app." stack="React" link="https://coolors-co.vercel.app/" url="https://github.com/Taiyelolu-coder/Coolors.co.git" />
            <Project image={Remote} title="Make-remote-work" text="this webpage was created using React app." stack="React" link="https://make-remote-work-livid.vercel.app/" url="https://github.com/Taiyelolu-coder/make-remote-work.git" />
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

const ProjectContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 85%;
max-width: 1280px; 
/* border: 1px solid green; */
margin: auto;

box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
height: calc(100vh - 70px);
padding: 0px 30px;
h1{
    font-size: 40px;
    color: #830b47;
}

span{
    font-size: 20px;
    width: 180px;
}
`

const ProjectCards = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
/* border: 1px solid blue; */
margin: auto;

border-radius: 10px;

@media (max-width: 580px){
    flex-wrap: wrap;
}

img{
    width: 250px;

}
`