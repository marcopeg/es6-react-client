/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { Foo } from 'foo/components/Foo';

describe('Foo Component', () => {
    it('should render without exceptions', () => {
        var cmp = ReactTestUtils.renderIntoDocument(<Foo value="Foo" />);
        var nod = ReactDOM.findDOMNode(cmp);
        expect(nod.innerText).to.equal('Foo');
        console.log("FOOOOOOOOOOOOO");
    });
});
