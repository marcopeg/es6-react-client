/* eslint max-nested-callbacks:0 no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import VotePanel from 'components/VotePanel';

describe('VotePanel Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<VotePanel />);
    });

    ['happy', 'sad', 'soso'].forEach(humor => {
        it('should vote: ' + humor, () => {
            var spy = sinon.spy();
            var el = <VotePanel onVote={spy} />;
            var cmp = ReactTestUtils.renderIntoDocument(el);
            var dom = ReactDOM.findDOMNode(cmp);
            var smiley = dom.querySelector('[data-is=' + humor + ']');
            ReactTestUtils.Simulate.click(smiley);
            expect(spy.withArgs(humor).calledOnce).to.be.true;
        });
    });
});
