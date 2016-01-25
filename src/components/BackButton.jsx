const React = require('react'),
  Link = require('react-router').Link;

const Gliff = require('./Gliff.jsx');

const BackButton = React.createClass({

  propTypes: {
    to: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <forum>
        <div className='col-xs-12 form-group'>
          <Link to={this.props.to}>
            <button className="btn btn-danger btn-block">
              <Gliff gliff="remove"/>
            </button>
          </Link>
        </div>
      </forum>
    );
  }
});

module.exports = BackButton;
