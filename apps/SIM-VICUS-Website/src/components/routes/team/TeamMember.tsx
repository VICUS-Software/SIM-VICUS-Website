import {Component, Show} from "solid-js";
import {footer_link} from "~/layout/components/footer/styles.css.ts";
import {border, card, card_h2, card_p, fa, icons, imageUrl} from "./sytles.css.ts";
import {assignInlineVars} from "@vanilla-extract/dynamic";


export type TeamMemberProps = {
    index:number,
    title:string,
    name:string,
    expertise:string,
    description:string,
    github?:string
    linkedIn?:string
    image?:string
}
export const TeamMember:Component<TeamMemberProps> = (props)=> {
    return(
    <div style={{
        "background-image":`url(${props.image})`
    }} class={card}>
        <div class={border}>
            <h2 class={card_h2}>
                {props.title} <br/> {props.name}
            </h2>
            <p class={card_p}>
                {props.expertise}
                <br/>
                {props.description}
            </p>
            <div class={icons}>
                <Show when={props.github}>
                <a class={footer_link} href={props.github}>
                <i class={fa}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        />
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                    </svg>
                </i>
                </a>
                </Show>
                <Show when={props.linkedIn}>
                <a class={footer_link} href={props.linkedIn}>
                <i class={fa}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        />
                        <path
                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
                        <path d="M8 11l0 5"/>
                        <path d="M8 8l0 .01"/>
                        <path d="M12 16l0 -5"/>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
                    </svg>
                </i>
                </a>
                </Show>
            </div>
        </div>
    </div>
    )
}