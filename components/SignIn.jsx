import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import Box from "./Box";
import Image from "./Image";
import Text from './Text';
import Button from './Button';
import useWindowStore from "./stores/window";
import useWorkspacesStore from "./stores/workspaces";

import signOnHeader from "../public/img/sign-on-header.gif";

import signOn from "../public/img/sign-on.png";
import signOnHover from "../public/img/sign-on-hover.png";
import signOnPressed from "../public/img/sign-on-pressed.png";

import setup from "../public/img/setup.png";
import setupHover from "../public/img/setup-hover.png";
import setupPressed from "../public/img/setup-pressed.png";

import help from "../public/img/help.png";
import helpHover from "../public/img/help-hover.png";
import helpPressed from "../public/img/help-pressed.png";

const SignOnActionButton = styled(Button)({
  backgroundColor: 'transparent',
  width: '46px',
  height: '36px',
  backgroundPosition: 'center bottom',
});

const HelpButton = styled(SignOnActionButton)({
  backgroundImage: `url(${help})`,
  '&:hover': {
    backgroundImage: `url(${helpHover})`,
  },
  '&:active': {
    backgroundImage: `url(${helpPressed})`,
  },
});

const SetupButton = styled(SignOnActionButton)({
  backgroundImage: `url(${setup})`,
  '&:hover': {
    backgroundImage: `url(${setupHover})`,
  },
  '&:active': {
    backgroundImage: `url(${setupPressed})`,
  },
});

const SignOnButton = styled(SignOnActionButton)({
  backgroundImage: `url(${signOn})`,
  '&:hover': {
    backgroundImage: `url(${signOnHover})`,
  },
  '&:active': {
    backgroundImage: `url(${signOnPressed})`,
  },
});

const SignIn = () => {
  const {setTitle, setWindowSize} = useWindowStore();
  useEffect(() => {
    setTitle('Sign On');
    setWindowSize(208, 434);
  }, []);

  const {loading, attemptLogin} = useWorkspacesStore();
  const [attemptingDomain, setAttemptingDomain] = useState();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const workspaceUrl = new URL('https://' + e.target.elements.workspaceUrl.value);
    const domain = workspaceUrl.host;
    const screenName = e.target.elements.screenName.value;
    const password = e.target.elements.password.value;

    setAttemptingDomain(domain);
    attemptLogin(domain, screenName, password);
  });

  return (
    <Box p={5} display='flex' flexDirection='column'>
      <Box m={4} mt={-3}>
        <Image src={signOnHeader} width='100%' />
      </Box>

      <hr/>

      <form onSubmit={handleSubmit}>
        <Box mx={6}>
          <Box mx={2}>
            <Box mt={6}>
              <div><label>Workspace URL</label></div>
              <Text name="workspaceUrl" width='100%' disabled={loading[attemptingDomain]}/>
            </Box>

            <Box mt={6}>
              <Image src="public/img/screen-name.png" width='103px' pt={3} pb={2} display='block'/>
              <Text name="screenName" width='100%' disabled={loading[attemptingDomain]}/>
              <a href="https://slack.com" target="_blank">Get a Screen Name</a>
            </Box>

            <Box mt={6}>
              <div><label htmlFor="password">Password</label></div>
              <Text type="password" name="password" width='100%' disabled={loading[attemptingDomain]}/>
              <a href="#">Forgot Password?</a>
            </Box>

            <Box mt={6} display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <input type="checkbox" name="save-password" disabled />
                <label htmlFor="">Save password</label>
              </Box>
              <Box mr={7} display="flex" alignItems="center">
                <input type="checkbox" name="auto-login" disabled />
                <label htmlFor="">Auto-login</label>
              </Box>
            </Box>
          </Box>

          <Box mt={6} display="flex">
            <HelpButton variant="flat" />
            <Box flex="1">
              <SetupButton variant="flat" />
            </Box>
            <SignOnButton variant="flat" type="submit" />
          </Box>
        </Box>
      </form>

      <Box justifySelf="flex-end" textAlign="center" pt={16}>
        <p style={{fontSize: '8px', userSelect: 'none'}}>Version: 4.2.0124</p>
      </Box>
    </Box>
  );
};

export default SignIn;
