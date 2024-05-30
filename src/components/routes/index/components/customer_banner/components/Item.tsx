import type {ParentComponent} from "solid-js";
import {index, item} from "@components/routes/index/components/customer_banner/components/styles.css.ts";

 export type ItemProps = {
    index:number
}
import { assignInlineVars } from '@vanilla-extract/dynamic';
export const Item:ParentComponent<ItemProps> = (props)=>{
    console.log(props.index)
    return(
        <div class={item} style={assignInlineVars({
        [index]:props.index.toString()
        })}>
            {props.children}
        </div>
    )
}