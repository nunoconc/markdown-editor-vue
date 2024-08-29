import { elementMarkdowns, lineMarkdowns, type MarkdownSyntax } from '../types/markdownTypes';


function replaceLineSyntax(value: string): string {
    let result = value;

    const lineElement = lineMarkdowns.find((element) => {
        const results = element.start.exec(result);

        if(!!results?.length) {
            return element;
        }
    })

    if(lineElement) {
        result = result.replace(lineElement.start, lineElement.tag.open) + lineElement.tag.close;
    }

    return result;
}

function replaceElementSyntax(element: MarkdownSyntax, value: string): string {
    let result = value;

    result = result.replace(element.start, element.tag.open); 
    result = result.replace(element.end!, element.tag.close); 

    return result;
}

export const translateMarkdownToHTML = (markdown: string) => {

    return markdown.split(/\n/).reduce((acc, curr) => {
        let row = curr;
        
        // Adding line syntax, only one per line
        row = replaceLineSyntax(row);

        // Adding element syntax, loop for multiple in the same row
        elementMarkdowns.forEach((element) => {
            const n = element.start.exec(row)?.length || 0;

            for(let i = 0; i <= n; ++i) {
                row = replaceElementSyntax(element, row);
            }
        })

        return `${acc}<p/>${row}`;
    }, '')
}
