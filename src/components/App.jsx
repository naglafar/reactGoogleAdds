const React = require('react');

const FluidContainer = require('buildingBlocks').FluidContainer,
  Col = require('buildingBlocks').Column,
  Row = require('buildingBlocks').Row,
  AD = require('react-google-publisher-tag').default;

console.log(AD);

const App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <FluidContainer>

          <Row>
            <Col s={12}>
              <AD path="/48773563/MX_Web_Preview" />
            </Col>
          </Row>

          <Row>
            <Col s={8} m={10} l={11}>
              <div className="mainContent">
                <h3>Sample App With Testing Out GPT</h3>
              </div>
            </Col>
            <Col s={4} m={2} l={1}>
              <div className="rightBar">
                <AD path="/48773563/MX_Web_Preview" format="VERTICAL" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col s={12}>
              <AD path="/48773563/MX_Web_Preview" />
            </Col>
          </Row>

        </FluidContainer>
      </div>
    );
  }
});

module.exports = App;
