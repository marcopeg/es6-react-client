import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';

import results from 'fixtures/results.fixture';
import ResultsLog from 'components/ResultsLog';

export default class ResultsLogGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="ResultsLog - without properties">
                    <ResultsLog />
                </SGSection>

                <SGSection title="ResultsLog - results">
                    <ResultsLog results={results} />
                </SGSection>

            </SGPage>
        );
    }
}
