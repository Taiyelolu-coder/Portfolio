import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaCaretRight } from "react-icons/fa";

const SideBar =({toggle, setToggle})=>{
    const test = () =>{
        setToggle(false)
    }
        return(
        <Container>
            <Links>
                <Link to="/" onClick={test}>
                    <nav>
                        <span>Home</span>
                        <FaCaretRight />
                    </nav>
                </Link>
                <Link to="/about" onClick={test}>
                    <nav>
                        <span>About Me</span>
                        <FaCaretRight />
                    </nav>
                </Link>
                <Link to="/skill" onClick={test}>
                    <nav>
                        <span>Skills</span>
                        <FaCaretRight />
                    </nav>
                </Link>
                <Link to="/project" onClick={test}>
                    <nav>
                        <span>My Projects</span>
                        <FaCaretRight />
                    </nav>
                </Link>
                <Link to="/contact" onClick={test}>
                    <nav>
                        <span>Contact Me</span>
                        <FaCaretRight />
                    </nav>
                </Link>
            </Links>
        </Container>
    )
}

export default SideBar

const Container = styled.div`
min-height: calc(100vh - 80px);
display: flex;
flex-direction: column;
align-items: start;
gap: 30px;
margin: auto;
margin-top: 20px;
padding-left: 10px;
padding-right: 10px;

`
const Links =styled.div`
display: flex;
flex-direction: column;
gap: 40px;
nav{
  display: flex;
  
}
`