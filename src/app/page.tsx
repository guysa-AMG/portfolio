"use client";
import "./layout.css"
import "./styles/section.css"
import "./styles/landingAnim.css"
import { use } from "react";
import Skills from "../components/frameworks";
import {createTheme,ThemeProvider} from "@mui/material/styles";
import GitHubContrib from "@/components/ghcontrib"

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
       <div className="videoanim">
       <video src={"/back.mp4"} autoPlay loop/>
       <video  src={"/back.mp4"} autoPlay loop/></div>
       

      <div className="contentBd">
        <div>
       <h4 className="m-0 p-0 ">Hi there i'm</h4>
       
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
    
      <Button size="medium" variant="contained" onClick={()=>scrolldn()}>whoami</Button></div>
    </div>
       </section>
    <section className="proj" >
      <h2>Public Projects</h2>
      <ul className="ProjView">
         <li>
          
          <h3><a className="projLink" href="https://scentjozi-466018.uk.r.appspot.com/">Vicuna med</a></h3>
          <div className="proj-creation"> created: 2025/11/26</div>
        <p>Vicuna med is a flutter application built to serve the purpose of LLM reading and explaining medical note to patient without the compromise of privacy currently on Beta trial in playstore  </p></li>
        

        <li><h3><a className="projLink" href="https://scentjozi-466018.uk.r.appspot.com/">ScentJozi</a></h3>
        <div className="proj-creation"> created: 2025/11/26</div>
        <p>Scent Jozi is a demo ecommerce website built with react+nexjs with payfast intergrate as payment gateway. and firebase and supabase as third party used for storage and Authentication.   </p></li>
        

        <li><h3> <a className="projLink" href="https://frapapi-47403969124.europe-west1.run.app/">test Fragrance Api</a></h3><p>  
        a Dockerized google cloud build + cloud run deployed free api which consists 20,000 fragrances useful for simple test when developing ecommerce platform web or mobile . </p>
        </li>
         <li><h3><a className="projLink" href="https://peecha-kutcha.vercel.app">Peecha Kutcha</a></h3>
       <div className="proj-creation"> created: 2025/08/04</div>
        <p>Peecha Kutcha is a simple webapp which helps people practise presentation based on random images (related to the topic given)   </p></li>
        
        <li><h3><a className="projLink" href="https://siyakhanya.vercel.app/">SiyaKhanya</a></h3>
        <div className="proj-creation"> created: 2025/11/24</div>
        <p>Siyakhanya was developed as part of the numisa hackathon whereby the problem it was trying to reslove was of "Electricity and inability for SA Community to move to Alternative Energy" what we do is we introduce we introduce grouped community with affordable suppliers (Market Place)  </p></li>
       
          <li><h3><a className="projLink" href="https://github.com/guysa-AMG/JVExpress">JVExpress</a></h3>
        <div className="proj-creation"> created: 2026/01/05</div>
        <p>J-Express is a high-performance, lightweight Java web framework built from the raw socket level up. By bypassing heavy enterprise abstractions, it brings the minimalist, "plug-and-play" philosophy of Node.js Express to the Java ecosystem.

Designed for developers who value transparency and speed</p></li>
        
      </ul>
    </section>
    
    <section>
      
      <h2>Participation and contribution</h2>
      <ul>
        <li>
          <h2>2025 Hactoberfest</h2>
          the 2025 Hacktoberfest was a fun challenge. i worked on issues the main reason for this hackathon was to influence open source 
          contribution.
          </li>
        <li>
        <h2>2025 NUMSA Discothon</h2>  
          
          </li>

        <li></li>
      </ul>
    </section>
    <section>

<Skills/>





    </section>
    
    
    </div>
    
  );
}
