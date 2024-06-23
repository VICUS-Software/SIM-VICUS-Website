import {children, For, type ParentComponent} from "solid-js";
import {Customer, InfiniteBanner} from "@components/routes/index/components/customer_banner/index.ts";


export const CustomerBanner:ParentComponent = (props)=>{
    const resolvedChildren = children(() => props.children).toArray();


    for (const element of resolvedChildren){
        console.log(element)
    }



    return(
        <InfiniteBanner>

            <For
                // @ts-ignore
                each={resolvedChildren[0]}>
                {(element,index)=>{
                    return(
                        <InfiniteBanner.Item index={index()}>
                            <Customer>
                                {element}
                            </Customer>
                        </InfiniteBanner.Item>
                    )
                }}
            </For>
        </InfiniteBanner>
    )
}