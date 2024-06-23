import {createVar, keyframes, style} from "@vanilla-extract/css";

export const index = createVar()


const scroll_to_left = keyframes({
    to:{
        left:"-200px"
    }
})

export const item = style({
    width: "200px",
    height: "100px",
    backgroundColor: "transparent",
    borderRadius: "6px",
    position: "absolute",
    left: "max(calc(200px*8),100%)",
    animationName: scroll_to_left,
    animationDuration: "30s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDelay: `calc(30s / 8 * (8 - ${index}) * -1)`

});