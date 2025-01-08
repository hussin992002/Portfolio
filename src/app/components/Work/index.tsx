import Image from 'next/image';
import './index.scss';
import linkicon from "@/app/Svgs/link.svg"
const Work = () => {
    
    return (
        <div className="cont">
            <div className="work">
                <div className="box">
                    <h1>Auto Script</h1>
                    <span>Node js With Typescript</span>
                    <p>Script to create a text from other text files to get specific data from it.</p>
                </div>
                <div className="box">
                    <h1>Auto Script</h1>
                    <span>Node js With Typescript</span>
                    <span>Libraries like playwright and other</span>
                    <p>Script to create a accounts on website like facebook for example or just open the account and get data form it.</p>
                </div>
                <div className="box">
                    <h1>Customs office website</h1>
                    <span>Html Css JavaScript</span>
                </div>
                <div className="box">
                    <h1>Portfolio</h1>
                    <span>ReactJS Scss With Typescript</span>
                </div>
                <div className="box">
                    <h1>Portfolio for Myself</h1>
                    <span>Next JS Typescript</span>
                    <span>Scss</span>
                </div>
                <div className="box">
                    <h1>Login-Dashboard</h1>
                    <h2>FullStack</h2>
                    <span>Next JS Typescript</span>
                    <span>Scss</span>
                    <span>MongoDb with Prisma</span>
                    <span>Api to handel data and Server actions</span>
                </div>
                <div className="box">
                    <h1>Store</h1>
                    <h2>FullStack</h2>
                    <span>Next JS Typescript</span>
                    <span>Scss</span>
                    <span>MongoDb with Prisma</span>
                    <span>Api to handel data and Server actions</span>
                </div>
                <div className="box">
                    <h1>Text-Editor website</h1>
                    <span>Next JS Typescript</span>
                    <span>Scss</span>
                    <p>
                        Website can change, add, remove, search in a text or a text file or adding text to image.
                    </p>
                </div>
            </div>
            <a className='mylink' target='blank' href='https://github.com/hussin992002'>You can see all my work in github <Image className="img" src={linkicon} alt=''/></a>
        </div>
    )
}

export default Work;