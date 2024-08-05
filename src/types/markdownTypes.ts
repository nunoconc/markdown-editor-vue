enum SyntaxCategories {
    'ELEMENT',
    'LINE',
    'GROUP',
    'BLOCK',
}

export interface MarkdownSyntax {
    [key: string]: {
        category: SyntaxCategories.ELEMENT
            | SyntaxCategories.LINE
            | SyntaxCategories.GROUP
            | SyntaxCategories.BLOCK,
        tag: {
            open: string,
            close: string,
        }
        end: string,
    };

}

export const markdownSyntaxList : MarkdownSyntax = {
    '#': {
        category: SyntaxCategories.ELEMENT,
        tag: {
            open: '<h1>',
            close: '</h1>',
        },
        end: '\n',
    },
    '##': {
        category: SyntaxCategories.ELEMENT,
        tag: {
            open: '<h2>',
            close: '</h2>',
        },
        end: '\n',
    },
    '###': {
        category: SyntaxCategories.ELEMENT,
        tag: {
            open: '<h3>',
            close: '</h3>',
        },
        end: '\n',
    }
}
