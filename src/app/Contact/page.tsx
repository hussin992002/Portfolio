"use client"
import { useState } from "react";
import Nav from "../components/Nav";
import "../globals.css"
import Contact from "../components/Contact";

export default function Home() {
    const [page] = useState("contact")

    return (
        <>
            <Nav page={page} />
            <Contact/>
        </>
    );
}
