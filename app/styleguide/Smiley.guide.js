/* eslint no-alert:0 */

import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Smiley from 'components/Smiley';

export default class SmileyGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>
                <SGSection title="Smiley - whithout properties">
                    <Smiley />
                </SGSection>

                <SGSection title="Smiley - happy, sad, soso">
                    <Smiley is="happy" />
                    <Smiley is="sad" />
                    <Smiley is="soso" />
                </SGSection>

                <SGSection title="Smiley - xsmall, small, normal, large, xlarge">
                    <Smiley size="xsmall" />
                    <Smiley size="small" />
                    <Smiley size="normal" />
                    <Smiley size="large" />
                    <Smiley size="xlarge" />
                </SGSection>

                <SGSection title="Smiley - custom width">
                    <Smiley width={100} is="happy" />
                </SGSection>

                <SGSection title="Smiley - custom style">
                    <Smiley style={{ marginRight: 10 }} />
                    <Smiley style={{ borderRight: '4px solid #666' }} />
                </SGSection>

                <SGSection title="Smiley - click handler">
                    <Smiley onClick={() => alert('you clicked me')} />
                </SGSection>

            </SGPage>
        );
    }
}
