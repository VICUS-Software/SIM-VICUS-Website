import type { ParentComponent } from "solid-js";
import { page_container } from "./styles.css";

export const Page: ParentComponent = (props) => {
    return <main class={page_container}>{props.children}</main>;
};
