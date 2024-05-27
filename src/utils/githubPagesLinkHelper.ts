
export function githubPagesLinkHelper(linkName:string):string{
    if (import.meta.env.GITHUBPAGES|| process.env.GITHUBPAGES =="true"){

        return `/SIM-VICUS-Website/${linkName}`
    }
    return `/${linkName}`
}