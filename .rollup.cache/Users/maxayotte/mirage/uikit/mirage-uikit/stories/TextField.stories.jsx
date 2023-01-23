import React from "react";
import TextField from "../components/TextField";
export default {
    title: "Text Field",
    component: TextField,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return (<TextField {...args}/>); };
export var Primary = Template.bind({});
Primary.args = {};
export var Error = Template.bind({});
Error.args = {
    error: true,
    errorMessage: "Please enter a username"
};
//# sourceMappingURL=TextField.stories.jsx.map