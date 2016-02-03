import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { Foo } from 'foo/components/Foo';

export default class FooGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="Foo - without properties">
                    <Foo />
                </SGSection>

                <SGSection title="Foo - with value property">
                    <Foo value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
