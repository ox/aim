import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import Text from './text';
import Button from './button';

class SignOn extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.logoContainer)}>
          <img src="public/img/aim-logo.png" className={css(styles.logo)} />
        </div>

        <hr/>

        <div className={css(styles.inputContainer)}>
          <img src="public/img/screen-name.png" className={css(styles.screenName)}/>
          <br/>
          <Text name="screen-name" styles={[styles.textInput]} />
          <br/>
          <a href="https://slack.com" target="_blank">Get a Screen Name</a>
        </div>

        <div className={css(styles.inputContainer)}>
          <label htmlFor="password" className={css(styles.passwordLabel)}>Password</label>
          <br/>
          <Text type="password" name="password" styles={[styles.textInput]} />
          <br/>
          <a href="#">Forgot Password?</a>
        </div>

        <div className={css(styles.inputContainer)}>
          <input type="checkbox" name="" className={css(styles.checkbox)}/>
          <label htmlFor="">Save password</label>
          <div className={css(styles.autoLogin)}>
            <input type="checkbox" name="" className={css(styles.checkbox)}/>
            <label htmlFor="">Auto-login</label>
          </div>
        </div>

        <Button type="flat" styles={[styles.button, styles.helpButton]}/>
        <Button type="flat" styles={[styles.button, styles.setupButton]}/>
        <Button type="flat" styles={[styles.button, styles.signOnButton]}/>
        <div className="clear"></div>

        <div className={css(styles.footer)}>
          <p className={css(styles.version)}>Version: 4.2.0124</p>
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
    marginTop: -3,
    marginBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  logo: {
    width: '100%',
  },
  screenName: {
    width: 103,
    paddingTop: 3,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  inputContainer: {
    marginBottom: 8,
    paddingLeft: 10,
    clear: 'both',
  },
  textInput: {
    width: '100%',
    marginBottom: 2,
  },
  passwordLabel: {
    lineHeight: '16px',
    verticalAlign: 'top',
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
