import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { InternalLink } from '../../../layouts/components/link';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { VersionTag } from '../../../layouts/components/tag';
import Link from 'next/link';

export const PseudoVariantsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Pseudo Variants</title>
            </Head>
            <div>
                <section className="padtop" id="pseudo-variants">
                    <div className="content">
                        <Headline title="Pseudo Variants" link="#pseudo-variants" />
                        <div className="divider"></div>
                        <VersionTag version="0.8.0" />

                        <p>
                            The pseudo-variant{' '}
                            <Link href={`../getting-started/configuration`}>
                                <a className="u u-LR">configuration</a>
                            </Link>{' '}
                            is used to tell Cirrus which classes to generate to apply on different CSS pseudo-classes.
                            Below is an example of how you can change which pseudo-variants are generated.
                        </p>

                        <CodeBlock
                            language="scss"
                            code={`/*
    Below are all possible values you can use to configure pseudo-variants:
        - 'responsive',
        - 'dark', 'light',
        - 'reduce-motion',
        - 'first-of-type',
        - 'last-of-type',
        - 'portrait', 'landscape',
        - 'hover', 'group-hover',
        - 'focus', 'group-focus', 'focus-visible', 'focus-within',
        - 'active',
        - 'visited',
        - 'checked',
        - 'disabled'
*/
@use "cirrus-ext" with (
    $config: (
        pseudo-variants: (
            FLEX: ('responsive'), // Generates sm:u-flex, md:u-flex, lg:u-flex, xl:u-flex, sm:u-flex-column, etc.
            OPACITY: ('group-hover', 'hover', 'group-focus', 'focus', 'active'), // Generates hover:u-opacity-0, focus:u-opacity-0, etc.
            ...
        ),
    ),
);`}
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>responsive</code> pseudo-variant is used to generate classes with the{' '}
                            <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code> prefixes. These will
                            apply select styles based on the current viewport.
                        </p>
                        <p>
                            You can read more about it in the{' '}
                            <Link href={`./viewports`}>
                                <a className="u u-LR">Viewports</a>
                            </Link>{' '}
                            docs.
                        </p>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="u-flex u-flex-column md:u-flex-row">
    ...                
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .u-flex,
        .u-flex-column,
        .md\\:u-flex-row;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="dark-light">
                    <div className="content">
                        <Headline title="Dark/Light" link="#dark-light" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>dark</code> and <code>light</code> pseudo-variants generate class variations that
                            apply for <code>prefers-color-scheme: dark</code> and{' '}
                            <code>prefers-color-scheme: light</code> respectively.
                        </p>
                        <p>
                            By default, all classes with the <code>light:</code> prefix will apply even with no{' '}
                            <code>prefers-color-scheme</code> value set.
                        </p>

                        <h6 className="font-normal">Dark</h6>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="text-black dark:text-gray-100">
