
export function githubPagesLinkHelper(linkName:string):string{
    if (import.meta.env.GITHUBPAGES){
        if(linkName==""){
            return `/SIM-VICUS-Website`
        }
        return `/SIM-VICUS-Website/${linkName}`
    }
    return `/${linkName}`
}