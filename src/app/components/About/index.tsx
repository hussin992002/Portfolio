'use clinet'
import Image from "next/image";
import "./index.scss";
import reacticone from "@/app/Svgs/react.svg";
import nexticon from "@/app/Svgs/next.svg";
import Scssicon from "@/app/Svgs/scss.svg";
import expressicon from "@/app/Svgs/express.svg";
import nodeicon from "@/app/Svgs/node.svg";
import nesticon from "@/app/Svgs/nest.svg";
import mongoicon from "@/app/Svgs/mongo.svg";



const About = () => {
    
    return (
        <div className="cont about">
            <div className="right">
                <div className="box box1">
                    <h1>Front-End Developer</h1>
                    <div className="iconbox">
                        <h3>Recat Js</h3>
                        <Image className="img" src={reacticone} alt="loading" />
                    </div>
                    <div className="iconbox">
                        <h3>Next Js</h3>
                        <Image className="img" src={nexticon} alt="loading" />
                    </div>
                    <div className="iconbox">
                        <h3>Scss</h3>
                        <Image className="img" src={Scssicon} alt="loading" />
                    </div>
                    <p>{`I've been learning front-end since 2022 and I think I've reaches to a good place`}</p>
                </div>
                <div className="box box2">
                    <h1>Back-End Developer</h1>
                    <div className="iconbox">
                        <h3>Express</h3>
                        <Image className="img" src={expressicon} alt="loading" />
                    </div>
                    <div className="iconbox">
                        <h3>Nest Js</h3>
                        <Image className="img" src={nesticon} alt="loading" />
                    </div>
                    <div className="iconbox">
                        <h3>Node JS</h3>
                        <Image className="img" src={nodeicon} alt="loading" />
                    </div>
                    <p>{`I started the back-end journey for 1 and half years and i'm still improving my self`}</p>
                </div>
            </div>
            <div className="left">
                <div className="box box3">
                    <h1>DataBase</h1>
                    <div className="iconbox">
                        <h3>Mongo db</h3>
                        <Image className="img" src={mongoicon} alt="loading" />
                    </div>
                    <p>{`I just started to learn DataBase but im tying to inhanse my skills by doing new projects using mongo db with prisma`}</p>
                </div>
                <div className="box box4">
                    <h1>WebScraping</h1>
                    <h3>PlayWright</h3>
                    <h3>Selenium</h3>
                    <h3>Other Libraries for geting data from a wepsite</h3>
                    <p>{`I've been using webScraping in a freelace work for 1 year and did pretty good i thing`}</p>
                </div>
            </div>


        </div>
    )
}

export default About;