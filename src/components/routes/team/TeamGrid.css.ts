import {createContainer, style} from "@vanilla-extract/css";

const teamGrid = createContainer();
export const teamGridCss = style({
    containerName: teamGrid,
    display:"grid",
    gridTemplateRows:"1fr",
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
    alignItems:"center",
   justifyContent:"center",
    justifyItems:"center",
    gap:"1rem",
    rowGap:"1rem",
    marginLeft:"auto",
    marginRight:"auto",
    alignContent: "space-evenly",
    '@container': {
        [`${teamGrid} (min-width: 1024px)`]: {
            gridTemplateColumns: "repeat(3,minmax(0,1fr)",
        },
        [`${teamGrid} (min-width: 768px)`]: {
            gridTemplateColumns: "repeat(2,minmax(0,1fr)",
        },
    },
    "@media":{
        'screen and (min-width: 768px)': {
            gridTemplateColumns: "repeat(2,minmax(0,1fr)",
        },
        "screen and (min-width: 1024px)": {
            gridTemplateColumns: "repeat(3,minmax(0,1fr)",
        },
    }
})