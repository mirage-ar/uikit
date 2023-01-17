import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "../components/Accordion";

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
    content: "Minting your first NFT is as simple as clicking the mint button!",
};
