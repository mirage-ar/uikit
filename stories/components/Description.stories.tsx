import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Description from "./Description";

export default {
  title: "Description",
  component: Description,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Single = Template.bind({});
Single.args = {
  title: "piece name",
  content: "the golden queen"
};

export const Image = Template.bind({});
Image.args = {
  title: "timer",
  content: "20:30:20",
  image: true,
};