import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { AppTitle } from 'components/AppTitle';

export default class AppTitleGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="AppTitle - without properties">
                    <AppTitle />
                </SGSection>

                <SGSection title="AppTitle - with value property">
                    <AppTitle value="Custom App Title" />
                </SGSection>

            </SGPage>
        );
    }
}
