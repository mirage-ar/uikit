import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: [
          "",
          "360-arrow",
          "claim",
          "download",
          "list",
          "metamask",
          " photo",
          "reset",
          "swipe",
          "360",
          "close-eye",
          "dropdown",
          "loading",
          "mint",
          "plus",
          "reset2",
          "video",
          "arrow-circle",
          "close-photo",
          "find",
          "map-arrow",
          "navigate-left.svgpolygon",
          "share",
          "vote",
          "arrow-right",
          "closer",
          "flash-off",
          "map",
          "navigate-right",
          "radio-off",
          "sound-off",
          "walletconnect",
          "artist",
          "coinbase",
          "flash-on",
          "menu",
          "navigate",
          "radio-on",
          "sound-on",
          "x",
          "bell",
          "copy",
          "fullscreen",
          "message",
          "phantom",
          "rainbow",
          "success",
          "drop",
          "persona",
          "polygon-horizontal",
          "safe",
          "subtract-anim",
          "subtract-edition",
          "subtract"
        ].sort(),
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "CONNECT WALLET",
  disabled: false,
  secondary: false,
  loading: false,
  small: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "CONNECT WALLET",
  secondary: true,
  disabled: false,
  loading: false,
  small: false,
};

export const Small = Template.bind({});
Small.args = {
  children: "CONNECT WALLET",
  small: true,
  disabled: false,
  secondary: false,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  disabled: false,
  secondary: false,
  small: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "CONNECT WALLET",
  disabled: true,
  secondary: false,
  loading: false,
  small: false,
};

export const Icon = Template.bind({});
Icon.args = {
  children: "CONNECT WALLET",
  icon: "metamask",
  disabled: false,
  secondary: false,
  loading: false,
  small: false,
};
