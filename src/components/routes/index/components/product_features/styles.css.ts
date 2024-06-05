import { vars } from "../../../../../styles/theme.css.ts";
import { style } from "@vanilla-extract/css";

export const feature_container = style({
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    placeContent: "center",
});

export const svg = style({
    stroke: vars.color.secondary,
    width: "49%",
    height: "70%",
    maxHeight: "450px",
    maxWidth: "399px",
    strokeWidth: 0.1,
   opacity:0.5,
    marginLeft: "auto",
    marginRight: "auto",
});

export const element = style({
    border: "1px solid red",
    display: "grid",
    alignItems: "center",

});


export const text = style({
    fontFamily: vars.fontFamily.bold,
    color: vars.color.text,
    textAlign:"center",
    textWrap:"wrap",
    textIndent:"2rem"
});


export const heading = style({
    fontFamily: vars.fontFamily.heading,
    color:vars.color.heading
})
