import {type Component, type ParentComponent} from "solid-js";
import {wrapper} from "@components/routes/index/components/customer_banner/styles.css.ts";
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







