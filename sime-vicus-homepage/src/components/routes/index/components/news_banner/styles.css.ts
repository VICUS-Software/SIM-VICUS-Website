import {style} from "@vanilla-extract/css";
import {vars} from "../../../../../styles/theme.css.ts";


export const card_wrapper = style({
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    gap:"1rem",
    margin:"1rem",
    marginTop:"9rem"


})

export const heading = style({
    color:vars.color.heading,
    fontFamily:vars.fontFamily.heading,
    textAlign:"center"
})
