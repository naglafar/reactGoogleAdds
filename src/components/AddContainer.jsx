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

    xhr.onload = function() {
      that.setState({
        loading: false,
        advert: xhr.response.firstChild.innerHTML
      });
    };

    xhr.open('GET', this.props.url, true);
    xhr.responseType = 'document';
    xhr.send();
  },

  render: function () {
    return (
      <div className="advert">
        {this.renderAdvertContainer()}
      </div>
    );
  },

  renderAdvertContainer: function () {
    if (this.state.loading) {
      return (
        <p>Loading Advert</p>
      );
    }
    return this.renderAdvert();
  },

  renderAdvert: function () {
    return (
      <div className="advert">
        <div dangerouslySetInnerHTML={{__html: this.state.advert}}></div>
      </div>
    );
  }

});

module.exports = App;
