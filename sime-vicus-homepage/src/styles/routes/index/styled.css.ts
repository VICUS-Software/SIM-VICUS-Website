import {style} from "@vanilla-extract/css";
import {vars} from "../../theme.css.ts";


  export const mac__image = style({
      width:  "100%",
      maxWidth:"1229px",
       height: "fit-content",
      backgroundColor: "transparent",
      fill: vars.backgroundColor.primary,
      position:"absolute",
      top:142,
      left:520,
      zIndex:9,
      maxHeight:"80%"

  })

export const mac__video = style({
        display:"block",
    width:  "98%",
    maxWidth:"1229px",
    unicodeBidi:"isolate",
    height: "100%",
    position:"absolute",
    top:79,
    zIndex:8,
    borderTopRightRadius:"25px",
    borderTopLeftRadius:"25px",
    left:570,
    backgroundColor:"transparent",
    transform :"rotate(-8deg) skew(-8deg) scale(.42,.520) translate(30%,-38.5%)"
})


export const stone_wall = style({
    display:"block",
    height:"90%",
    overflowClipMargin:"content-box",
    overflow:"clip",
     width:"100%",
    aspectRatio:"auto 2560 / 1199",
    backgroundColor:"transparent",

})
export const stone_space = style({
    zIndex:10,
    gridArea:"mac",
    height:"900px",
    width:"100%",
    background:"transparent",
    aspectRatio:"auto 2560 / 1199",
    overflowClipMargin:"content-box",
    overflow:"clip",
    gridTemplateColumns:"1f,auto",
    gridTemplateAreas:`"mac_top"
    "mac_bottom"   
    `
})

export const stone_space_top = style({
    gridArea:"mac_top",
    width: "90%",
    height:"40%",
    margin:"1rem"
})


export const stone_space_bottom = style({
    gridArea:"mac_bottom",

    width: "100%",
    height:"90%",
})


export const space = style({
    gridArea:"mac",
    height:"100%",
   maxHeight:"900px",
    width:"100%",
    overflow:"hidden",

    marginTop:"-1rem",
    backgroundColor:"transparent",
})

export const background_wrapper = style({
    display:"grid",
    gridTemplateColumns:"1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"mac"
                        "bottom"
    `
})

export const index_page_wrapper = style({
    gridArea:"mac",
    display:"grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas:`"left" "right"`,
})

export const left_page = style({
    padding:"1rem",
    gridArea:"left",
    zIndex: 10,

})

export const  next_section = style({
    gridArea:"bottom"
})











