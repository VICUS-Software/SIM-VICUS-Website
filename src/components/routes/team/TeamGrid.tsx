import {ParentComponent} from "solid-js";
import {teamGridCss} from "~/components/routes/team/TeamGrid.css.ts";


export const TeamGrid:ParentComponent = (props)=>{

    return(
        <div class={teamGridCss}>
            {props.children}
        </div>
    )
}