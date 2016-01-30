
import React from 'react';
import ReactDOM from 'react-dom';

import { Styleguide } from './Styleguide';
import { StyleguideTitle } from './StyleguideTitle';
import { StyleguideToc } from './StyleguideToc';
import { StyleguidePage } from './StyleguidePage';
import { StyleguideError } from './StyleguideError';

module.exports = {
    SGPage: require('./SGPage').SGPage,
    SGSection: require('./SGSection').SGSection,
    renderMultiComponents,
    renderSingleComponent,
    renderStyleguideInfo,
};

function renderMultiComponents(targetEl, root, components, sources) {
    try {
        var GuideComponent;
        var pages = components.map(component => {
            GuideComponent = component.def;
            return (
                <StyleguidePage
                    name={component.name}
                    key={component.name}
                    component={GuideComponent} />
            );
        });

        ReactDOM.render((
            <Styleguide root={root} sources={sources}>
                <StyleguideTitle title="es6-react-client" />
                <StyleguideToc components={components} />
                {pages}
            </Styleguide>
        ), targetEl);

        return true;

    } catch (e) {
        return e;
    }
}

function renderSingleComponent(targetEl, root, component, sources) {
    try {
        var GuideComponent = component.def;
        ReactDOM.render((
            <Styleguide root={root} sources={sources}>
                <StyleguideTitle />
                <StyleguidePage
                    name={component.name}
                    component={GuideComponent} />
            </Styleguide>
        ), targetEl);
    } catch (e) {
        return e;
    }
    return true;
}

function renderStyleguideInfo(targetEl, root, error) {
    ReactDOM.render((
        <StyleguideError root={root} error={error} />
    ), targetEl);
}
