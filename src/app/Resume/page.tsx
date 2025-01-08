"use client"
import { useState } from "react";
import Nav from "../components/Nav";
import "../globals.css"
import Resume from "../components/Resume";

export default function Home() {
    const [page] = useState("resume")
    return (
        <>
            <Nav page={page} />
            <Resume/>
        </>
    );
}