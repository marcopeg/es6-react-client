import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import HelpMsg from 'components/HelpMsg';

export default class HelpMsgGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="HelpMsg - without properties">
                    <HelpMsg />
                </SGSection>

            </SGPage>
        );
    }
}
