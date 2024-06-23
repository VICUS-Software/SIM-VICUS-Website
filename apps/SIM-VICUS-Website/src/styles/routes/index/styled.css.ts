import {style} from "@vanilla-extract/css";
import {vars} from "../../theme.css.ts";






export const stone_wall = style({
    display:"block",
    height:"90%",
    overflowClipMargin:"content-box",
    overflow:"clip",
    backgroundColor:"transparent",
    width:  "100%",

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

export const customer_banner_wrapper = style({
    gridArea:"mac",
    marginTop:"40rem",
    zIndex:20

})

export const background_wrapper = style({
    display:"grid",
    gridTemplateColumns:"minmax(0,1fr)",
    gridTemplateRows: "minmax(0,1fr)",
    gap:"1rem",
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
export const next_section_news = style({
    gridArea:"bottom",

})











