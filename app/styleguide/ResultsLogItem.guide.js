import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { ResultsLogItem } from 'components/ResultsLogItem';

export default class ResultsLogItemGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="ResultsLogItem">
                    <ResultsLogItem rank={100} value="happy" ts={1454255873} />
                    <ResultsLogItem rank={90} value="soso" ts={1454255873} />
                    <ResultsLogItem rank={80} value="sad" ts={1454255873} />
                </SGSection>

            </SGPage>
        );
    }
}
