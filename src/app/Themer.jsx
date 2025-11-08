"use client";

import { ThemeProvider,createTheme} from "@mui/material/styles";
import { div } from "motion/react-client";


export default function CustomTheme({children}){

    const theme = createTheme(
    {
      palette:{
        mode:"dark",
        primary:{
          main:"#3c6e71",
          light:"#FFFFFF",
          dark:"#353535", 
          },
        background:{
          default:"#353535",
          paper:"#353535"
        },
        action:{
          hover:"#d9d9d9",
          active:"#d9d9d9"
        },
        text:{
        primary: "#353535"  
        }

      }
    }
  )
  
    return (
        <div>
        <ThemeProvider
          theme={theme}>
                {children}
            </ThemeProvider>
          </div>
    )
}