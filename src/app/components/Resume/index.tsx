import { useState } from 'react';
import './index.scss'

const Resume = () => {
    const [whatres, setres] = useState('Exprience')

    const Exprience = () => {
        return (
            <>
                <h1>Exprience</h1>
                <span>2023 - Present</span>
                <h2>Freelacer</h2>

                <div className="txt">
                    <span></span>
                    <p> Creating  websites for Offices and personal websites.</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>
                        I worked as freelancer doing scripts for Automation web using Playwright And Selenium with TypeScript.
                    </p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>
                        Automation scripts to create accounts using API to solve captcha and getting phone number and receiving OTP.
                    </p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>
                        looping on account list to open them one by one and getting information and doing or changing something on accounts using Playwright And Selenium with TypeScript.
                    </p>
                </div>
            </>
        )
    }
    const Courses = () => {
        return (
            <>
                <h1>Courses</h1>
                <div className="txt">
                    <span></span>
                    <p>Web Development.</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Web Scraping.</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Object-Oriented Programing.</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>DataBase - MongoDB.</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Express.JS - Playwright - Selenium -Faker.JS - Node.JS.</p>
                </div>
            </>
        )
    }
    const Education = () => {
        return (
            <>
                <h1>Education</h1>
                <span>2020 - 2024</span>
                <h2>Faculty of commerce Ain shams university</h2>
                <p>Bachelor Degree in Accounting Department </p>
            </>
        )
    }
    const CodingSk = () => {
        return (
            <>
                <h1>Coding Skills</h1>

                <div className="codingtxt">
                    <h2>Front-End</h2>
                    <p>React JS</p>
                    <p>Next JS</p>
                    <p>Scss</p>
                    <p>tailwindui Css</p>
                </div>
                <div className="codingtxt">
                    <h2>Back-End</h2>
                    <p>Express JS</p>
                    <p>Nest JS</p>
                    <p>MongoDb</p>
                    <p>Api make - use </p>
                </div>
                <div className="codingtxt">
                    <h2>Web-Scraping</h2>
                    <p>Playwright</p>
                    <p>Selenium</p>
                    <p>Other-Libraries to get data form a website without open it</p>
                </div>
            </>
        )
    }
    const CodingLa = () => {
        return (
            <>
                <h1>Coding Languages</h1>
                <div className="txt">
                    <span></span>
                    <p>JaveScript</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>TypeScript</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Python</p>
                </div>
            </>
        )
    }
    const Skills = () => {
        return (
            <>
                <h1>Skills</h1>
                <div className="txt">
                    <span></span>
                    <p>Microsoft Office</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Photoshop</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Multitasking</p>
                </div>
                <div className="txt">
                    <span></span>
                    <p>Fast Typing</p>
                </div>
            </>
        )
    }
    const hadelres = (whatres: string) => {
        if (whatres == "Exprience") {
            return Exprience()
        } else if (whatres == "Courses") {
            return Courses()
        } else if (whatres == "Education") {
            return Education()
        } else if (whatres == "CodingSk") {
            return CodingSk()
        } else if (whatres == "CodingLa") {
            return CodingLa()
        } else if (whatres == "Skills") {
            return Skills()
        }
    }
    return (
        <div className="cont resmue">
            <div className="myResmue">
                <h1>Why hire me ?</h1>
                <p>
                    Ambitious individual looking for great opportunities to seize.
                    Fast learner and team player. Can work under pressure with the help of good multitasking.
                </p>
                <div className="buttons">
                    <button className={whatres == "Exprience" ? 'active' : ''} onClick={() => {
                        setres("Exprience")
                    }}>Exprience</button>
                    <button className={whatres == "Courses" ? 'active' : ''} onClick={() => {
                        setres("Courses")
                    }}>Courses</button>
                    <button className={whatres == "Education" ? 'active' : ''} onClick={() => {
                        setres("Education")
                    }}>Education</button>
                    <button className={whatres == "CodingSk" ? 'active' : ''} onClick={() => {
                        setres("CodingSk")
                    }}>Coding-Skills</button>
                    <button className={whatres == "CodingLa" ? 'active' : ''} onClick={() => {
                        setres("CodingLa")
                    }}>Coding-Languages</button>
                    <button className={whatres == "Skills" ? 'active' : ''} onClick={() => {
                        setres("Skills")
                    }}>Skills</button>
                </div>
            </div>

            <div className="text">
                {hadelres(whatres)}
            </div>
        </div>
    )
}

export default Resume;