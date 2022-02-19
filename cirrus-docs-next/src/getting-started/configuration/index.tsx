import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { Tag } from '../../../layouts/components/tag';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink, InternalLink } from '../../../layouts/components/link';
import Link from 'next/link';

export const ConfigurationPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Configuration</title>
            </Head>
            <div>
                <section id="configuration" className="padtop">
                    <div className="content">
                        <Headline title="Configuration" link="#configuration" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />
                        <p>
                            Almost every aspect of Cirrus can be customized. You can modify existing component styles,
                            add new utility classes, turn off some default styles, and more with the brand new
                            configuration file.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="schema">
                    <div className="content">
                        <Headline title="Schema" size="4" link="#schema" />
                        <div className="divider"></div>

                        <p>
                            Before we get started on how to use Cirrus with configuration, let's talk about what the
                            configuration object is. At its core, the structure of the default configuration object is
                            shown below.
                        </p>

                        <div className="row">
                            <div className="col-6">
                                <CodeBlock
                                    code={`$default-config: (
    // Turn on/off generating viewport classes to save on size.
    viewports: (),
    // Extend all existing styles here
    extend: (),
    // Turn off certain features from being loaded. If left blank, all components are generated by default.
    excludes: (),
    // Enable certain classes to be generated. Takes precedence over $EXCLUDE.
    includes: (),

    // COMPONENTS //
    // Avatar sizes
    avatar-sizes: (...),
    ...

    // UTILITIES //
    absolute: (...),
    ...
) !default;`}
                                    language="scss"
                                />
                            </div>
                            <div className="col-6">
                                <ul className="no-bullets">
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Viewports</summary>
                                            <p>
                                                Toggle which classes should support viewport variants, such as{' '}
                                                <code>-xs</code> and <code>-lg</code>.
                                            </p>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Extend</summary>
                                            <p>Extend collection of generated classes within Cirrus.</p>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Excludes</summary>
                                            <p>Set which features should be turned off before generating CSS file.</p>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Includes</summary>
                                            <p>Set which features should be turned on before generating CSS file.</p>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Components Section</summary>
                                            <p>
                                                Contains a collection of styles that can be customized for components.
                                            </p>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="font-bold">Utilities Section</summary>
                                            <p>
                                                Contains a collection of styles used to generate utility classes. An
                                                entry can be set to null to disable classes from being genrated. This is
                                                useful for specifying your own set of classes for that property.
                                            </p>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" size="4" link="#basics" />
                        <div className="divider"></div>
                        <p>
                            The framework uses a primary configuration file in <code>_config.scss</code> to store
                            defaults. Customization is as easy as{' '}
                            <ExternalLink href="https://sass-lang.com/documentation/at-rules/use#configuration">
                                loading a module with configuration
                            </ExternalLink>{' '}
                            as shown below:
                        </p>
                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            ABSOLUTES,
        ),
        opacity: null, // Disable default opacity classes
        extend: (
            // Add your own
            opacity: (
                25: .25,
                50: .5,
                75: .75,
            )
        )
    ),
);`}
                            language="scss"
                        />
                        <div className="space space--lg"></div>

                        <p>
                            The <code>with</code> keyword allows us to pass in the <code>$config</code> object we want
                            to use when generating the classes. The <code>*</code> simply allows us to reference all{' '}
                            <ExternalLink url="https://sass-lang.com/documentation/at-rules/forward">
                                forwarded
                            </ExternalLink>{' '}
                            members within the framework after the <code>@use</code> statement.
                        </p>

                        <p>
                            All mixins, functions, etc. from the{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/tree/master/src/internal">
                                internal
                            </ExternalLink>{' '}
                            folder are forwarded so you can use them without additional imports.
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (...);

// Example use of Cirrus internal APIs
@screen-above($md) {
    .my-class {
        background-color: rgba(#{hex-to-rgb(fill('blue', '600'))}, .25);
    }
}`}
                            language="scss"
                        />
                    </div>
                </section>

                <section className="padtop" id="viewports">
                    <div className="content">
                        <Headline title="Viewports" size="4" link="#viewports" />
                        <div className="divider"></div>
                        <p>
                            The <code>viewport</code> field is used to set generating viewports for classes on and off.
                            You can turn off some of the already enabled viewport classes to same on memory if needed.
                        </p>
                        <p>
                            A <InternalLink url="/fundamentals/viewports">viewport</InternalLink> variant is simply a
                            variation of an existing class suffixed with a breakpoint, which follows the pattern{' '}
                            <code>(class)-[xs|sm|md|lg|xl]</code>.
                        </p>
                        <p>
                            For instance, if I enable the viewport variants for flex, then every flexbox associated
                            utility class will also have viewport variant classes as well.
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        viewports: (
            'FLEX': true
        ),
    )
);`}
                            language="scss"
                        />
                        <CodeBlock
                            code={`.u-flex-column { ... }

