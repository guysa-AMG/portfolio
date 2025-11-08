"use client";
import "./layout.css"
import "./styles/section.css"
import "./styles/landingAnim.css"
import "./script/animation";
import { use } from "react";
import Skills from "../components/frameworks";
import {createTheme,ThemeProvider} from "@mui/material/styles";

import  { Person } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TypingText from "@/components/ui/shadcn-io/typing-text";
export default function Home() {

  function scrolldn(){
    let nxt = document.querySelectorAll("section")[1]
    nxt.scrollIntoView()
  }
  
  return (

    <div>
       <section className="landingPage"> <div className="lines">
  <div className="line"></div>
  <div className="line"></div> 
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div>

       <h4 className="m-0 p-0">Hi there i'm</h4>
       
       <h1 className="type">
        <TypingText
        spellCheck={true}
        showCursor={false}
        deletingSpeed={20}
        typingSpeed={80}
        loop={true}
        text={["a Frontend dev","a backend engineer","a Mobile App Dev","a Game Dev","a Cloud Engineer","a Software Engineer","Guysa"]}
        />
        </h1>
    
      <Button size="medium" variant="contained" onClick={()=>scrolldn()}>whoami</Button>
       </section>
    <section >
      <h2>Projects</h2>
      <ul>
        <li>ScentJozi</li>
        <li>test Fragrance Api</li>
      </ul>
    </section>
    <section>

<Skills/>





    </section>
    <section>
      Contacts
    </section>
    </div>
    
  );
}
