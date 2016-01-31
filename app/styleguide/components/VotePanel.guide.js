import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { VotePanel } from 'components/VotePanel';

export default class VotePanelGuideComponent extends React.Component {

    state = {
        vote1: '-- click to vote --',
    }

    render() {
        return (
            <SGPage>

                <SGSection title="VotePanel - without properties">
                    <VotePanel />
                </SGSection>

                <SGSection title="VotePanel - custom size">
                    <VotePanel size={50} />
                </SGSection>

                <SGSection title="VotePanel - click handler">
                    <p className="text-center">
                        <i>{this.state.vote1}</i>
                    </p>
                    <VotePanel
                        size={50}
                        onVote={vote1 => this.setState({ vote1 })} />
                </SGSection>

            </SGPage>
        );
    }
}
