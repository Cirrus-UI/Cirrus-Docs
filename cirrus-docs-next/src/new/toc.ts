import { TableOfContentsEntry } from '../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: `What's New in 0.8.x?`,
        anchor: '#whats-new',
        children: [
            {
                name: 'Unified viewport syntax',
                anchor: '#syntax',
                children: null,
            },
            {
                name: 'New pseudo-class states',
                anchor: '#pseudo',
                children: null,
            },
            {
                name: 'Class updates',
                anchor: '#class',
                children: null,
            },
            {
                name: 'Plugin API',
                anchor: '#plugin-api',
                children: null,
            },
            {
                name: 'Other breaking changes',
                anchor: '#breaking',
                children: null,
            },
            {
                name: `But wait, there's more`,
                anchor: '#more',
                children: null,
            },
        ],
    },
];
