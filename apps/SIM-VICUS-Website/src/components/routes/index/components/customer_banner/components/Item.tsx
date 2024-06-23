import type {ParentComponent} from "solid-js";
import {index, item} from "./styles.css.ts";

 export type ItemProps = {
    index:number
}
import { assignInlineVars } from '@vanilla-extract/dynamic';
export const Item:ParentComponent<ItemProps> = (props)=>{
    return(
        <div class={item} style={assignInlineVars({
        [index]:props.index.toString()
        })}>
            {props.children}
        </div>
    )
}