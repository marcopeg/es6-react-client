import React from 'react';
import { GuidePage, GuideSection } from '../index';

import { HelloWorld } from 'components/HelloWorld';

export default class FooSpec extends React.Component {
    render() {

        var availableTitleSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag =>
            <GuideSection title={'HelloWorld - tag ' + tag} key={tag}>
                <HelloWorld tag={tag}>Title {tag}</HelloWorld>
            </GuideSection>
        );

        return (
            <GuidePage>
                <GuideSection title="HelloWorld - with children content">
                    <HelloWorld>with <b>children</b> content</HelloWorld>
                </GuideSection>

                <GuideSection title="HelloWorld - with content from params">
                    <HelloWorld content="with content from params" />
                </GuideSection>

                {availableTitleSizes}
            </GuidePage>
        );
    }
}
