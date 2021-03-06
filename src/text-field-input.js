'use strict';

const React = require('react');
const classnames = require('classnames');
const _ = require('lodash');

const baseClasses = {
  'mdl-textfield__input': true
};

class TextFieldInput extends React.Component {

  render(){
    const {
      className
    } = this.props;

    const divClasses = classnames(
      {
        'mdl-textfield': true,
        'mdl-js-textfield': true,
        'mdl-textfield--floating-label': this.props.floating,
        'is-invalid':
          (!_.isUndefined(this.props.valid) && !this.props.valid) ||
          this.props.error ||
          (this.props.required && !this.props.value),
        'is-dirty': this.props.value
      }
    )

    const classes = classnames(
      baseClasses,
      className
    );

    if (this.props.label) {
      return (
        <div className={divClasses}>
          <input {...this.props} type={this.props.type} className={classes} />
          <label className="mdl-textfield__label" htmlFor={this.props.id}>
            {this.props.label}
          </label>
          <span className="mdl-textfield__error">{this.props.error}</span>
        </div>
      );
    } else {
      return (
        <input {...this.props} type='text' className={classes} />
      );
    }
  }
}

TextFieldInput.propType = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  floating: React.PropTypes.bool,
  label: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  value: React.PropTypes.string,
  required: React.PropTypes.bool,
  valid: React.PropTypes.bool
};

module.exports = TextFieldInput;
