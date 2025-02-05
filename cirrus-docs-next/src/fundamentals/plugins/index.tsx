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
import { VersionTag } from '../../../layouts/components/tag';
import { InternalLink } from '../../../layouts/components/link';

export const PluginsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Plugin API</title>
            </Head>
            <div>
                <section id="plugin-api" className="padtop">
                    <div className="content">
                        <Headline title="Plugin API" link="#plugin-api" />
                        <div className="divider"></div>
                        <VersionTag version="0.8.0" />

                        <p>
                            Cirrus's Plugin API allows you to inject your own styles without modifying any of the source
                            code. This allows you to easily create a new build of Cirrus with your own custom styles or
                            inject it directly to your frontend application.
                        </p>
                    </div>
                </section>

                <section id="apis" className="padtop">
                    <div className="content">
                        <Headline title="APIs" link="#apis" size="4" />
                        <div className="divider"></div>
                        <p>
                            Below are the common APIs to use for generating your own classes using Cirrus's internals.
                            All of these are exposed for use, but these are the main ones to focus on.
                        </p>
                        <section id="utility" className="padtop">
                            <Headline title="@utility mixin" link="#utility" size="6" />
                            <p>
                                The <code>utility</code> mixin allows you to pass in a mapping of class name to map of
                                CSS properties and values for class generation. It also takes in many different
                                parameters to customize what and how to generate.
                            </p>
                            <CodeBlock
                                language="scss"
                                code={`/*
    Main utility for generating utility classes with different viewports, delimiters, base class names, etc.
    Example: .sm\:hover\:u-text-blue:hover { ... }

    @class-prefix {string} [config.$utility-prefix] - prefix used for generated classes. This is the first section of the class name. Can be empty.
    @delimiter {string} [config.$delimiter] - delimiter used in class name body but not for separating psuedos. Can be empty.
    @base-class-name {string} - the root of the class name. For the utility class above, 'blue' is the base class name
    @class-value-pairs {map<string, any>[]} - list of mappings that maps the variant name (e.g. 'blue') to a map of CSS properties to values
    @variants {string[]} [()] - list of strings specifying which variants to generate styles for. Possible values:
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

    @variant-delimiter {string} [config.$variant-delimiter] - delimiter used to separate the variant portion of the class. Can be empty but not advisable.
    @override {string} [config.$override] - override for CSS properties, like '!important'
*/`}
                            />

                            <p>
                                To use this API, import Cirrus and then declare your utility mixin. For documentation on
                                how to import Cirrus, check{' '}
                                <InternalLink url="/getting-started/setup#project-config">this</InternalLink> out (click the Sass/Scss
                                tab).
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
                        </section>
                        <section id="utility-with-body" className="padtop">
                            <Headline title="@utility-with-body mixin" link="#utility-with-body" size="6" />
                            <p>
                                This is the alternative API where you have a bunch of CSS rules you want to generate
                                that don't necessarily confirm with the <code>utility</code> mixin. This gives you more
                                control on generating styles with the same variants, delimiters, etc.
                            </p>
                            <p>
                                For each style/class you want to generate, you would need to use the{' '}
                                <code>inline-class-generator</code> mixin to use all the input parameters and
                                auto-generate the pseudo-variant classes (e.g. hover, responsive, etc.).
                            </p>

                            <CodeBlock
                                language="scss"
                                code={`/*
    Utility to use when generating classes with your own series of SCSS rules. This is typically used with the inline-class-generator mixin.

    @delimiter {string} [config.$delimiter] - delimiter used in class name body but not for separating psuedos. Can be empty.
    @variants {string[]} [()] - list of strings specifying which variants to generate styles for. Possible values:
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

    @variant-delimiter {string} [config.$variant-delimiter] - delimiter used to separate the variant portion of the class. Can be empty but not advisable.
    @override {string} [config.$override] - override for CSS properties, like '!important'
*/`}
                            />

                            <p>Below is an example of using this API.</p>

                            <CodeBlock
                                language="scss"
                                code={`@include generator_v2.utility-with-body(
    $variants: (
        'responsive',
        'dark',
        'hover',
        'reduce-motion',
        'group-hover',
        'group-focus',
    ),
    $override: '!important'
)
using ($props...) {
    @include generator_v2.inline-class-generator('foo', $props...) using ($config) {
        color: #fff #{map.get($config, override)};
    }
}`}
                            />
                        </section>
                        <p>
                            Again, note that you must use <code>inline-class-generator</code> to signal to Cirrus to
                            generate all the classes using the parameters you provided. You would then specify whatever
                            styles you want.
                        </p>{' '}
                        <p>
                            This most important parameter to provide is the first parameter of{' '}
                            <code>inline-class-generator</code>, which is the base class name. All other parameters are
                            provided from the surrounding <code>utility-with-body</code> mixin via <code>props...</code>
                        </p>
                        <p>This would then generate the following CSS styles:</p>
                        <CodeBlock
                            language="css"
                            code={`.foo {
    color: #fff !important;
}

.hover\\:foo:hover {
    color: #fff !important;
}

.group:hover .group-hover\\:foo {
    color: #fff !important;
}

.group:focus .group-focus\\:foo {
    color: #fff !important;
}

@media screen and (min-width: 640px) {
    .sm\\:foo {
        color: #fff !important;
    }

    .sm\\:hover\\:foo:hover {
        color: #fff !important;
    }

    .group:hover .sm\\:group-hover\\:foo {
        color: #fff !important;
    }

    .group:focus .sm\\:group-focus\\:foo {
        color: #fff !important;
    }
}
        /* ... */`}
                        />
                    </div>
                </section>

                <section id="usage" className="padtop">
                    <div className="content">
                        <Headline title="Import into Existing Sass/Scss File" link="#usage" size="4" />
                        <div className="divider"></div>
                        <p>
                            Using these APIs in an existing project's Sass/Scss files is quite simple. First, make sure
                            that Cirrus is installed on your project. If not, see instructions on how to do it{' '}
                            <InternalLink url="/getting-started/setup">here</InternalLink>.
                        </p>
                        <p>
                            Next, import Cirrus directly into your project. For documentation on how to import Cirrus,
                            check <InternalLink url="/getting-started/setup#project-config">this</InternalLink> out (click the
                            Sass/Scss tab).
                        </p>
                        <CodeBlock
                            language="scss"
                            code={`// Use any flavor of Cirrus
@use 'cirrus-ext' as *;
`}
                        />

                        <p>Then, define the utility API you want to use and the classes you want to generate.</p>

                        <CodeBlock
                            language="scss"
                            code={`@use 'cirrus-ext' as *;

@include utility(
    $base-class-name: 'bg',
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
    $variants: (
        'hover',
    ),
    $override: '!important'
);`}
                        />

                        <p>
                            Finally, run your build command or save (if you're using some monitoring job) and use the
                            styles you have just generated.
                        </p>

                        <CodeBlock language="htmlbars" code={`<div class="bg-tomato p-3 u-round-full"></div>`} />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Setup',
                        link: './setup',
                    }}
                    nextLink={{
                        name: 'Developing',
                        link: './developing',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PluginsPage);
