"use client";

import { GitHub, LinkedIn, Reddit, WhatsApp } from "@mui/icons-material";
import { AppBar } from "@mui/material";


export default function Frame({children}){


    return (
    <div><AppBar/>
    <nav>
        <ul>
            <li>
                <a href="https://github.com/guysa-AMG">
                    <GitHub sx={{"fontSize":"30px"}}/> 
                </a>
               
                </li>
            <li>
                <a href="https://www.linkedin.com/in/guysa-ahmed-muhammed-88871b195/"><LinkedIn sx={{"fontSize":"30px"}}/></a>
                
                </li>
            <li>
                <a href="https://www.reddit.com/user/Agreeable_Rough_2563/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button">
                <Reddit sx={{"fontSize":"30px"}}/>
                </a>
                 <a href="https://stackoverflow.com/users/29358956/moosa-ahmed-mume">
                <Reddit sx={{"fontSize":"30px"}}/>
                </a>
                
                
                </li>
        </ul>
    </nav>
    {children}
    
    </div>
    
);
}
