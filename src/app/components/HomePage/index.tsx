import Image from "next/image";
import "./index.scss";
import gitIcon from "@/app/Svgs/github.svg"
import linkedin from "@/app/Svgs/linkedin.svg"
import twitter from "@/app/Svgs/twitter.svg"
import mongo from "@/app/Svgs/mongo.svg"
import react from "@/app/Svgs/react.svg"
import node from "@/app/Svgs/node.svg"
import express from "@/app/Svgs/express.svg"
import download from "@/app/Svgs/download.svg"
import imgsrc from '@/app/imgs/Me-modified (1).png'

const HomePage = () => {
    return (
        <div className="cont home">
            <div className="text">
                <p>Fullstack Developer</p>
                <h1>{`Hello I'm`}</h1>
                <h1>
                    <span>
                        Hussin Ashour
                    </span>
                </h1>
                <p>Im Fullstack Developer</p>
                <p>MERN Stack</p>
                <div className="MernIcons">
                    <span><Image className="img" src={mongo} alt="Icon" /></span>
                    <span><Image className="img" src={react} alt="Icon" /></span>
                    <span><Image className="img" src={express} alt="Icon" /></span>
                    <span><Image className="img" src={node} alt="Icon" /></span>
                </div>
                <div className="contactBox">
                    <div className="cv">
                        <a href="./HussinAshourCv.pdf" download="HussinAshourCV.pdf">Download CV <Image className="img" src={download} alt="Icon" /></a>
                    </div>
                    <div className="contactIcons">
                        <a href="https://github.com/hussin992002" target='blank'><Image className="img" src={gitIcon} alt="Icon" /></a>
                        <a href="https://www.linkedin.com/in/hussin-ashour-8802b4298/" target='blank'><Image className="img" src={linkedin} alt="Icon" /></a>
                        <a href="https://x.com/ashour_hus66083" target='blank'><Image className="img" src={twitter} alt="Icon" /></a>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="imgbox">
                    <Image className="img" src={imgsrc} alt="loading" />
                </div>
            </div>
        </div>
    )
}
export default HomePage;