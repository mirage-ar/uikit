import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConnectModal from "./ConnectModal";

export default {
  title: "Connect Modal",
  component: ConnectModal,

  argTypes: {
    toggleModal: {
      control: false,
    },
    connect: {
      control: false,
    },
    connectors: {
      control: false,
    },
    disconnect: {
      control: false,
    },
    error: {
      control: false,
    },
  },
} as ComponentMeta<typeof ConnectModal>;

const Template: ComponentStory<typeof ConnectModal> = (args, argTypes) => (
  <>
    <ConnectModal {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  isLoading: false,
};
