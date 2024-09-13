import { blockMarkdowns, breakMarkdowns, elementMarkdowns, lineMarkdowns, type MarkdownSyntax } from '../types/markdownTypes';



function replaceBreakSyntax(value: string): string {
    let result = '';

    const breakElement = breakMarkdowns.find((element) => {
        const results = element.start.exec(value);

        if(!!results?.length) {
            return element;
        }
    })

    if(breakElement) {
        result = value.replace(breakElement.start, breakElement.tag.open);
    }

    return result;
}

function replaceLineSyntax(value: string): string {
    let result = '';

    const lineElement = lineMarkdowns.find((element) => {
        const results = element.start.exec(value);

        if(!!results?.length) {
            return element;
        }
    })

    if(lineElement) {
        result = `<br> ${value.replace(lineElement.start, lineElement.tag.open)}${lineElement.tag.close}`;
    }

    return result;
}

function replaceElementSyntax(element: MarkdownSyntax, value: string): string {
    let result = value;

    result = result.replace(element.start, element.tag.open); 
    if(element.end) {
        result = result.replace(element.end, element.tag.close); 
    }

    return result;
}

function replaceBlockSyntax(value: string): { result: string, blockElement: MarkdownSyntax | undefined } {
    let result = '';

    const blockElement = blockMarkdowns.find((element) => {
        const results = element.start.exec(value);

        if(!!results?.length) {
            return element;
        }
    })

    if(blockElement) {
        result = value.replace(blockElement.start, blockElement.tag.open)
    }

    return {
        result,
        blockElement,
    };
}

export const translateMarkdownToHTML = (markdown: string) => {

    return markdown.split(/\n/).reduce(({acc, oldBlock}, curr) => {
        let row = curr;
        let parapragh = row.replace('\s', '') === '';

        //Adding break syntax, unique in line
        const breakReplaceRow = replaceBreakSyntax(row);
        if(breakReplaceRow) {
            row = breakReplaceRow;
        }

        // Adding line syntax, only one per line
        const lineReplaceRow = replaceLineSyntax(row);   
        if(lineReplaceRow) {
            row = lineReplaceRow;
        }   

        // Adding block syntax, multiple in block 
        const { result, blockElement } = replaceBlockSyntax(row);
        
         
        if(result && blockElement) {
            row = breakMarkdowns || lineReplaceRow ? result : result + blockElement.tag.close;
            parapragh = blockElement?.key === 'quote';
        }

        if(!oldBlock && blockElement) {
            row = blockElement.groupTag?.open + row;
            parapragh = false;
            oldBlock = blockElement;
        }

        if(!blockElement && oldBlock) {
            row = oldBlock.groupTag?.close + row;
            parapragh = false;
            oldBlock = undefined;
        }

        // Adding element syntax, loop for multiple in the same row
        elementMarkdowns.forEach((element) => {
            const n = element.start.exec(row)?.length || 0;

            for(let i = 0; i < n; ++i) {
                row = replaceElementSyntax(element, row);
            }
        })

        return {
            acc: `${acc}${parapragh ? '<br>' : ''}${row}`,
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
