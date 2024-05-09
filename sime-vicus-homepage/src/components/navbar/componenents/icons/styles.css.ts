import {style} from "@vanilla-extract/css";
import {vars} from "../../../../styles/theme.css.ts";

export const moon = style({
    width: "20px",
    stroke:vars.color.link
})

export const sun = style({
    width: "20px",
    stroke: "#E1A331"
})

export const button = style({
    width: "20px",
    backgroundColor: "transparent",
    border: "none",
})