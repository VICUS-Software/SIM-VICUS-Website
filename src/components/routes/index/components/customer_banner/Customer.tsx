import type {ParentComponent} from "solid-js";
import {customer} from "@components/routes/index/components/customer_banner/styles.css.ts";


export const Customer:ParentComponent = (props) =>{

return(
    <div class={customer}>{props.children}</div>
)
}