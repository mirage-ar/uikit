import React from "react";
import Radio from "../components/Radio";
export default {
    title: "Radio",
    component: Radio,
    argTypes: {},
};
var Template = function (args) { return (<>
    <Radio {...args}/>
  </>); };
export var Primary = Template.bind({});
Primary.args = {
    title: "cities",
    values: ["all cities", "los angeles", "new york", "boston", "tokyo", "london"]
};
//# sourceMappingURL=Radio.stories.jsx.map