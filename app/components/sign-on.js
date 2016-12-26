import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import Text from './input/text';
import Button from './input/button';

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

        <Button type="flat" styles={[styles.button, styles.helpButton]}/>
        <Button type="flat" styles={[styles.button, styles.setupButton]}/>
        <Button type="flat" styles={[styles.button, styles.signOnButton]}/>
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
    width: 40,
    height: 40,
    padding: 5,
  },
  signOnButton: {
    float: 'right',
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
