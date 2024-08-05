export const translateMarkdownToHTML = (markdown: string) => {

    return markdown.split(/\s+/).reduce((acc, curr) => {
        if(curr){
            acc += curr;
        }

        return acc;
    }, '')
}
