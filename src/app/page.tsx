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
       <section className="landingPage">
         <div className="lines">
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
      <h2>Public Projects</h2>
      <ul className="ProjView">
        <li><h3><a className="projLink" href="https://scentjozi-466018.uk.r.appspot.com/">ScentJozi</a></h3>
        <p>Scent Jozi is a demo ecommerce website built with react+nexjs with payfast intergrate as payment gateway. and firebase and supabase as third party used for storage and Authentication.   </p></li>
        
        <li><h3> <a className="projLink" href="https://frapapi-47403969124.europe-west1.run.app/">test Fragrance Api</a></h3>
        a Dockerized google cloud build + cloud run deployed free api which consists 20,000 fragrances useful for simple test when developing ecommerce platform web or mobile . 
        </li>
         <li><h3><a className="projLink" href="https://peecha-kutcha.vercel.app">Peecha Kutcha</a></h3>
        <p>Peecha Kutcha is a simple webapp which helps people practise presentation based on random images (related to the topic given)   </p></li>
        <li><h3><a className="projLink" href="https://siyakhanya.vercel.app/">SiyaKhanya</a></h3>
        <p>Siyakhanya was developed as part of the numisa hackathon whereby the problem it was trying to reslove was of "Electricity and inability for SA Community to move to Alternative Energy" what we do is we introduce we introduce grouped community with affordable suppliers (Market Place)  </p></li>
       
        
      </ul>
    </section>
    <section>
      <h2>Participation and contribution</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
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
