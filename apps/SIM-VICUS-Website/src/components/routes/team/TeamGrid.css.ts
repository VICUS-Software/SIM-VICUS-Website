import {createContainer, style} from "@vanilla-extract/css";

export const teamGridCss = style({
    display:"grid",
    gridTemplateRows:"repeat(1,minmax(0,1fr))",
    gridTemplateColumns: "repeat(1,minmax(0,1fr))",
   placeContent:"center",
    marginLeft:"auto",
    marginRight:"auto",
    gap:"1rem",
    rowGap:"1rem",
    '@container': {
        '(min-width: 768px)': {
            display:"grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr)",
            placeContent: "space-evenly",

        },
        '(min-width: 1024px)': {
            display:"grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr)",
            placeContent: "space-evenly",
            marginLeft:"auto",
            marginRight:"auto",
        },
    },

    "@media": {
        'screen and (min-width: 768px)': {
            display:"grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr)",
            placeContent: "space-evenly",

        },
        'screen and (min-width: 1024px)': {
            display:"grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr)",
            placeContent: "space-evenly",
            marginLeft:"auto",
            marginRight:"auto",
        },
    }
})