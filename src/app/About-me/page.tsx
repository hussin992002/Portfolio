"use client"
import { useState } from "react";
import About from "../components/About";
import Nav from "../components/Nav";
import "../globals.css"

export default function Home() {
    const [page] = useState("about")
    return (
        <>
            <Nav page={page}/>
            <About/>
        </>
    );
}