
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { HelloWorld } from 'components/HelloWorld';

describe('HelloWorld Component', () => {

    it('should render with child components', function () {
        var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld>foo</HelloWorld>);
        var nod = ReactDOM.findDOMNode(cmp);
        expect(nod.innerText).to.equal('foo');
    });

    it('should render with a content attribute', function () {
        var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" />);
        var nod = ReactDOM.findDOMNode(cmp);
        expect(nod.innerText).to.equal('foo');
    });

    // test all the possible options for the attribute "tag"
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (tag) {
        it('should render as ' + tag, function () {
            var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" tag={tag} />);
            var nod = ReactDOM.findDOMNode(cmp).querySelector(tag);
            expect(nod.innerText).to.equal('foo');
        });
    });

    // test that che component triggers
    it('should complain if a wrong tag value is given', function () {
        var stub = sinon.stub(console, 'error');
        ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" tag="h7" />);
        expect(stub.calledOnce).to.equal(true);
        console.error.restore();
    });

});
