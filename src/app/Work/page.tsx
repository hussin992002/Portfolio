"use client"
import { useState } from "react";
import Nav from "../components/Nav";
import "../globals.css"
import Work from "../components/Work";

export default function Home() {
    const [page] = useState("work")

    return (
        <>
            <Nav page={page} />
            <Work />
        </>
    );
}



