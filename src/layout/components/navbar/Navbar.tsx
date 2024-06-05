import Logo from "/simvicus_logo_website.webp";
import { type Component, For} from "solid-js";
import { ThemeToggle } from "./componenents/ThemeToggle";
import { NavbarLinks } from "./links";
import {
    image_wrapper_style,
    navbar_link_style,
    navbar_style,
    navbar_wrapper_style,
} from "./styles.css";
import {A} from "@solidjs/router";
import {Link} from "@kobalte/core/link";
export const Navbar: Component = () => {
    return (
        <nav class={navbar_style}>
            <div class={image_wrapper_style}>
                <img src={Logo} alt="Logo" width="150" height="50" />
            </div>
            <div class={navbar_wrapper_style}>
                <For each={NavbarLinks}>
                    {(link)=>
                        <Link class={navbar_link_style} href={link.href}>
                            {link.name}
                        </Link>
                    }

                </For>


                <ThemeToggle />
            </div>
        </nav>
    );
};
