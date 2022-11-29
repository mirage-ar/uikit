import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./Radio";

export default {
  title: "Radio",
  component: Radio,

  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <>
    <Radio {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "cities",
  values: ["all cities", "los angeles", "new york", "boston", "tokyo", "london"]
};
