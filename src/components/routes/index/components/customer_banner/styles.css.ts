import {style,keyframes} from "@vanilla-extract/css";
import {vars} from "../../../../../styles/theme.css.ts";


export const wrapper = style({
    width: "90%",
    maxWidth: "1536px",
marginInline: "auto",
position: "relative",
height: "100px",
marginTop: "5rem",
overflow: "hidden",
    ":after":{
        boxSizing:"border-box"
    }
})


export const customer = style({
    textAlign:"center",
    fontFamily:vars.fontFamily.heading,
    color:vars.color.heading
})
