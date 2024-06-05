import type { ParentComponent } from "solid-js";
import { githubPagesLinkHelper } from "../../../../../../../utils/githubPagesLinkHelper";
import {
    blank_link,
    card_container,
    card_date,
    card_description,
    card_image,
    card_image_,
    card_title,
} from "./styles.css";

type Props = {
    imageUrl: string;
    href: string;
};
export const NewsCard: ParentComponent<Props> = (props) => {
    return (
        <a class={blank_link} href={githubPagesLinkHelper(props.href)}>
            <div class={card_container}>
                <div class={card_image}>
                    <img
                        src={githubPagesLinkHelper(props.imageUrl)}
                        class={card_image_}
                        width="100%"
                        height="100%"
                        alt="news image"
                    />
                </div>

                <div class={card_title}>

                </div>

                <div class={card_date}>

                </div>
                <div class={card_description}>
                   
                </div>
            </div>
        </a>
    );
};
