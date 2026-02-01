"use client";

import "../app/styles/widgets.css"

import { useEffect, useRef, useState } from "react";


import { ReactDOM } from "react-dom/client";
import { Container } from "lucide-react";


export default function Skills(){
 
let conv=[1,2,3,4]
let rollers=[
    ["https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square","https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white","https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=red","https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2b%2b&logoColor=white","https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white","https://img.shields.io/badge/CI%2FCD-222222?style=flat-square&logo=githubactions&logoColor=blue","https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black","https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white","https://img.shields.io/badge/ASP.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white","https://img.shields.io/badge/SDL2-FF6F00?style=flat-square&logo=slack&logoColor=white","https://img.shields.io/badge/Unity-100000?style=flat-square&logo=unity&logoColor=white","https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black","https://img.shields.io/badge/Web_Development-222222?style=flat-square&logo=html5&logoColor=white","https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white","https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white","https://img.shields.io/badge/kubernetes-326CE5?&style=plastic&logo=kubernetes&logoColor=white",
],["https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white","https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white","https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white",],["https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white","https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square",],["https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white","https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white","https://img.shields.io/badge/Azure_DevOps-0078D7?style=flat-square&logo=azure-devops&logoColor=white",]]
  let allRefs = useRef([])
  let Containers = useRef([])

  let [state,chngState]=useState(0)
 allRefs.current=[]
 Containers.current=[]
 let animate = ()=>{
        
   
                allRefs.current.forEach((element)=>{

                    let frame=element.getBoundingClientRect()
                    
                    if (frame.x<Containers.current[0].getBoundingClientRect().width)
                    {
                        element.style.transform = `translateX(${frame.x+50}px)`
                      }
                    else{
                        let parentIndex = Array.from(Containers.current).indexOf(element.parentElement)
                        let nextIndex = (parentIndex+1)%rollers.length
                        Containers.current[parentIndex].removeChild(element)

                        Containers.current[nextIndex].appendChild(element)
                        element.style.transform = `translateX(${-frame.x}px)`
                       
                        
                        



                    }
                }    
        )}
    
useEffect(()=>{
   
setInterval(animate,500)
},[])

    

   let  addRefs=(element)=>{
        if (element && !allRefs.current.includes(element))
        {
            allRefs.current.push(element)
        }
     }

       let  addConveyorRefs=(element)=>{
        if (element && !Containers.current.includes(element))
        {
            Containers.current.push(element)
        }
     }

    return (
        <section className="skills">
<div className="Container">

{
    rollers.map((rows)=>{
        
    
   return  <div key={rollers.indexOf(rows)} ref={addConveyorRefs} className="Conveyor">
    {rows.map((data)=>{
        return <img src={data}  ref={addRefs} key={rows.indexOf(data)} tabIndex={rows.indexOf(data)} className="skillbadge" />
    })}
</div>
})
}
</div>
<script src="/scripts/conveyor.jsx"/>

 </section>
    );
}