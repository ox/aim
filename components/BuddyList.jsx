import React, {useEffect} from 'react';
import styled from "styled-components";

import useWindowStore from "./stores/window";
import useWorkspaces from "./stores/workspaces"

import Box from "./Box";
import Image from "./Image";

import {Tabs, Tab} from './tabs';
import {List, Item} from './collapsable-list';

import bannerSrc from "../public/img/aim-header.png";
import headerSrc from "../public/img/aim-header-logo.png";

const Banner = styled(Box)({
  height: '20px',
  backgroundImage: `url(${bannerSrc})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

const Header = styled(Box)({
  height: '130px',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundImage: `url(${headerSrc})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

const BuddyList = () => {
  const {setTitle, setWindowSize} = useWindowStore();
  useEffect(() => {
    setTitle('Buddies');
    setWindowSize(208, 434);
  }, []);

  const {workspaces} = useWorkspaces();
  const workspaceDomains = Object.keys(workspaces);

  console.log(workspaces);

  return (
    <Box>
      <Banner />
      <Header />

      <Tabs>
        <Tab title="Online" >
          <List>
            {workspaceDomains.map((domain) => (
              <Item title={workspaces[domain].teamData.name} key={domain} highlight visible>
                <Item title="Groupchats" visible>
                  {workspaces[domain].teamData.channels.map((channel) => (
                    <Item title={channel.name} visible></Item>
                  ))}
                </Item>
                <Item title="Buddies" highlight visible>
                  {workspaces[domain].teamData.ims.map((im) => (
                    <Item title={im.user} visible></Item>
                  ))}
                </Item>
              </Item>
            ))}
          </List>
        </Tab>
      </Tabs>
    </Box>
  );
}

export default BuddyList;
