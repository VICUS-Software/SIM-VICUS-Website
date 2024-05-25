
export function githubPagesLinkHelper(linkName:string):string{
    if (import.meta.env.GITHUBPAGES){
        return `/SIM-VICUS-Website/${linkName}`
    }
    return `/${linkName}`
}