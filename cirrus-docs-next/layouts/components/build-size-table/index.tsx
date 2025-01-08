import React from 'react';

import { TableWrapper } from "../table-wrapper";

export const BuildSizeTable: React.FC<any> = (props) => {
    return (
        <TableWrapper>
            <table className="table bordered">
                <tbody>
                    <tr>
                        <th>Compression</th>
                        <th>Minified</th>
                        <th>Gzip</th>
                    </tr>
                    <tr>
                        <td>Core</td>
                        <td>
                            <img className="mx-auto" src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?style=flat-square" />
                        </td>
                        <td>
                            <img className="mx-auto" src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?compression=gzip&style=flat-square" />
                        </td>
                    </tr>
                    <tr>
                        <td>Ext (Full)</td>
                        <td>
                            <img className="mx-auto" src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?style=flat-square" />
                        </td>
                        <td>
                            <img className="mx-auto" src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?compression=gzip&style=flat-square" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </TableWrapper>
    );
};
