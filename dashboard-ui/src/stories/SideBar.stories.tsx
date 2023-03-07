import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SideBar from '../scenes/global/SideBar';

export default {
  title: 'Component/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args}/>

export const Primary = Template.bind({});