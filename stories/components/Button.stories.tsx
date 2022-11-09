import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "CONNECT WALLET",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "CONNECT WALLET",
  secondary: true
}

export const Small = Template.bind({});
Small.args = {
  children: "CONNECT WALLET",
  small: true,
}

export const Loading = Template.bind({});
Loading.args = {
  loading: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  children: "CONNECT WALLET",
  disabled: true
}

export const Icon = Template.bind({});
Icon.args = {
  children: "CONNECT WALLET",
  icon: "metamask"
}