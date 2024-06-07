import { vars } from "../../../../../styles/theme.css.ts";
import {keyframes, style} from "@vanilla-extract/css";
const web_kit_slide_in =keyframes( {
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

const slide_in = keyframes( {
    "from": {
        opacity: "0",
        WebkitTransform: "translate(-100%)",
        transform: "translate(-100%)",
    },
    "to": {
        opacity: "1",
    },
});
export const feature_container = style({
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1.5fr 1fr 1fr",
    gap: "1rem",
});

export const svg = style({
    stroke: vars.color.secondary,
    width: "49%",
    height: "70%",
    maxHeight: "450px",
    maxWidth: "399px",
    strokeWidth: 0.1,
   opacity:1,
    marginLeft: "auto",
    WebkitAnimation: `${web_kit_slide_in} 1s ease-out`,
    animation: `${slide_in} 1s ease-out`,
});

export const placeHolder = style({
    width: "49%",
    height: "385px",
    maxHeight: "450px",
    maxWidth: "399px",

})

export const mid = style({
    border: "1px solid red",
    display: "grid",
    alignItems: "center",

});

export const right =  style({
    border: "1px solid red",
    display: "grid",
    alignItems: "center",

});

export const left =  style({
    border: "1px solid red",
    display: "grid",
    alignItems: "center",

});



export const text = style({
    fontFamily: vars.fontFamily.bold,
    color: vars.color.text,
    textAlign:"center",
    textWrap:"wrap",
    textIndent:"2rem",
    padding:"1rem"


});


export const heading = style({
    fontFamily: vars.fontFamily.heading,
    color:vars.color.heading,
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"center"
})





export const slideIn = style({
    WebkitAnimation: `${web_kit_slide_in} 1s ease-out`,
    animation: `${slide_in} 1s ease-out`,
});


