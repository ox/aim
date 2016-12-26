import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import Text from './input/text';

class SignOn extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.logoContainer)}>
          <img src="public/img/aim-logo.jpg" className={css(styles.logo)} />
        </div>

        <hr/>
        <br />

        <div className={css(styles.inputContainer)}>
          <label className={css(styles.label)} htmlFor="screen-name">Screen Name</label>
          <Text name="screen-name" styles={[styles.textInput]} />
        </div>

        <div className={css(styles.inputContainer)}>
          <label className={css(styles.label)} htmlFor="password">Password</label>
          <Text type="password" name="password" styles={[styles.textInput]} />
        </div>

        <input type="checkbox" name="" className={css(styles.checkbox)}/>
        <label htmlFor="">Save password</label>
        <div className={css(styles.autoLogin)}>
          <input type="checkbox" name="" className={css(styles.checkbox)}/>
          <label htmlFor="">Auto-login</label>
        </div>
        <div className="clear"></div>

        <button className={css(styles.button, styles.helpButton)}/>
        <button className={css(styles.button, styles.setupButton)}/>
        <button className={css(styles.button, styles.signOnButton)}/>
        <div className="clear"></div>

        <div className={css(styles.footer)}>
          <p className={css(styles.version)}>Version: 4.2.0124</p>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
  logoContainer: {
    marginBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  logo: {
    width: '100%',
  },
  label: {},
  inputContainer: {
    marginBottom: 8,
    lineHeight: '20px',
    clear: 'both',
  },
  textInput: {
    float: 'right',
  },
  checkbox: {
    marginRight: 5,
  },
  autoLogin: {
    float: 'right',
    marginRight: 7,
  },
  button: {
    float: 'right',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    border: '#ccc',
    ':active': {
      borderTop: '1px solid gray',
      borderLeft: '1px solid gray',
      borderRight: '1px solid #dfdfdf',
      borderBottom: '1px solid #dfdfdf',
      boxShadow: '1px 0 #fff, 0 1px #fff, 1px 1px #fff',
      outline: '0px solid transparent',
    },
    ':focus': {
      outline: '0px solid transparent',
    },
  },
  signOnButton: {
    marginRight: 10,
    backgroundImage: 'url(public/img/sign-on.png)',
  },
  helpButton: {
    float: 'left',
    backgroundImage: 'url(public/img/help.png)',
  },
  setupButton: {
    float: 'left',
    backgroundImage: 'url(public/img/setup.png)',
  },
  version: {
    fontSize: 10,
    marginBottom: 6,
  },
  footer: {
    textAlign: 'center',
    width: '100%',
  },
});

export default SignOn;
