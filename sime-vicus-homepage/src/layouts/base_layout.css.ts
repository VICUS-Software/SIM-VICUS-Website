import {style} from "@vanilla-extract/css";
import {vars} from "../styles/theme.css.ts";



export const base_layout_style =style({
    background: vars.backgroundColor.primary,
    width:"100%",
    height:"100%",
    margin:0,
    padding:0,
    display:"grid",
    gridTemplateAreas: `"Header Header Header"
                        "Main Main Main"
                        "Footer Footer Footer"`,
})