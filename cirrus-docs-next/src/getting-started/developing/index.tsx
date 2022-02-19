import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Pagination } from '../../../layouts/components/pagination';
import { TableWrapper } from '../../../layouts/components/table-wrapper';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ExternalLink } from '../../../layouts/components/link';

export const DevelopingPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Developing</title>
            </Head>
            <div>
                <section id="developing" className="padtop">
                    <div className="content">
                        <Headline title="Developing on Cirrus" link="#developing" />
                        <div className="divider"></div>
                        <p>
                            One of the best parts of the framework is that it is open source. You can modify and extend
                            different portions of it to suit your needs.
                        </p>
                    </div>
                </section>

                <section id="overview" className="padtop">
                    <div className="content">
                        <Headline title="Overview" link="#overview" size="4" />
                        <div className="divider"></div>
                        <p>
                            The framework builds into two different flavors: <b>core</b> and <b>ext (or full)</b>.
                        </p>

                        <TableWrapper>
                            <table className="table bordered">
                                <tbody>
                                    <tr>
                                        <th>Flavor</th>
                                        <th>Normal</th>
                                        <th>Gzip</th>
                                        <th>Brotli</th>
                                    </tr>
                                    <tr>
                                        <td>Core</td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?style=flat-square" />
                                        </td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?compression=gzip&style=flat-square" />
                                        </td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?compression=brotli&style=flat-square" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ext (Full)</td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?style=flat-square" />
                                        </td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?compression=gzip&style=flat-square" />
                                        </td>
                                        <td>
                                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?compression=brotli&style=flat-square" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableWrapper>
                        <div className="space"></div>

                        <h6 className="m-0">Core</h6>
                        <p className="m-0">
                            This only contains the essential styles needed to build a project with Cirrus. It consists
                            of these components:
                        </p>
                        <ul>
                            <li>
                                <b>Buttons</b>
                            </li>
                            <li>
                                <b>Code</b>
                            </li>
                            <li>
                                <b>Default (Base)</b>
                            </li>
                            <li>
                                <b>Font</b>
                            </li>
                            <li>
                                <b>Footer</b>
                            </li>
                            <li>
                                <b>Forms</b>
                            </li>
                            <li>
                                <b>Frames</b>
                            </li>
                            <li>
                                <b>Header</b>
                            </li>
                            <li>
                                <b>Layout</b>
                            </li>
                            <li>
                                <b>Links</b>
                            </li>
                            <li>
                                <b>Lists</b>
                            </li>
                            <li>
                                <b>Media</b>
                            </li>
                            <li>
                                <b>Modal</b>
                            </li>
                            <li>
                                <b>Tables</b>
                            </li>
                            <li>
                                <b>Theme</b>
                            </li>
                            <li>
                                <b>Util</b>
                            </li>
                        </ul>
                        <p>
                            In the <code>dist</code> folder, these styles are found in the{' '}
                            <code>cirrus-core.min.css</code> file{' '}
                            <a
                                className="u u-LR"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus-core.min.css"
                            >
                                here
                            </a>
                            .
                        </p>
                        <div className="space"></div>

                        <h6 className="m-0">Ext</h6>
                        <p className="m-0">
                            This adds an extension to the framework with more styles, layouts, and{' '}
                            <b>pre-built components</b> for quick prototyping.
                        </p>
                        <ul>
                            <li>
                                <b>Animations</b>
                            </li>
                            <li>
                                <b>Avatar</b>
                            </li>
                            <li>
                                <b>Card</b>
                            </li>
                            <li>
                                <b>Form (Extended Styles)</b>
                            </li>
                            <li>
                                <b>Grid</b>
                            </li>
                            <li>
                                <b>Link (Extended Styles)</b>
                            </li>
                            <li>
                                <b>Modifiers</b>
                            </li>
                            <li>
                                <b>Pagination</b>
                            </li>
                            <li>
                                <b>Placeholder</b>
                            </li>
                            <li>
                                <b>Tabs</b>
                            </li>
                            <li>
                                <b>Tags</b>
                            </li>
                            <li>
                                <b>Tiles</b>
                            </li>
                            <li>
                                <b>Toasts</b>
                            </li>
                            <li>
                                <b>Tooltips</b>
                            </li>
                        </ul>
                        <p>
                            All these styles are combined with the <code>core</code> build in the{' '}
                            <code>cirrus.min.css</code> file in the <code>dist</code> folder{' '}
                            <a
                                className="u u-LR"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus.min.css"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="build">
                    <div className="content">
                        <Headline title="Building from Source" link="#build" size="4" />
                        <div className="divider"></div>
                        <p>Developing your own version of Cirrus is quite simple with these simple steps.</p>
                        <div className="space" />
                        <h5>Get the Source</h5>
                        <p>
                            You can clone the <b>source</b> of the project straight from Github. You can add files or
                            remove them from the <code>/src</code> directory to fit your needs.
                        </p>
                        <div className="row">
                            <a rel="nofollow" href="https://github.com/Spiderpig86/Cirrus" target="_blank">
                                <button className="btn btn-info">Source Code</button>
                            </a>
                        </div>
                        <div className="space" />
                        <h5>Building the Project</h5>
                        <p>
                            Cirrus can be modified to include only components that you will need. Since it is processed
                            with <a href="http://gulpjs.com/">Gulp</a> swapping different components in and out of your
                            distribution build is very simple.
                        </p>
                        <p>Just follow the following steps:</p>
                        <ol style={{ listStyle: 'inside' }}>
                            <li>Open the root directory in your terminal.</li>
                            <li>
                                Remember to run <code>npm install</code> to get all the necessary dependencies.
                            </li>
                            <li>
                                Modify <code>gulpfile.js</code> to add or remove components and then run{' '}
                                <code>gulp minify</code> to build the regular and minified versions.
                            </li>
                            <li>
                                These build files should appear in the <code>/dist</code> directory.
                            </li>
                        </ol>
                        <p>
                            <b>Gulp Commands</b>
                        </p>
                        <ul style={{ listStyle: 'inside' }}>
                            <li>
                                <code>gulp compile</code> - just compile the CSS without minification.
                            </li>
                            <li>
                                <code>gulp minify</code> - compile the CSS with{' '}
                                <a
                                    className="u u-LR"
                                    href="https://github.com/jakubpawlowicz/clean-css#level-2-optimizations"
                                >
                                    level 2 minification
                                </a>
                                .
                            </li>
                            <li>
                                <code>gulp watch</code> - automate compiling and minication.
                            </li>
                        </ul>
                        <div className="space" />
                    </div>
                </section>

                <section className="padtop" id="customization">
                    <div className="content">
                        <Headline title="Customization" link="#customization" size="4" />
                        <div className="divider"></div>

                        <p>Learn how to customize Cirrus itself.</p>

                        <h6>Customizing the Theme</h6>
                        <p>
                            You can find Cirrus's color palette within{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/master/src/core/theme.scss">
                                theme.scss
                            </ExternalLink>
                            . Modify and rebuild the project to use the theme you prefer.
                        </p>
                        <p>
                            For more granular control, you can modify the theme for a specific control by changing the
                            CSS variable value for that specific class. For example, the modification below changes the
                            color for all <code>*--info</code> related components to <code>#0066ff</code>.
                        </p>
                        <CodeBlock
                            code={`:root {
    /* v1 Colors */
    --cirrus-fg: #{$cirrus-fg};
    --cirrus-bg: #{$cirrus-bg};

    --cirrus-primary: #{$cirrus-primary};
    --cirrus-primary-rgb: #{hex-to-rgb($cirrus-primary)};
    --cirrus-primary-light: #{$cirrus-primary-light};

    /* ... */

    --cirrus-info: '#0066ff';

    /* ... */
}`}
                            language={'scss'}
                        />

                        <div className="space" />
                        <h6>Customizing Dimensions/Sizes</h6>
                        <p>
                            You can find Cirrus's sizing configuration within{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/master/helpers/_size.scss">
                                _size.scss
                            </ExternalLink>
                            . Modify and rebuild the project to use the sizes you prefer.
                        </p>
                        <p>The sizes specified in the file include:</p>
                        <ul>
                            <li>Spacing for padding/margin.</li>
                            <li>
                                Base size for the <code>space</code> class.
                            </li>
                            <li>Font sizes.</li>
                            <li>Grid column/row count.</li>
                            <li>Default grid column/row span.</li>
                            <li>Tab sizes.</li>
                            <li>Viewport breakpoints.</li>
                            <li>Viewport Scss utils.</li>
                        </ul>
                        <CodeBlock
                            code={`/* Spacing */
$spacing-system: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32;
$space-size: 0.5rem;

/* Fonts */
$font-size-xs: .7rem;
$font-size-s: .85rem;
$font-size-m: 1rem;
$font-size-l: 1.35rem;
$font-size-xl: 1.75rem;

/* Grid Count (Columns + Grid) */
$grid-columns: 12;

/* Grid Percents */
$grid-width: 1 / $grid-columns;

/* ... */`}
                            language={'scss'}
                        />
                    </div>
                </section>

                <section className="padtop" id="folder-structure">
                    <div className="content">
                        <Headline title="Folder Structure" link="#folder-structure" size="4" />
                        <div className="divider"></div>

                        <p>The project is organized like this:</p>
                        <CodeBlock
                            code={`.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── dist                            // Build files
│   ├── cirrus-core.css
│   ├── cirrus-core.min.css
│   ├── cirrus.css
│   └── cirrus.min.css
├── gulpfile.js
├── helpers                         // Helper Sass files/config
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _selectors.scss
│   └── _size.scss
├── img
│   └── CirrusLogo.png
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── core                        // Core build
    │   ├── button.scss
    │   ├── code.scss
    │   ├── default.scss
    │   ├── font.scss
    │   ├── footer.scss
    │   ├── forms.scss
    │   ├── frames.scss
    │   ├── header.scss
    │   ├── layout.scss
    │   ├── links.scss
    │   ├── lists.scss
    │   ├── media.scss
    │   ├── spacing.scss
    │   ├── table.scss
    │   ├── theme.scss
    │   └── utils                   // Utilities
    │       ├── clearfix.scss
    │       ├── display.scss
    │       ├── flex.scss
    │       ├── misc.scss
    │       └── position.scss
    └── ext                         // Extended styles + components
        ├── animations.scss
        ├── avatar.scss
        ├── card.scss
        ├── form-ext.scss
        ├── grid.scss
        ├── link-ext.scss
        ├── modal.scss
        ├── modifiers.scss
        ├── pagination.scss
        ├── placeholder.scss
        ├── tabs.scss
        ├── tags.scss
        ├── tiles.scss
        ├── toast.scss
        └── tooltips.scss
`}
                            language="text"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Browser Support',
                        link: './support',
                    }}
                    nextLink={{
                        name: 'Configuration',
                        link: './configuration',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(DevelopingPage);
