const React = require('react');

const FluidContainer = require('./FluidContainer.jsx'),
  Col = require('./Column.jsx'),
  Row = require('./Row.jsx'),
  AddContainer = require('./AddContainer.jsx');

let advertURL = 'https://pubads.g.doubleclick.net/gampad/adx?sz=160x600%7C120x600%7C300x600&iu=%2F48773563%' +
  '2FMX_Web&c=155362414&ord=fff363d4-488f-4444-88fe-ab66e3f8b7a0&t=adtype%3Dskyscraper%26plat' +
  'form%3Dweb%26opaqueid%3D123';

const App = React.createClass({

  render: function () {
    return (
      <div className="app">
        <FluidContainer>
          <Row>
            <Col s={12}>
              <div className="topBanner">

              </div>
            </Col>
          </Row>
          <Row>
            <Col s={2}>
              <div className="leftBar">
                <AddContainer url={advertURL} />
              </div>
            </Col>
            <Col s={8}>
              <div className="mainContent">

              </div>
            </Col>
            <Col s={2}>
              <div className="rightBar">
                <AddContainer url={advertURL} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <div className="bottomBanner">

              </div>
            </Col>
          </Row>
        </FluidContainer>
      </div>
    );
  }
});

module.exports = App;