@media screen and (min-width: 640px) {
    .u-flex-column-sm { ... }
}
@media screen and (min-width: 768px) {
    .u-flex-column-md { ... }
}
...`}
                            language="css"
                        />

                        <p>
                            A full list of the supported flags can be found{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/47b672b9f406cba27ca38fa00add9c3c0910206e/src/internal/_config.scss#L34">
                                here
                            </ExternalLink>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="extend">
                    <div className="content">
                        <Headline title="Extend" size="4" link="#extend" />
                        <div className="divider"></div>
                        <p>
                            The <code>extend</code> field is used to <b>generate additional classes</b> or{' '}
                            <b>override defaults</b> within the framework. For instance, I can add additional utility
                            classes I want to generate for <code>colors</code> in this entry.
                        </p>
                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            semantic: (
                'primary': #0066FF,
                'midnight': '#121062',
            )
        )
    )
);`}
                            language="scss"
                        />
                        <p>This config change will do 2 things:</p>
                        <ol>
                            <li>
                                Override the default <code>primary</code> color with <code>#0066FF</code>.
                            </li>
                            <li>
                                Add a new color called <code>midnight</code>.
                            </li>
                        </ol>
                        <p>Cirrus will then generate the following classes.</p>
                        <CodeBlock
                            code={`.bg-primary { background-color: #0066FF !important; }
.text-primary { color: #0066FF !important; }
...
.bg-midnight { background-color: #121062 !important; }
.text-midnight { color: #121062 !important; }
...`}
                            language="css"
                        />
                        <p>
                            A full list of the supported extend entries can be found{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/47b672b9f406cba27ca38fa00add9c3c0910206e/src/internal/_config.scss#L59">
                                here
                            </ExternalLink>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="clearing-defaults">
                    <div className="content">
                        <Headline title="Clearing Default Settings" size="4" link="#clearing-defaults" />
                        <div className="divider"></div>

                        <p>
                            To clear defaults defined in Cirrus's default configuration, all we need to do is set the
                            value of the classes you want to disable generation of defaults for to <code>null</code>.
                            The example below replaces all the old semantic colors with a custom defined set of colors.
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        semantic: null,
        extend: (
            // Replace with custom colors
            semantic: (
                'white': '#ffffff',
                'purple': '#3f3cbc',
                'midnight': '#121062',
                'metal': '#565684',
                'tahiti': '#3ab7cf',
                'silver': '#ececff',
                'bubble-gum': '#ff77d9',
                'bermuda': '#73dcca',
            )
        )
    )
);`}
                            language="scss"
                        />

                        <CodeBlock
                            code={`.bg-white { ... };
.bg-purple { ... };
.bg-midnight { ... };
...`}
                            language="css"
                        />
                    </div>
                </section>

                <section className="padtop" id="excludes">
                    <div className="content">
                        <Headline title="Excludes" size="4" link="#excludes" />
                        <div className="divider"></div>
                        <p>
                            The <code>excludes</code> field is used to <b>disable features in Cirrus</b>. For instance,
                            if I add <code>'AVATAR'</code> in this list, then Cirrus will skip generating all classes
                            associated with the Avatar component.
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            'AVATAR'
        )
    )
);`}
                            language="scss"
                        />

                        <p>
                            Note that there is a special keyword, <code>'ALL'</code>, that would disable generation of
                            all classes that are not within the{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/tree/master/src/base">
                                base
                            </ExternalLink>{' '}
                            folder.
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            'ALL'
        )
    )
);`}
                            language="scss"
                        />

                        <p>
                            A full list of the supported feature flags to exclude can be found{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/51eaa19fe9f38acb3f91e69ae55dc90cf8135e8d/src/internal/_flags.scss">
                                here
                            </ExternalLink>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="includes">
                    <div className="content">
                        <Headline title="Includes" size="4" link="#includes" />
                        <div className="divider"></div>
                        <p>
                            The <code>includes</code> field is used to <b>enable features in Cirrus</b>. This can happen
                            if you were extending from a custom configured version of Cirrus that disabled some things
                            you wanted to have. For instance, if I add <code>'AVATAR'</code> in this list, then Cirrus
                            will generate all classes associated with the Avatar component.
                        </p>
                        <CodeBlock
                            code={`@use "cirrus-with-avatar-off" as * with (
    $config: (
        includes: (
            'AVATAR'
        )
    )
);`}
                            language="scss"
                        />

                        <p>
                            Another use case is if we decide to turn off all features except for a couple. The{' '}
                            <code>includes</code> field is applied after Cirrus process <code>excludes</code>.
                        </p>
                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: ( 'ALL' ), // Disable everything not in base folder
        includes: (
            'AVATAR' // Only enable AVATAR component
        )
    )
);`}
                            language="scss"
                        />

                        <p>
                            Note that there is a special keyword, <code>'ALL'</code>, that would enable generation of
                            all classes supported for that build (.e.g. core vs ext).
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-with-some-features-off" as * with (
    $config: (
        includes: (
            'ALL'
        )
    )
);`}
                            language="scss"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Developing',
                        link: './developing',
                    }}
                    nextLink={{
                        name: 'Managing Build Size',
                        link: './managing-build-size',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ConfigurationPage);
