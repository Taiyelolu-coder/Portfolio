import styled from "styled-components"
import { LuMapPin } from "react-icons/lu";
import { RiBuilding3Line } from "react-icons/ri";
import { MdCalendarMonth } from "react-icons/md";


const About =()=>{
    return(
        <Container>
            <AboutMe>
                <h1>Who am I?</h1>
                <p> I am a Health Education specialist driven by a passion to bridge the gap between individual and quality health care services. I look forward to building software and mobile applications that will enlighten and empower individuals and communities to take full responsiblity of their health and also improve their attitudes towards health. I also look forward to develop and deploy scalable telehealth solutions that improve patient outcomes, contribute to the development of innovative telehealth features (e.g. virtual consultations, remote monitoring), drive innovation in telehealth, improving healthcare accessibility and outcomes globally and develop strategic partnerships with healthcare organizations, driving telehealth adoptions. My main goal is to help individuals and communities improve their health outcomes. </p>
            </AboutMe>

            <Training>
                <h1>Training</h1>
                <Course>
                <h2>MERN Stack Development</h2>
                <Years>
                <p><span><RiBuilding3Line /></span>SAIL Innovation Lab.</p>
                <p><span><LuMapPin /></span> Lagos, Nigeria.</p>
                <p><span><MdCalendarMonth /></span>July, 2024 to date.</p>
                </Years>
                </Course>
            </Training>
            <Education>
                <h1>Education</h1>
                <Course>
                <h2>Health Education and Promotion</h2>
                <Years>
                <p><span><RiBuilding3Line /></span>POGIL College of Health Technology.</p>
                <p><span><LuMapPin /></span> Ogun, Nigeria.</p>
                <p><span><MdCalendarMonth /></span>August 2021 - May 2024.</p>
                </Years>
                </Course>
            </Education>

        </Container>
    )
}

export default About

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px 80px;
width: 90%;
max-width: 1280px;
margin: auto;
margin-bottom: 50px;
height: calc(100vh - 70px);
h1{
    font-size: 45px;
    color: #830b47;
    @media (max-width: 580px){
        font-size:40px;
    }
}
p{
    font-size: 18px;
}
`
const AboutMe = styled.div`
display: flex ;
flex-direction: column;
/* justify-content: start; */
align-items: center;
text-align: start;
@media (max-width: 580px){
    margin: auto;
}
p{
    width: 1100px;
    @media (max-width: 580px){
        width: auto;
        /* font-size: 15px; */
    }
}
`
const Training = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
text-align: start;
@media (max-width: 580px){
    flex-wrap: wrap;
    /* align-items: center; */
}
span{
    margin-right: 10px;
    @media (max-width: 580px){
        margin: auto;
    }
}
`
const Education = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
text-align: start;
@media (max-width: 580px){
    flex-wrap: wrap;
    /* align-items: center; */
}
span{
    margin-right: 10px;
    @media (max-width: 580px){
        margin: auto;
    }
}`

const Course = styled.div`
display: flex;
flex-direction: column;
align-items: start;
/* gap: 20px; */
h2{
    font-size: 20px ;
    color: #251038;
}
`
const Years = styled.div`
display: flex;
align-items: center;
gap: 20px;
`