
export function githubPagesLinkHelper(linkName:string):string{
    if (import.meta.env.GITHUBPAGES|| process.env.GITHUBPAGES){

        return `/${linkName}`
    }
    return `/${linkName}`
}