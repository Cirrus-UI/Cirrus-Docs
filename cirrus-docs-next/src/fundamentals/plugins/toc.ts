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
                        name: '@mixin utility',
                        anchor: '#utility',
                        children: null,
                    },
                    {
                        name: '@mixin utility-with-body',
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
