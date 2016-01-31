/* eslint max-nested-callbacks:0 no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { Smiley } from 'components/Smiley';

describe('Smiley Component', () => {

    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<Smiley />);
    });

    it('should be clickable', () => {
        var spy = sinon.spy();
        var el = <Smiley onClick={spy} />;
        var cmp = ReactTestUtils.renderIntoDocument(el);
        var nod = ReactDOM.findDOMNode(cmp);
        ReactTestUtils.Simulate.click(nod);
        expect(spy.calledOnce).to.be.true;
    });

});
