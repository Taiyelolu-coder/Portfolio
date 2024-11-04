import {useState} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./Sidebar";
const Header = () =>{

    
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
      setToggle(!toggle)
  }

    return(
        <>
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

            </Navigations>
            <SideNav onClick={handleToggle}>
                <GiHamburgerMenu />
                </SideNav>
          </Container>
              {toggle === false ? null : <SideBar toggle =
              {toggle} setToggle={setToggle}/>}
        </> 
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
  h1{
    color:linear-gradient(to bottom, rgba(255, 165, 0, 0.4), rgba(33, 85, 27, 0.6), rgba(230, 78, 0, 0.4)) ;
    @media (max-width: 580px){
        font-size: 20px;

    }
  }
`

const Navigations = styled.div`
display: flex;
flex-direction: row;
gap: 25px;


span{
    font-weight: 500;
}
span:hover{
   
    color: #830b47;

}
@media (max-width: 580px){
    display: none;
}

`
const SideNav = styled.div`
display:none;
font-size:30px;
/* margin-left: -30px;. */

@media (max-width: 580px){
  display:flex;
  align-items: center;
  cursor:pointer;
}
`
// const  = styled.div``