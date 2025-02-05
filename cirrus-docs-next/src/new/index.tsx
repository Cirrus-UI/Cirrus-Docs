import React, { useEffect } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../layouts/components/toc';
import { Headline } from '../../layouts/components/headline';
import { CodeBlock } from '../../layouts/components/codeblock';
import { DefaultLayout } from '../../layouts/default';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX, VERSION } from '../../constants';
import { ECommerceCard } from '../index/components';
import { InternalLink } from '../../layouts/components/link';
import { v2 } from '../fundamentals/colors/color-config';

export const NewPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} What's New?</title>
            </Head>
            <div>
                <section id="whats-new" className="padtop">
                    <div className="content">
                        <Headline title="What's New in 0.8.0?" link="#whats-new" />
                        <div className="divider"></div>

                        <p>
                            There are a plethora of new changes in 0.8.0, especially with class syntax and overall class
                            generation. This update focuses on revamping the whole class generation engine and
                            addressing other issues that existed in 0.7.x.
                        </p>

                        <p>
                            There are a ton of things that were added in this new update, but below are a few big ones I
                            want to highlight. For a full list, please visit the{' '}
                            <InternalLink url="/getting-started/release-notes">release notes</InternalLink> to learn
                            more.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="syntax">
                    <div className="content">
                        <Headline size="4" title="Class syntax changes" link="#syntax" />
                        <div className="divider"></div>
                        <p>
                            One of the most confusing things about the previous versions of Cirrus was the syntax used
                            for specifying viewports for applying classes. There were a total of 3 ways of specifying
                            this. Starting with this update, all of these will be unified to a single syntax:{' '}
                            <code>[sm|md|lg|xl]:classname</code>. This will be the case for all classes whether it is
                            for columns or utility classes.
                        </p>
                        <p>
                            Below are the main syntax changes:
                            <ul>
                                <li>
                                    <code>col-sm-1</code> -&gt; <code>sm:col-1</code> - column classes will all have the
                                    viewport modifier prefixed at the front.
                                </li>
                                <li>
                                    <code>col-6</code> -&gt; <code>md:col-6</code> - all column classes that did not
                                    have the modifier class must be prefixed with <code>md:</code> to get the same
                                    behavior as before. This is to address the confusing implicit behavior where a class
                                    like <code>col-6</code> would have 50% width for <code>md</code> and above but 100%
                                    width for viewports below<code>`md</code>.
                                </li>
                                <li>
                                    <code>u-block-md</code> -&gt; <code>md:u-block</code> - for all utility classes, the
                                    viewport modifier will be prefixed at the front.
                                </li>
                            </ul>{' '}
                        </p>
                        <p>
                            Read more on this <InternalLink url="/fundamentals/viewports">here</InternalLink>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="pseudo">
                    <div className="content">
                        <Headline size="4" title="New pseudo-class states" link="#pseudo" />
                        <div className="divider"></div>
                        <p>
                            Pseudo-class modifiers bring you the ability to apply certain classes in Cirrus based on an
                            element's state. For instance, the <code>hover:text-white</code> pseudo-class will cause an
                            element's text color to change to white when hovered.
                        </p>
                        <p>
                            This can be used to the dynamic behavior Cirrus lacked in the prior versions -- all made
                            possible by the revamps made to Cirrus's class generation engine.
                        </p>

                        <p>
                            Class generator now supports many more variants (pseudos):
                            <ul>
                                <li>'responsive'</li>
                                <li>'dark', 'light'</li>
                                <li>'reduce-motion'</li>
                                <li>'first-of-type'</li>
                                <li>'last-of-type'</li>
                                <li>'portrait', 'landscape'</li>
                                <li>'hover', 'group-hover'</li>
                                <li>'focus', 'group-focus', 'focus-visible', 'focus-within'</li>
                                <li>'active'</li>
                                <li>'visited'</li>
                                <li>'checked'</li>
                                <li>'disabled'</li>
                            </ul>
                        </p>

                        <CodeBlock
                            language="scss"
                            code={`
@include generator_v2.utility(
    $base-class-name: 'text',
    $class-value-pairs: (
        'blue': (
            'color': blue,
        ),
    ),
    $variants: (
        'dark',
        'hover',
        'reduce-motion',
        'group-hover',
        'group-focus',
    ),
    $generate-viewports: true,
    $override: '!important'
);`}
                        />

                        <CodeBlock
                            language="css"
                            code={`.u-text-blue {
    color: blue !important;
}

.hover\:u-text-blue:hover {
    color: blue !important;
}

.group:hover .group-hover\:u-text-blue {
    color: blue !important;
}

.group:focus .group-focus\:u-text-blue {
    color: blue !important;
}

