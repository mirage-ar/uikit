import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,

  argTypes: {
    
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: "How can I mint my first nft?",
    content: "I got in trouble so now this message is boring thank my boss",
};
