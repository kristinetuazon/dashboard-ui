import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopBar from '../scenes/global/TopBar';

export default {
  title: 'Component/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

export const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args}/>

export const Primary = Template.bind({});

Primary.args = {
  primary:true,
}