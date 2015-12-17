
import React from 'react';
import { connect } from 'react-redux';

import { loadCampaigns } from 'services/campaigns-service';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { CampaignsList } from 'components/CampaignsList';

@connect(s => s)
export class Dashboard extends React.Component {

    componentWillMount() {
        this.props.dispatch(loadCampaigns());
    }

    selectCampaign = (campaignId) => {
        alert('campaign: ' + campaignId);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h4>YouCollide Dashboard</h4>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={4}>
                        <CampaignsList 
                            items={this.props.campaigns.items} 
                            onDisclose={this.selectCampaign} />
                    </Col>
                    <Col xs={8}>
                        <i>here will come campaign details</i>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
