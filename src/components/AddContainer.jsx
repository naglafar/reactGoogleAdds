const React = require('react');

const App = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: () => {
    return {
      loading: true
    };
  },

  componentDidMount: function () {
    const xhr = new XMLHttpRequest();
    const that = this;

    xhr.open('GET', this.state.url, true);
    xhr.responseType = 'document';

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        that.setState({
          loading: false,
          advert: xhr.response
        });
      }
    };

    xhr.send();
  },

  render: function () {
    return (
      <div className="advert">
        {this.renderAdvert()}
      </div>
    );
  },


  renderAdvert: function () {
    if (this.state.loading) {
      return (
        <p>Loading Advert</p>
      );
    }
    return (
      <div>
        Advert loaded
      </div>
    );
  }

});

module.exports = App;
