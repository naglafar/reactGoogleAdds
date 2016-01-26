const React = require('react'),
  NavBarContainer = require('buildingBlocks').NavigationBar;

const Layout = React.createClass({

  render: function () {
    return (
      <div>
        <NavBarContainer
          appName="Google Adverts React Hack"
          appGliff="fire"
          navLinks={[]}
        />
        { this.props.children }
      </div>
    );
  }
});

module.exports = Layout;
