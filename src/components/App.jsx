const React = require('react');

const FluidContainer = require('buildingBlocks').FluidContainer,
  Col = require('buildingBlocks').Column,
  Row = require('buildingBlocks').Row,
  AddContainer = require('./AddContainer.jsx');

let advertURL = 'https://pubads.g.doubleclick.net/gampad/adx?sz=160x600%7C120x600%7C300x600&iu=%2F48773563%' +
  '2FMX_Web&c=155362414&ord=fff363d4-488f-4444-88fe-ab66e3f8b7a0&t=adtype%3Dskyscraper%26plat' +
  'form%3Dweb%26opaqueid%3D123';

let interval;

const App = React.createClass({

  getInitialState: () => {
    return {
      adds: true
    };
  },

  componentDidMount: function () {
    const that = this;

    interval = setInterval(() => {
      that.setState({adds: !that.state.adds});
    },
    3000);
  },

  componentDidUnMount: () => {
    clearInterval(interval);
  },

  render: function () {
    return (
      <div className="app">
        <FluidContainer>
          <Row>
            <Col s={8}>
              <div className="mainContent">
                <form>

                </form>
              </div>
            </Col>
            <Col s={4}>
              <div className="rightBar">
                {this.renderAdvertOrNot()}
              </div>
            </Col>
          </Row>
        </FluidContainer>
      </div>
    );
  },

  renderAdvertOrNot: function () {

    if (this.state.adds) {
      return <AddContainer url={advertURL} />;
    }
    return (<p>No Adds Atm</p>);
  }
});

module.exports = App;
