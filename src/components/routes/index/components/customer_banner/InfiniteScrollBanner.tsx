import type { Component,  ParentComponent} from "solid-js";
import {wrapper} from "./styles.css.ts";
import {Item, type ItemProps} from "./components/Item.tsx"



type InfiniteScrollBannerRootType = ParentComponent & {
    Item: Component<ItemProps>;
};
const InfiniteScrollBannerRoot:InfiniteScrollBannerRootType = (props) =>{

    return(
        <div class={wrapper}
        >
            {props.children}

        </div>
    )
}
InfiniteScrollBannerRoot.Item = Item;

export {InfiniteScrollBannerRoot}







