import styled from "styled-components"
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () =>{
    return(
          <Container>
            <LogoNav>
                <h1>Taiyelolu-coder</h1>
            </LogoNav>
            <Navigations>
                <Link to="/">
                    <nav>
                        <span>Home</span>
                    </nav>
                </Link>
                <Link to="/about">
                    <nav>
                        <span>About Me</span>
                    </nav>
                </Link>
                <Link to="/skill">
                    <nav>
                        <span>Skills</span>
                    </nav>
                </Link>
                <Link to="/project">
                    <nav>
                        <span>My Projects</span>
                    </nav>
                </Link>
                <Link to="/contact">
                    <nav>
                        <span>Contact Me</span>
                    </nav>
                </Link>
                <SideNav >
                <GiHamburgerMenu />
                </SideNav>
            </Navigations>
          </Container>
    )
}

export default Header

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
margin: 0 20px;
border-radius: 5px;
padding: 0 50px;
/* background-color: #a2ebee; */
/* width: 85%; */
/* position: fixed; */
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
@media (max-width: 580px){
    width: auto; 
}
`
const LogoNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

`

const Navigations = styled.div`
display: flex;
flex-direction: row;
gap: 25px;



span{
    font-weight: 500;
    color: #830b47;

}
@media (max-width: 580px){
    display: none;
}

`
const SideNav = styled.div`
display: none;
/* font-size: 50px; */

@media (max-width: 580px){
    display: block;
    /* align-items: center; */
    cursor: pointer;
}
`
// const  = styled.div``