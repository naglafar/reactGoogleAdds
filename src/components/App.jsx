const React = require('react');

const FluidContainer = require('buildingBlocks').FluidContainer,
  Col = require('buildingBlocks').Column,
  Row = require('buildingBlocks').Row,
  AD = require('react-google-publisher-tag').default,
  FormGroup = require('buildingBlocks').FormGroup;

console.log(AD);

const App = React.createClass({

  getInitialState: function () {
    return {
      addUrl: '/48773563/MX_Web_Preview'
    };
  },

  newAddUrl: function (e) {
    let addUrl = e.target.value;
    this.setState({addUrl: addUrl});
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
  }
});

module.exports = App;
