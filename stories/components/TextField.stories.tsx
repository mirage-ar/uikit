import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "./TextField";

export default {
  title: "Text Field",
  component: TextField,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Error = Template.bind({});
Error.args = {
    error: true,
    errorMessage: "Please enter a username" 
};