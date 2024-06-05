import { githubPagesLinkHelper } from "~/utils/githubPagesLinkHelper.ts";

type Link = {
    name: string;
    href: string;
};

export const NavbarLinks: Link[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "News",
        href: githubPagesLinkHelper("news"),
    },
    {
        name: "Features",
        href: githubPagesLinkHelper("features"),
    },
    {
        name: "Schulungen",
        href: githubPagesLinkHelper("training"),
    },
    {
        name: "Team",
        href: githubPagesLinkHelper("team")
    },
    {
        name: "Support und Lizenz",
        href: "support",
    },
];
