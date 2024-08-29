export enum SyntaxCategories {
    'ELEMENT',
    'LINE',
    'GROUP',
    'BLOCK',
}

export interface MarkdownSyntax {
    key: string,
    category: SyntaxCategories.ELEMENT
    | SyntaxCategories.LINE
    | SyntaxCategories.GROUP
    | SyntaxCategories.BLOCK,
    groupTag?: {
        open: string,
        close: string,
    },
    tag: {
        open: string,
        close: string,
    },
    start: RegExp,
    end?: RegExp,
};

export const markdownSyntaxList: MarkdownSyntax[] = [
    {
        key: 'header-1',
        category: SyntaxCategories.LINE,
        tag: {
            open: '<h1>',
            close: '</h1>',
        },
        start: /^#\s/,
        end: /\r\n/,
    },
    {
        key: 'header-2',
        category: SyntaxCategories.LINE,
        tag: {
            open: '<h2>',
            close: '</h2>',
        },
        start: /^##\s/,
        end: /\r\n/,
    },
    {
        key: 'header-3',
        category: SyntaxCategories.LINE,
        tag: {
            open: '<h3>',
            close: '</h3>',
        },
        start: /^###\s/,
        end: /\r\s /,
    },
    {
        key: 'bold',
        category: SyntaxCategories.ELEMENT,
        tag: {
            open: '<b>',
            close: '</b>',
        },
        start: /\*{2}/,
        end: /\*{2}/,
    },
    {
        key: 'italic',
        category: SyntaxCategories.ELEMENT,
        tag: {
            open: '<i>',
            close: '</i>',
        },
        start: /\*{1}/,
        end: /\*{1}/,
    },
    {
        key: 'quote',
        category: SyntaxCategories.BLOCK,
        tag: {
            open: '<blockquote>',
            close: '</blockquote>',
        },
        start: />\s/,
    },
    {
        key: 'unordered-list',
        category: SyntaxCategories.BLOCK,
        groupTag: {
            open: '<ul>',
            close: '</ul>',
        },
        tag: {
            open: '<li>',
            close: '</li>',
        },
        start: /-\s/,
    },
    {
        key: 'ordered-list',
        category: SyntaxCategories.BLOCK,
        groupTag: {
            open: '<ol>',
            close: '</ol>',
        },
        tag: {
            open: '<li>',
            close: '</li>',
        },
        start: /\d\.\s/,
    }
]


export const lineMarkdowns = markdownSyntaxList.filter((value) => value.category === SyntaxCategories.LINE);
export const elementMarkdowns = markdownSyntaxList.filter((value) => value.category === SyntaxCategories.ELEMENT);

