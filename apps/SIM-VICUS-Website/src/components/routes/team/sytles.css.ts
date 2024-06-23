import {createVar, fallbackVar, style} from "@vanilla-extract/css";
import {vars} from "../../../styles/theme.css.ts";


export  const imageUrl = createVar()


export const border = style({
    height: "369px",
    width: "290px",
    background: "transparent",
    borderRadius: "10px",
    transition: "border 1s",
    position: "relative",
    ":hover": {
        border: "1px solid #fff",
    },
});



export const card = style({
    height: "379px",
    width: "300px",
    background: `center center no-repeat`,
    backgroundSize: "300px",
    borderRadius: "10px",
    transition: "background 0.8s",
    overflow: "hidden",
    boxShadow: "0 70px 63px -60px #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    ":hover":{
        background: `left center no-repeat`,
        backgroundSize: "600px",
    }
});
export const card_h2 = style({
    fontFamily: vars.fontFamily.light,
    color:vars.color.primary,
    margin: "20px",
    opacity: "0",
    transition: "opacity 1s",
    selectors: {
        [`${card}:hover &`]: {
          opacity:1
        }
    }
})

export const card_p = style({
    fontFamily: vars.fontFamily.light,
    color:vars.color.primary,
    margin: "20px",
    opacity: "0",
    transition: "opacity 1s",
    selectors: {
        [`${card}:hover &`]: {
            opacity:1
        }
    }
})



export const container = style({
    height: "100vh",
    width: "100vw",
    maxHeight: "800px",
    maxWidth: "1280px",
    minHeight: "600px",
    minWidth: "1000px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0 auto",
});

export const icons = style({
    position: "absolute",
    fill: "#fff",
    color: "#fff",
    height: "130px",
    top: "226px",
    width: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
});

export const fa = style({
    opacity: "0",
    transition: "opacity 1s",
    selectors: {
        [`${card}:hover &`]: {
            opacity: "1",
        },
    },
});

