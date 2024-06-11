import { vars } from "../../../../../styles/theme.css.ts";
import {keyframes, style} from "@vanilla-extract/css";
const web_kit_slide_in_left =keyframes( {
    "from": {
        opacity: "0",
        WebkitTransform: "translate(-100%)",
        transform: "translate(-100%)",
        background: "transparent",
    },
    "to": {
        opacity: "1",
    },
});

const slide_in_left = keyframes( {
    "from": {
        opacity: "0",
        WebkitTransform: "translate(-100%)",
        transform: "translate(-100%)",
    },
    "to": {
        opacity: "1",
    },
});

const web_kit_slide_in_right =keyframes( {
    "from": {
        opacity: "0",
        WebkitTransform: "translate(100%)",
        transform: "translate(100%)",
        background: "transparent",
    },
    "to": {
        opacity: "1",
    },
});

const slide_in_right = keyframes( {
    "from": {
        opacity: "0",
        WebkitTransform: "translate(100%)",
        transform: "translate(100%)",
    },
    "to": {
        opacity: "1",
    },
});
export const feature_container = style({
    display: "flex",
   flexDirection:"column",
    gap: "1rem",
    backgroundImage: `linear-gradient(to right, ${vars.backgroundColor.surface} 1px, transparent 1px),
    linear-gradient(to bottom, ${vars.backgroundColor.surface} 1px, transparent 1px)`,
    backgroundSize: "24px 24px",
    opacity:1

});

export const svg_container=style({
    display:"grid",
    gridTemplateColumns: "1.5fr 1fr",
    gridTemplateRows:"1fr",
    gap: "1rem",

})
export const text_container=style({
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gridTemplateRows:"1fr",
    gap: "1rem",

})
export const svg = style({
    stroke: vars.color.secondary,
    width: "49%",
    height: "70%",
    maxHeight: "450px",
    maxWidth: "399px",
    strokeWidth: 0.1,
   opacity:1,
    marginLeft: "auto",
    WebkitAnimation: `${web_kit_slide_in_left} 1s ease-out`,
    animation: `${slide_in_left} 1s ease-out`,
});

export const placeHolder = style({
    width: "49%",
    height: "385px",
    maxHeight: "450px",
    maxWidth: "399px",

})

export const mid = style({
    display: "grid",
    alignItems: "center",
    width:"70%"
});

export const right =  style({

    display: "grid",
    alignItems: "center",

});

export const left =  style({

    display: "grid",
    alignItems: "center",

});



export const text = style({
    fontFamily: vars.fontFamily.bold,
    color: vars.color.text,
    textAlign:"center",
    textWrap:"wrap",
    textIndent:"2rem",
    padding:"1rem",
    WebkitAnimation: `${web_kit_slide_in_right} 1s ease-out`,
    animation: `${slide_in_right} 1s ease-out`,


});


export const heading = style({
    fontFamily: vars.fontFamily.heading,
    color:vars.color.heading,
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"center",
    WebkitAnimation: `${web_kit_slide_in_right} 1s ease-out`,
    animation: `${slide_in_right} 1s ease-out`,

})

export const graph_background = style({
    zIndex: 29,
    inset: "0",
    height: "100%",
    width: "100%",
    backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px),
    linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
    backgroundSize: "24px 24px",
    opacity: 1,
});

