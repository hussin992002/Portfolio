"use client"
import { useState } from "react";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import "./globals.css"

export default function Home() {
      const [page] = useState("home")
  return (
    <>
      <Nav page={page}/>
      <HomePage/>
    </>
  );
}
