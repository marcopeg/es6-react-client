import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import AppTitle from 'components/AppTitle';

export default class AppTitleGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="AppTitle - without properties">
                    <AppTitle />
                </SGSection>

                <SGSection title="AppTitle - with title property">
                    <AppTitle title="Custom App Title" />
                </SGSection>

                <SGSection title="AppTitle - with a rank value">
                    <AppTitle title="Custom App Title" rank={100} />
                </SGSection>

            </SGPage>
        );
    }
}
