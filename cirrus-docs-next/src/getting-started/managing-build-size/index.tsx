import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { VersionTag } from '../../../layouts/components/tag';
import { BuildSizeTable } from '../../../layouts/components/build-size-table';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink, InternalLink } from '../../../layouts/components/link';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ConfigurationPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Managing Build Size</title>
            </Head>
            <div>
                <section id="managing-build-size" className="padtop">
                    <div className="content">
                        <Headline title="Managing Build Size" link="#managing-build-size" />
                        <div className="divider"></div>
                        <VersionTag version='0.8.0' text='Updated' />
                        <p>
                            Since Cirrus is built with customization in mind, it makes sense for the framework to allow
                            features to be enabled, disabled, or modified. One of the pain point for some CSS frameworks
                            is its size. Cirrus by no means is a hefty CSS framework, but reduction in file size would
                            help improve page speeds on slower connections and smaller devices.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="file-size">
                    <div className="content">
                        <Headline title="File Size" size="4" link="#file-size" />
                        <div className="divider"></div>
                        <p>As of now, the different builds of Cirrus clock in at the following sizes:</p>
                        <BuildSizeTable />

                        <p>
                            Cirrus comes in 2 preset builds that cover the requirements of most users to balance the
                            tradeoffs between build size and feature set. You can read more about the differences
                            between these builds in the{' '}
                            <InternalLink url="/getting-started/developing">development guide</InternalLink>.
                        </p>

                        <p>
                            Some developers, however, may require a granular way to toggle which classes are generated
                            and which are not to remove as much unused classes as possible. There are virtually hundreds
                            of ways to customize your build of Cirrus through the config file. The docs below goes over
                            all the ways you can manage your file size when building Cirrus for your project.
                        </p>

                        <p>
                            In short,{' '}
                            <b>it is recommended to remove as many unused styles as possible for optimal performance</b>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="purge-css">
                    <div className="content">
                        <Headline title="Using Purge CSS" size="4" link="#purge-css" />
                        <div className="divider"></div>
                        <p>
                            For a quick way to drastically reduce the amount of unused CSS classes, you can use
                            third-party tools like <b>PurgeCSS</b> to tree-shake unused Cirrus styles in your project.
                            Applying minification on top of the CSS file after purging would further decrease the file
                            size. Out of all the methods described on this page, this would yield the smallest file
                            size.
                        </p>
                        <p>
                            To find out how to integrate this into Cirrus and your project, check out the{' '}
                            <ExternalLink url="https://purgecss.com/">PurgeCSS docs</ExternalLink>.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-alt font-normal">Example Webpack Configuration</h6>
                        <CodeBlock language='js' code={`// webpack.config.js
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

module.exports = {
    // ...
    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src') + '/**/*', { nodir: true }),
        }),
    ],
    // ...
};`} />
<div className="space"></div>
                        
                        <h6 className="font-alt font-normal">Example Gulp Configuration</h6>
                        <CodeBlock language='js' code={`// gulp.js
const purgeCss = require('gulp-purgecss')
gulp.task('purge-css', () => {
    return gulp.src('./node-modules/cirrus-ui/dist/cirrus.min.css')
    .pipe(purgeCss({
        content: [
            'src/views/**/**/*.html',
            'src/views/**/**/*.js',
            'src/views/**/**/*.vue'
        ],
        defaultExtractor: content => content.match(/[w-/:()]+(?<!:)/g) || [],
        // Add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
        whitelistPatterns: []
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/assets/css'))
});`} />
<div className="space"></div>

                        <h6 className="font-alt font-normal">Note Before Use</h6>
                        <p>
                            If you are using front-end frameworks like React, Angular, Vue, etc., <b>PurgeCSS</b> will
                            not dynamically analyze and evaluate your template code to determine which classes to keep
                            and which to toss out. PurgeCSS simply checks to see if the class name appears in it its
                            entirety within the file. If it does, it will skip removing the class.
                        </p>
                        <p>
                            What this means is that if you do dynamically generate your class names,{' '}
                            <b>
                                make sure that all class names you intend to use are in its whole form and not broken
                                up/concatenated
                            </b>
                            . PurgeCSS won't be able to match for those class names and will unintentionally purge them
                            from your stylesheets.
                        </p>
                        <div className="space"></div>

                        <p className="lead font-bold">❌ Do not fragment the class names.</p>
                        <CodeBlock
                            code={`<div className={\`text-\${isError ? 'danger' : 'success'}\`}>...</div>`}
                            language="jsx"
                        />
                        <div className="space"></div>

                        <p className="lead font-bold">✅ Write class names in its entirety.</p>
                        <CodeBlock
                            code={`<div className={isError ? 'text-danger' : 'text-success'}>...</div>`}
                            language="jsx"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabling-features">
                    <div className="content">
                        <Headline title="Disabling Features" size="4" link="#disabling-features" />
                        <div className="divider"></div>

                        <p>
                            This is perhaps one of the quickest ways to reduce your Cirrus build size. Cirrus comes with
                            different configurations with different features enabled, but you can optimize even further
                            by selecting the ones you know you will use. All of the available configuration can be
                            easily found in the <code>_config.scss</code> file.
                        </p>
                        <p>
                            In your project, import the Cirrus library and specify the enabled and disabled features
                            similar to what's shown below:
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            'ABSOLUTES',
            'OVERFLOW',
            'POSITION',
        ),
    ),
);`}
                            language="scss"
                        />

                        <p>
                            Currently, every type of class found inside the <code>components</code> and{' '}
                            <code>utils</code> folders in the{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/tree/master/src">
                                repository
                            </ExternalLink>{' '}
                            can be used inside the <code>includes</code> and <code>excludes</code> lists. The only
                            exception is the letter spacing util classes found inside <code>base/fonts.scss</code> which
                            can also be used in these lists.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="disabling-psuedo-variants">
                    <div className="content">
                        <Headline title="Disabling Pseudo Variants" size="4" link="#disabling-psuedo-variants" />
                        <div className="divider"></div>

                        <p>
                            Both the <code>cirrus-core</code> and <code>cirrus-ext</code> builds use the same pseudo-variants <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/eb3abd28282453c1b140c05fddcd8930cad6e861/src/internal/_config.scss#L79">configured</ExternalLink> for class generation, ranging from generating classes for responsive viewports to classes that apply on hover or focus. To save on build size, you can remove the ones you don't need or remove them altogether.
                        </p>
                        <p>
                            Below is a sample configuration that disables all psuedo-variant class generation.
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        pseudo-variants: (
            CLEARFIX: (),
            DISPLAY: (),
            FLEX: (),
            FLOAT: (),
            OVERFLOW: (),
            POSITION: (),
            TEXT: (),
            MARGIN-PADDING: (),
            OPACITY: (),
            BACKGROUND-OPACITY: (),
            COLOR-OPACITY: (),
            BORDER-OPACITY: (),
            WIDTHS: (),
            HEIGHTS: (),
            ZINDEX: (),
            ABSOLUTES: (),
            GAP: (),
            ROUND: (),
            SHADOWS: (),
            MIN-HEIGHT: (),
            MAX-HEIGHT: (),
            MIN-WIDTH: (),
            MAX-WIDTH: (),
            GRID: (),
            BLUR: (),
            TRANSITION-DURATION: (),
            LETTER-SPACING: (),
            LINE-HEIGHT: (),
            BORDER-WIDTH: (),
            VERTICAL-ALIGN: (),
            CURSOR: (),
            THEME-MODIFIERS: (),
        ),
    ),
);`}
                            language="scss"
                        />
                    </div>
                </section>

                <section className="padtop" id="limiting-color-palette">
                    <div className="content">
                        <Headline title="Limiting Color Palette" size="4" link="#limiting-color-palette" />
                        <div className="divider"></div>

                        <p>
                            Some classes support viewport variants where it behaves differently depending on the current
                            screen size. This
                        </p>
                        <p>
                            In your project, import the Cirrus library and specify the enabled and disabled viewports
                            similar to what's shown below:
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        colors: (
            'teal': null,
            'indigo': null,
        )
    ),
);`}
                            language="scss"
                        />
                    </div>
                </section>
                
                <section className="padtop" id="limiting-viewports">
                    <div className="content">
                        <Headline title="Limiting Viewports" size="4" link="#limiting-viewports" />
                        <div className="divider"></div>

                        <p>
                            We can limit the build size by removing some of the breakpoints that we generate classes for entirely. Note that removing too many may break some of the styles that relied on existing breakpoints to work. Therefore this is not as recommended of a setting to toggle if you're looking to save on build size.
                        </p>
                        <p>
                            In your project, import the Cirrus library and disable viewports by setting the existing viewport widths and pairs to null and specifying the ones you want in the extend section:
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        breakpoints: (
            widths: null,
            breakpoint-pairs: null,
        ),
        extend: (
            breakpoints: (
                widths: (
                    'tablets': '640px',
                    'laptops': '1024px',
                )
            )
        )
    ),
);`}
                            language="scss"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Configuration',
                        link: './developing',
                    }}
                    nextLink={{
                        name: 'Start Guide',
                        link: './start-guide',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ConfigurationPage);
