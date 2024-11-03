import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Header from "./Static/Header"
import Footer from "./Static/Footer"
import Skill from "./Pages/Skill"
import styled from "styled-components"



function App() {


  return (
    <>
      <Container>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skill" element={<Skill />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </Container>
   
    </>
  )
}

export default App
const Container = styled.div``