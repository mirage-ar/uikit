import React from 'react';
import Description from "../components/Description";
export default {
    title: "Description",
    component: Description,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return <Description {...args}/>; };
export var Single = Template.bind({});
Single.args = {
    title: "piece name",
    content: "the golden queen"
};
export var Image = Template.bind({});
Image.args = {
    title: "timer",
    content: "20:30:20",
    image: true,
};
//# sourceMappingURL=Description.stories.jsx.map