import {vars} from "../../../../../styles/theme.css.ts";
import {style} from "@vanilla-extract/css";

export const intro_header = style({
    color:"#FFB618",
    fontFamily:vars.fontFamily.heading,
    textAlign:"center",
    marginTop:"7rem"
})

export const intro_text = style({
    color:vars.color.text,
    fontFamily:vars.fontFamily.text,
    textAlign:"center",
    textWrap:"wrap"
})

export const intro_button = style({
    border:`1px solid ${vars.color.borderPrimary}`,
    background:"transparent",
    fontFamily:vars.fontFamily.light,
    color: vars.color.text,
    marginLeft:"15rem",
    marginTop:"1rem",
    width:"129px",
    ":hover":{
        color:vars.color.heading,
        borderColor:vars.color.heading
    }
})