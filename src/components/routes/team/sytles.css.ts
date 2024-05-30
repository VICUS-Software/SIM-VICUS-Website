import { globalStyle, style } from "@vanilla-extract/css"

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
    background: "#808080",
    borderRadius: "10px",
    transition: "background 0.8s",
    overflow: "hidden",
    background: "#000",
    boxShadow: "0 70px 63px -60px #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
});

export const card0 = style({
    background: "url(https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg) center center no-repeat",
    backgroundSize: "300px",
    ":hover": {
        background: "url(https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg) left center no-repeat",
        backgroundSize: "600px",
    },
    ":hover h2": {
        opacity: "1",
    },
});

export const card1 = style({
    background: "url(https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg) center center no-repeat",
    backgroundSize: "300px",
    ":hover": {
        background: "url(https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg) left center no-repeat",
        backgroundSize: "600px",
    },
    ":hover h2": {
        opacity: "1",
    },
});

export const card2 = style({
    background: "url(https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg) center center no-repeat",
    backgroundSize: "300px",
    ":hover": {
        background: "url(https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg) left center no-repeat",
        backgroundSize: "600px",
    },
    ":hover h2": {
        opacity: "1",
    },
});

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
    "selectors": {
        [`${card0}:hover &`]: {
            opacity: "1",
        },
        [`${card1}:hover &`]: {
            opacity: "1",
        },
        [`${card2}:hover &`]: {
            opacity: "1",
        },
    },
});

globalStyle("h2", {
    fontFamily: "Helvetica Neue , Helvetica , Arial , sans-serif",
    color: "#fff",
    margin: "20px",
    opacity: "0",
    transition: "opacity 1s",
});