...                
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .text-black,
        .dark\\:text-gray-100;
}`}
                        />
                        <div className="space"></div>

                        <h6 className="font-normal">Light</h6>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="text-white light:text-black">
...                
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .text-black,
        .light\\:text-white;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="reduce-motion">
                    <div className="content">
                        <Headline title="Reduce Motion" link="#reduce-motion" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>reduce-motion</code> pseudo-variant generates class variations that apply for{' '}
                            <code>prefers-reduced-motion</code> to apply styles that minimize non-essential motions.
                        </p>
                        <p>
                            In the example below, we have styles for an animated class that has no duration for users
                            that have reduced motion enabled.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="animated ping reduce-motion:duration-0">
...                
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .animated,
        .ping,
        .reduce-motion\\:duration-0;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="first-last-of-type">
                    <div className="content">
                        <Headline title="First/Last of Type" link="#first-last-of-type" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>first-of-type</code> and <code>last-of-type</code> pseudo-variants generate class
                            variations that apply on the first and last child elements respectively.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="first-of-type:text-red-700 last-of-type:text-green-700">
    <p>I am red</p>
    <p>I am the foreground color</p>
    <p>I am green</p>
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .first-of-type\\:text-red-700,
        .last-of-type\\:text-green-700;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="portrait-landscape">
                    <div className="content">
                        <Headline title="Portrait/Landscape" link="#portrait-landscape" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>portrait</code> and <code>landscape</code> pseudo-variants generate class
                            variations that apply on the portrait and landscape device orientations respectively.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="u-flex portrait:u-flex-column landscape:u-flex-row">
    ...
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .u-flex
        .portrait\\:u-flex-column,
        .landscape\\:u-flex-row;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="hover-group-hover">
                    <div className="content">
                        <Headline title="Hover/Group Hover" link="#hover-group-hover" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>hover</code> pseudo-variant generates class variations that apply when an element
                            is hovered.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="bg-gray-000 hover:bg-gray-200">
    ...
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .bg-gray-000
        .hover\\:bg-gray-200;
}`}
                        />
                        <div className="space"></div>

                        <p>
                            To apply a style when hovering a parent/encompassing element, we can use the{' '}
                            <code>group-hover</code> pseudo-variants. We just need to add the <code>group</code> class
                            to the parent element and the <code>group-hover:</code> styles to the child elements we want
                            to update.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="group">
   <div class="group-hover:u-opacity-90"></div> 
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.child {
    @extend
        .hover\\:u-opacity-90;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="focus-group-focus">
                    <div className="content">
                        <Headline title="Focus/Group Focus" link="#focus-group-focus" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>focus</code> pseudo-variant generates class variations that apply when an element
                            is focused.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<input class="focus:bg-blue-100">
    ...
</input>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .focus\\:bg-blue-100;
}`}
                        />
                        <div className="space"></div>

                        <p>
                            To apply a style when focusing a parent/encompassing element, we can use the{' '}
                            <code>group-focus</code> pseudo-variants. We just need to add the <code>group</code> class
                            to the parent element and the <code>group-focus:</code> styles to the child elements we want
                            to update.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="group">
   <div class="group-focus:p-2"></div> 
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.child {
    @extend
        .group-focus\\:p-2;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="focus-visible">
                    <div className="content">
                        <Headline title="Focus Visible" link="#focus-visible" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>focus-visible</code> pseudo-variant generates class variations that apply on
                            elements when the focus ring is visible.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<select class="focus-visible:u-border-2 border-green-600">
...                
</select>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .border-green-600,
        .focus-visible\\:border-green-600;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="focus-within">
                    <div className="content">
                        <Headline title="Focus Within" link="#focus-within" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>focus-within</code> pseudo-variant generates class variations that apply on
                            elements when the element or any of its children are focused.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<select class="focus-visible:u-border-2 border-green-600">
...                
</select>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .border-green-600,
        .focus-visible\\:border-green-600;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="active">
                    <div className="content">
                        <Headline title="Active" link="#active" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>active</code> pseudo-variant generates class variations that apply on elements
                            that are active (typically while the mouse is actively clicking on an element).
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<div class="bg-teal-100 active:u-shadow-md">
...                
</div>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .border-teal-100,
        .active\\:u-shadow-md;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="visited">
                    <div className="content">
                        <Headline title="Visited" link="#visited" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>visited</code> pseudo-variant generates class variations that typically apply on{' '}
                            <code>a</code> and <code>area</code> elements.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<a href="#" class="visited:text-pink-600">
...                
</a>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .visited\\:text-pink-600;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="checked">
                    <div className="content">
                        <Headline title="Checked" link="#checked" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>checked</code> pseudo-variant generates class variations that typically apply on{' '}
                            <code>&lt;input type="radio"&gt;</code>, <code>&lt;input type="checkbox"&gt;</code>, and{' '}
                            <code>option</code> elements for the checked state.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<input name="origin" type="radio" value="google" checked class="checked:u-opacity-100">
...                
</input>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .checked\\:u-opacity-100;
}`}
                        />
                    </div>
                </section>

                <section className="padtop" id="disabled">
                    <div className="content">
                        <Headline title="Disabled" link="#disabled" size="4" />
                        <div className="divider"></div>

                        <p>
                            The <code>disabled</code> pseudo-variant generates class variations that applies on the
                            disabled state of elements.
                        </p>
                        <CodeBlock
                            language="htmlbars"
                            code={`<input id="name" name="name" type="text" class="text-white disabled:bg-gray-600">
...                
</input>`}
                        />
                        <CodeBlock
                            language="scss"
                            code={`.foo {
    @extend
        .text-white,
        .disabled\\:bg-gray-600;
}`}
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                    nextLink={{
                        name: 'Viewports',
                        link: './viewports',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PseudoVariantsPage);
