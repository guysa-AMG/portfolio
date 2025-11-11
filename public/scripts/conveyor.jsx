

let conv = document.querySelectorAll(".Conveyor")
let convContainer = document.querySelector(".ConvContainer")
let badges=["https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white","https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square","https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square","https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white","https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white","https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white","https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white","https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=red","https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2b%2b&logoColor=white","https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white","https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white","https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white","https://img.shields.io/badge/Azure_DevOps-0078D7?style=flat-square&logo=azure-devops&logoColor=white","https://img.shields.io/badge/CI%2FCD-222222?style=flat-square&logo=githubactions&logoColor=blue","https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black","https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white","https://img.shields.io/badge/ASP.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white","https://img.shields.io/badge/SDL2-FF6F00?style=flat-square&logo=slack&logoColor=white","https://img.shields.io/badge/Unity-100000?style=flat-square&logo=unity&logoColor=white","https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black","https://img.shields.io/badge/Web_Development-222222?style=flat-square&logo=html5&logoColor=white","https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white","https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white","https://img.shields.io/badge/kubernetes-326CE5?&style=plastic&logo=kubernetes&logoColor=white",
]

class Conveyor
{


    constructor(lst){
        this.cnv_id=0
        this.element=document.createElement("div")
        this.element.innerText= `${Array.from(conv[this.cnv_id].childNodes).length}`
        this.w=0
        conv[this.cnv_id].insertBefore(this.element,conv[this.cnv_id].firstChild)
        
        



    }

    update(){
       
        this.w+=conv[this.cnv_id].clientWidth*0.2
       console.log(this.w)
        if (this.w>conv[this.cnv_id].clientWidth){
            this.mv()
        }

        this.element.style.transform=`translateX(${this.w}px)`
       
        
    }
    mv(){
        console.log(`moving ${this.element.innerText}`)
        conv[this.cnv_id].removeChild(this.element)
        this.cnv_id=(this.cnv_id+1)%Array.from(conv).length
        this.w=0
        conv[this.cnv_id].insertBefore(this.element,conv[this.cnv_id].firstChild)

    }

}
let objs=[]

let mover=()=>{
let obj=new Conveyor()
objs.push(obj)
for (let ob of objs){
    ob.update()

}



}
element_list=[]



//setInterval(()=>{mover()},3000)

