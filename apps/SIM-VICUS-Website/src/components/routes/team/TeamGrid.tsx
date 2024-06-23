import {ParentComponent} from "solid-js";
import "./TeamGrid.css"


export const TeamGrid:ParentComponent = (props)=>{

    return(
        <div class={"team-grid"}>
            {props.children}
        </div>
    )
}