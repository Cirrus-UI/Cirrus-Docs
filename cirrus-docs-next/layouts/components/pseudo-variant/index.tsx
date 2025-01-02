import React from 'react';
import { PseudoVariantsEnum } from '../../../models/psuedo-variant';
import { InternalLink } from '../link';
import { VersionTag } from '../tag';

export interface PseudoVariantProps {
    defaultEnabledPseudos: PseudoVariantsEnum[];
}

export const PseudoVariant: React.FC<any> = (props: PseudoVariantProps) => {
    const PSEUDO_VARIANTS = [
        PseudoVariantsEnum.ACTIVE,
        PseudoVariantsEnum.CHECKED,
        PseudoVariantsEnum.DARK,
        PseudoVariantsEnum.DISABLED,
        PseudoVariantsEnum.FIRST_OF_TYPE,
        PseudoVariantsEnum.FOCUS,
        PseudoVariantsEnum.FOCUS_VISIBLE,
        PseudoVariantsEnum.FOCUS_WITHIN,
        PseudoVariantsEnum.GROUP_FOCUS,
        PseudoVariantsEnum.GROUP_HOVER,
        PseudoVariantsEnum.HOVER,
        PseudoVariantsEnum.LANDSCAPE,
        PseudoVariantsEnum.LAST_OF_TYPE,
        PseudoVariantsEnum.LIGHT,
        PseudoVariantsEnum.PORTRAIT,
        PseudoVariantsEnum.REDUCE_MOTION,
        PseudoVariantsEnum.RESPONSIVE,
        PseudoVariantsEnum.VISITED,
    ];

    const ENABLED_CLASSES = `border-gray-800 text-gray-100 bg-gray-800 u-shadow-sm`;
    const REGULAR_CLASSES = `border-gray-300 text-gray-500 bg-transparent`;
    
    const enabledPseudos = new Set<PseudoVariantsEnum>(props.defaultEnabledPseudos);

    return (
        <>
            <h6 className="font-normal">Supported Pseudo-Variants</h6>
            <VersionTag version={`0.8.0`} />
            <div className="u-flex u-gap-1 u-flex-wrap">
                {PSEUDO_VARIANTS.map((pseudo) => (
                    <div
                        className={`tag text-md u-border-1 u-unselectable ${
                            props.defaultEnabledPseudos && enabledPseudos.has(pseudo)
                                ? ENABLED_CLASSES
                                : REGULAR_CLASSES
                        }`}
                        key={pseudo}
                    >
                        {pseudo}
                    </div>
                ))}
            </div>
            <div className="space"></div>
            <p>See more <InternalLink url="/fundamentals/viewports">pseudo-variants TODO PAGE</InternalLink>.</p>
        </>
    );
};
