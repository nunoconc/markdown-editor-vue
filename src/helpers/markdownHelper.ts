import { blockMarkdowns, elementMarkdowns, lineMarkdowns, type MarkdownSyntax } from '../types/markdownTypes';


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

function replaceBlockSyntax(value: string): { result: string, blockElement: MarkdownSyntax | undefined } {
    let result = value;

    const blockElement = blockMarkdowns.find((element) => {
        const results = element.start.exec(result);

        if(!!results?.length) {
            return element;
        }
    })

    if(blockElement) {
        result = result.replace(blockElement.start, blockElement.tag.open) + blockElement.tag.close;
    }

    return {
        result,
        blockElement,
    };
}

export const translateMarkdownToHTML = (markdown: string) => {

    return markdown.split(/\n/).reduce(({acc, oldBlock}, curr) => {
        let row = curr;
        let parapragh = true;
        
        // Adding line syntax, only one per line
        row = replaceLineSyntax(row);


        // Adding block syntax, multiple in block 
        const { result, blockElement } = replaceBlockSyntax(row);
        
        if(result) {
            row = result;
            parapragh = blockElement?.key === 'quote';
        }

        if(!oldBlock && blockElement) {
            row = blockElement.groupTag?.open + row;
            oldBlock = blockElement;
            parapragh = false;
        }

        if(!blockElement && oldBlock) {
            row = row + oldBlock.groupTag?.close;
            parapragh = false;
            oldBlock = undefined;
        }

        // Adding element syntax, loop for multiple in the same row
        elementMarkdowns.forEach((element) => {
            const n = element.start.exec(row)?.length || 0;

            for(let i = 0; i <= n; ++i) {
                row = replaceElementSyntax(element, row);
            }
        })

        return {
            acc: `${acc}${parapragh ? '<p></p>' : ''}${row}`,
            oldBlock,
        }
        
    }, {
        acc: '',
        oldBlock: undefined,
    } as {
        acc: string,
        oldBlock: MarkdownSyntax | undefined,
    }).acc;
}
