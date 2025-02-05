import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Plugin API',
        anchor: '#plugin-api',
        children: [
            {
                name: 'APIs',
                anchor: '#apis',
                children: [
                    {
                        name: '@utility mixin',
                        anchor: '#utility',
                        children: null,
                    },
                    {
                        name: '@utility-with-body mixin',
                        anchor: '#utility-with-body',
                        children: null,
                    },
                ],
            },
            {
                name: 'Usage',
                anchor: '#usage',
                children: null,
            }
        ],
    },
];
