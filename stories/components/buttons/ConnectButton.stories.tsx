import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConnectButton } from "./ConnectButton";

export default {
  title: "Button",
  component: ConnectButton,
} as ComponentMeta<typeof ConnectButton>;

const Template: ComponentStory<typeof ConnectButton> = (args) => (
  <ConnectButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "CONNECT WALLET",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'CONNECT WALLET',
};
