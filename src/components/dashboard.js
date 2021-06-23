import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import {Col,Row,Container} from 'react-bootstrap';
import WidgetText from './widgetText'
import WidgetBar from './widgetBar';
import NewChart from './amcharts';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { options } from 'fusioncharts';
import widgetBar from './widgetBar';

const config = {
    apiKey:"",
    spreadsheetId:""
}
const url = ""


 class dashboard extends Component {

   
    render() {
        const chartData = [
            {
              label: "NAV",
              value: "290"
            },
            {
              label: "1 Day Return",
              value: "260"
            },
            {
              label: "1 Week Return",
              value: "180"
            },
            {
              label: "1 Month Return",
              value: "140"
            },
            {
              label: "1 Quarter Return",
              value: "115"
            },
            {
              label: "1 Year Return",
              value: "100"
            },
            {
              label: "Week to Day",
              value: "30"
            },
            {
              label: "Month to Day",
              value: "30"
            },
            {
                label: "Year to Day",
                value: "30"
              },
              {
                label: "Quarter to Day",
                value: "30"
              },
              {
                label: "Last week Return",
                value: "30"
              },
              {
                label: "Last month Return",
                value: "30"
              },
              {
                label: "Last Quarter Return",
                value: "30"
              },
              {
                label: "Last Year Return",
                value: "30"
              }
          ];

          const options = [
            'one', 'two', 'three'
          ];
          //const defaultOption = options[0];

         
        return (
            <div>
              <Container fluid>
                <Row className='TopHeader'>
                  <Col>
                    MarketView
                  </Col>
                  <Col>
                    <Dropdown options={options} onChange={this._onSelect}  placeholder="Select an option"/>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <WidgetText title='NAV' value='58.88' description='Net Asset Value' />
                  </Col>
                  <Col>
                    <WidgetText title='One Day Returns' value='100' description='Returns' />
                  </Col>
                  <Col>
                    <WidgetText title='Weekly Returns' value='300' description='Returns' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <WidgetText title='Yearly Returns' value='1000' description ='Returns'/>
                  </Col>
                  <Col>
                    <WidgetText title='Week to Date' value='800' description ='Returns'/>
                  </Col>
                  <Col>
                    <WidgetText title='Month to Date' value='400' description ='Returns'/>
                  </Col>
                </Row>
                <Row>
                  <NewChart />
                </Row>
              </Container>
                
            </div>
        );
    }
 }

export default dashboard
