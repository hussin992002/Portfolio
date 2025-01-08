"use client"
import Image from "next/image"
import "./index.scss"
import logosrc from '@/app/imgs/MyLogo.jpg'
import { useState } from "react"
interface iproob {
    page: string
}
const Nav = ({ page }: iproob) => {
    const [span, setspan] = useState(false)
    return (
        <div className="continer">
            <div className="logo">
                <Image className="img" src={logosrc} alt="looding" />
                <p>WebDeveloper</p>
            </div>
            <div className="span-links">
                <div className="spans" onClick={() => {
                    setspan(!span)
                }}>
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                </div>
                <div className={`links ${span ? 'active' : ""}`}>
                    <a href="." className={page == 'home' ? "active" : ''}>Home</a>
                    <a href="/About-me" className={page == 'about' ? "active" : ''}>About-me</a>
                    <a href="/Resume" className={page == 'resume' ? "active" : ''}>Resume</a>
                    <a href="/Work" className={page == 'work' ? "active" : ''} >Work</a>
                    <a href="/Contact" className={page == 'contact' ? "active" : ''} >Contact</a>
                </div>

            </div>
        </div>
    )
}
export default Nav