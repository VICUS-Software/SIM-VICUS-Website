import {style} from "@vanilla-extract/css";
import {vars} from "../../../../../styles/theme.css.ts";


export const feature_container = style({

    display:"grid",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr",
    gap:"1rem",
    placeContent:"center"
})

export const svg = style({
    stroke:vars.color.secondary,
    width:"49%",
    height:"70%",
    maxHeight:"500px",
    maxWidth:"399px",
    strokeWidth:0.5

})

export const element = style({
    border:"1px solid red"

})

export const text = style({
    fontFamily:vars.fontFamily.bold,
    color:vars.color.text
})