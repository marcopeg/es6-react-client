/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import results from 'fixtures/results.fixture';
import ResultsLog from 'components/ResultsLog';

describe('ResultsLog Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<ResultsLog />);
    });

    it('should render a list of results', () => {
        var el = <ResultsLog results={results} />;
        var cmp = ReactTestUtils.renderIntoDocument(el);
        var dom = ReactDOM.findDOMNode(cmp);
        var rows = dom.querySelectorAll('[data-ta="results-log-item"]');
        expect(rows.length).to.equal(results.length);
    });

    it('should render a help message when no results are given', () => {
        var el = <ResultsLog results={[]} />;
        var cmp = ReactTestUtils.renderIntoDocument(el);
        var dom = ReactDOM.findDOMNode(cmp);
        expect(dom.dataset.ta).to.equal('help-msg');
    });
});