@media screen and (min-width: 640px) {
    .sm\:u-text-blue {
        color: blue !important;
    }

    .sm\:hover\:u-text-blue:hover {
        color: blue !important;
    }

...`}
                        />

                        <p>
                            You can configure which pseudo-class states are supported for each utility class within the
                            configuration. Read more on this{' '}
                            <InternalLink url="/fundamentals/pseudo-variants">here</InternalLink>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="class">
                    <div className="content">
                        <Headline title="Class updates" size="4" link="#class" />
                        <div className="divider"></div>
                        <p>This update introduces a few new utility classes.</p>

                        <ul>
                            <li>
                                <InternalLink url="/utils/cursor">Cursor</InternalLink> — utilities to change the cursor
                                when hovering over elements.
                            </li>
                            <li>
                                <InternalLink url="/elements/tooltips">Tooltips</InternalLink> — new{' '}
                                <code>tooltip--visible</code> class to show tooltip without hover/focus state.
                            </li>
                            <li>
                                <InternalLink url="/grid/span">Grid</InternalLink> — add missing grid-row styles{' '}
                                <code>grid-rows-</code>, <code>grid-r-</code>, <code>grid-rs-</code>, and{' '}
                                <code>grid-re-</code>.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="padtop" id="plugin-api">
                    <div className="content">
                        <Headline title="Plugin API" size="4" link="utils" />
                        <div className="divider"></div>

                        <p>
                            Cirrus now documents and exposes the <code>@utility</code> and{' '}
                            <code>@utility-with-body</code> mixins for generating your own utility classes. This helps
                            to bridge any gap that exists between your use cases and Cirrus's offerings without having
                            to wait for another update or trying to tinker with the source code itself.
                        </p>
                        <p>
                            These APIs give you the flexibility to change the class name prefix, class name, delimiters,
                            overrides, pseudo-class variants, styles to apply, etc.
                        </p>
                        <p>
                            In short, the APIs do the following:
                            <ul>
                                <li>
                                    <code>@utility</code> - specify your own utility classes with class name + CSS
                                    property pairs.
                                </li>
                                <li>
                                    <code>@utility-with-body</code> - similar to <code>@utility</code>, but allows you
                                    to specify more custom logic for class generation.
                                </li>
                            </ul>
                        </p>

                        <p>Example and explanation of each input param is listed below.</p>

                        <CodeBlock
                            language="scss"
                            code={`// Use any flavor of Cirrus
@use 'cirrus-ext' as *;

// Custom plugin example
@include utility(
    // Defaults to 'u' from config.$utility-prefix in '_config.scss' Can be empty.
    $class-prefix: 'custom',
    // Defaults to '-' from config.$delimiter in '_config.scss'. Can be empty.
    $delimiter: '-',
    // Name that comes after the $class-prefix but before $class-value-pair keys.
    // For example, this is the "bg" inside the generated class name of "custom-bg-peachpuff" in this example
    $base-class-name: 'bg',
    // Specify which styles to specify. This tells Cirrus to generate classes for "custom-bg-papayawhip", "custom-bg-peachpuff", etc.
    $class-value-pairs: (
        papayawhip: (
            background-color: papayawhip,
        ),
        peachpuff: (
            background-color: peachpuff,
        ),
        salmon: (
            background-color: salmon,
        ),
        tomato: (
            background-color: tomato,
        ),
    ),
    // Specify which variants to generate
    $variants: (
        'hover',
    ),
    // Defaults to '\\:' from config.$variant-delimiter in '_config.scss'. Can be empty but not advisable.
    $variant-delimiter: '\\:',
    // Defaults to '!important' from config.$override in '_config.scss'. Can be empty.
    $override: '!important'
);
`}
                        />

                        <p>This would generate the following classes:</p>

                        <CodeBlock
                            language="css"
                            code={`.custom-bg-papayawhip {}
.hover\\:custom-bg-papayawhip:hover {}
.custom-bg-peachpuff {}
.hover\\:custom-bg-peachpuff:hover {}

/* Etc. */`}
                        />

                        <p>
                            Read more on this <InternalLink url="/fundamentals/plugins">here</InternalLink>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="breaking">
                    <div className="content">
                        <Headline title="Other breaking changes" size="4" link="breaking" />
                        <div className="divider"></div>

                        <p><b>These breaking changes definitely deserve a callout here. Please read carefully.</b></p>

                        <ul>
                            <li>
                                New viewport syntax across all classes that support different viewports, unifying the
                                fractured viewport system.
                                <ul>
                                    <li>
                                        The main difference from before is now all viewport modifiers will use the same
                                        syntax instead of inconsistent system from before. All classes that are meant to
                                        apply at a certain viewport size and above will be in the form of{' '}
                                        <code>[sm|md|lg|xl]:classname</code>. This will be the case for all classes
                                        whether it is for columns or utility classes.
                                    </li>
                                    <li>
                                        Below are the main syntax changes:
                                        <ul>
                                            <li>
                                                <code>col-sm-1</code> -&gt; <code>sm:col-1</code> - column classes will
                                                all have the viewport modifier prefixed at the front.
                                            </li>
                                            <li>
                                                <code>col-6</code> -&gt; <code>md:col-6</code> - all column classes that
                                                did not have the modifier class must be prefixed with <code>md:</code>{' '}
                                                to get the same behavior as before. This is to address the confusing
                                                implicit behavior where a class like <code>col-6</code> would have 50%
                                                width for <code>md</code> and above but 100% width for viewports below{' '}
                                                <code>md</code>.
                                            </li>
                                            <li>
                                                <code>u-block-md</code> -&gt; <code>md:u-block</code> - for all utility
                                                classes, the viewport modifier will be prefixed at the front.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Deprecated <code>margin:1 rem 0;</code> style for <code>p, article, blockquote</code>{' '}
                                since it leads to unexpected behaviors for users
                            </li>
                            <li>Deprecating row.no-space classes</li>
                            <li>Update Modal class names for clarity</li>
                            <li>
                                Deprecated <code>.modal.small</code>
                            </li>
                            <li>Deprecating placeholder.scss</li>
                            <li>
                                Deprecated <code>.title</code> and <code>.subtitle</code> classes
                            </li>
                            <li>
                                Deprecated viewports config in favor of using 'responsive' entry in pseudo-variant
                                config
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="padtop" id="more">
                    <div className="content">
                        <Headline title="But wait, there's more" size="4" link="more" />
                        <div className="divider"></div>

                        <p>
                            Check out all the other changes in the{' '}
                            <InternalLink url="/getting-started/release-notes">release notes</InternalLink>.
                        </p>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(NewPage);
