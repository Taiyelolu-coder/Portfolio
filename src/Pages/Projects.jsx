import Remote from "../assets/remote.png"
import Desserts from "../assets/desserts.png"
import Coolors from "../assets/coolors.png"
import Country from "../assets/country.png"
import styled from "styled-components"
const Projects = () =>{
    return(
          <Container>
            <Wrapper>

                <Cards>
                    <img src={Country} alt="" />
                    <h3>Country-clone</h3>
                    <p>This project was done using HTML, CSS, and JavaScript to render countries of the world. It has dark and light theme, showing the name, continent and region of each country" stack="HTML, CSS, JavaScript.</p>
                    <p>Teck stack: HTML, CSS, JavaScrip</p>
                    <Links>
                    <a href="https://milestoneproject2-country.vercel.app/">View Site</a>
                    <a href="https://github.com/Taiyelolu-coder/Milestoneproject2-Country.git">View Repo</a>
                    </Links>
                </Cards>
                <Cards>
                    <img src={Desserts} alt="" />
                    <h3>Desserts Shopping Cart</h3>
                    <p>This is a clone of a dessert product page, with a add to cart function, increase and decrease quantity button</p>
                    <p>Teck stack: HTML, CSS, JavaScript</p>
                    <Links>
                    <a href="https://milestoneproject2-desserts.vercel.app/">View Site</a>
                    <a href="https://github.com/Taiyelolu-coder/Milestoneproject2-Desserts.git">View Repo</a>
                    </Links>
                </Cards>
                <Cards>
                    <img src={Coolors} alt="" />
                    <h3>Coolors.co</h3>
                    <p>This homepage was recreated using a React app.</p>
                    <p>Teck stack: React</p>
                    <Links>
                    <a href="https://coolors-co.vercel.app/">View Site</a>
                    <a href="https://github.com/Taiyelolu-coder/Coolors.co.git">View Repo</a>
                    </Links>
                </Cards>
                <Cards>
                    <img src={Remote} alt="" />
                    <h3>Make-remote-work</h3>
                    <p>This homepage was recreated using a React app.</p>
                    <p>Teck stack: React</p>
                    <Links>
                    <a href="https://make-remote-work-livid.vercel.app/">View Site</a>
                    <a href="https://github.com/Taiyelolu-coder/make-remote-work.git">View Repo</a>
                    </Links>
                </Cards>
            </Wrapper>
          </Container>
    )
}

export default Projects

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 85%;
max-width: 1280px;
margin: auto;
gap: 30px;
@media (max-width: 580px){
    flex-wrap: wrap;
}

`
const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
height: 550px;
margin-top: 50px;
/* line-height: 1ch; */
gap:10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
/* border: 1px solid blue; */
padding: 5px;


h3{
    font-size: 20px;
    color: #493d9b;
}

p{
    font-size: 13px;
    text-align: center;
    font-weight: 600;
}
img{
    width: 280px;
}
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