
/* globals __STYLEGUIDE_SOURCES__ */

import React from 'react';

import { StyleguideSource } from './StyleguideSource';
import { StyleguideSectionBody } from './StyleguideSectionBody';
import { StyleguideSectionHeader } from './StyleguideSectionHeader';

export class SGSection extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }

    render() {
        var style = {
            marginBottom: 40,
        };

        var source = null;
        __STYLEGUIDE_SOURCES__.forEach(component => {
            component.sections.forEach(section => {
                if (section.title === this.props.title) {
                    source = section.source;
                }
            });
        });

        if (source) {
            source = <StyleguideSource lines={source} />;
        }

        return (
            <div style={style}>
                <StyleguideSectionHeader>{this.props.title}</StyleguideSectionHeader>
                <StyleguideSectionBody>
                    {this.props.children}
                </StyleguideSectionBody>
                {source}
            </div>
        );
    }
}
