const React = require('react'),
  R = require('ramda');

const FluidContainer = require('buildingBlocks').FluidContainer,
  Col = require('buildingBlocks').Column,
  Row = require('buildingBlocks').Row,
  AD = require('react-google-publisher-tag').default,
  FormGroup = require('buildingBlocks').FormGroup;

let googletag = window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];

let addServiceRunning = false,
  interval;

const App = React.createClass({

  getInitialState: function () {
    return {
      addUrl: '/48773563/MX_Web_Preview',
      impressions: []
    };
  },

  newAddUrl: function (e) {
    let addUrl = e.target.value;
    this.setState({addUrl: addUrl});
  },

  componentDidMount: function () {
    interval = setInterval(this.waitForAddService, 100);
  },

  waitForAddService: function () {
    console.debug('waiting for add service');
    if (!addServiceRunning && googletag.apiReady) {
      console.debug('add service ready');
      googletag.cmd.push(this.registerImpressionCallBack);
      addServiceRunning = true;
      clearInterval(interval);
    } else {
      console.debug('add service still loading');
    }
  },

  registerImpressionCallBack: function () {
    window.googletag.pubads().addEventListener('impressionViewable', this.addImpression.bind(this));
    console.debug('impressions now being recorded');
  },

  addImpression: function (impressionEvent) {
    let impression = {
      id: impressionEvent.slot.getDefinedId(),
      adUnit: impressionEvent.slot.getAdUnitPath(),
      occurred: new Date()
    };

    this.setState({impressions: R.append(impression, this.state.impressions)});
  },

  render: function () {
    return (
      <div className="app">
        <FluidContainer>

          <Row>
            <Col s={12}>
              <AD path={this.state.addUrl} />
            </Col>
          </Row>

          <Row>

            <Col s={8} m={10} l={11}>
              <div className="mainContent">
                <h3>Sample App With Testing Out GPT</h3>
                <hr/>
                <p>{`current add: ${this.state.addUrl}`}</p>
                <FormGroup for="add" label="/channel/id" >
                  <input onChange={this.newAddUrl} type="text" id="add" placeholder="/48773563/MX_Web_Preview"/>
                </FormGroup>
                <hr/>
                <h4>Advert Impressions</h4>
                <ul className="list-group">
                  {this.state.impressions.map(this.renderImpression)}
                </ul>
              </div>
            </Col>

            <Col s={4} m={2} l={1}>
              <div className="rightBar">
                <AD path={this.state.addUrl} format="VERTICAL" />
              </div>
            </Col>

          </Row>

          <Row>
            <Col s={12}>
              <AD path={this.state.addUrl} />
            </Col>
          </Row>

        </FluidContainer>
      </div>
    );
  },

  renderImpression: function (imp) {
    return (
      <li className="list-group-item" key={imp.id}>{`${imp.id} : ${imp.adUnit} - ${imp.occurred.toDateString()}`}</li>
    );
  }
});

module.exports = App;
