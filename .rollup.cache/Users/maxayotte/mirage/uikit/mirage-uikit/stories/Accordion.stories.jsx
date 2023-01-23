import React from "react";
import Accordion from "../components/Accordion";
export default {
    title: "Accordion",
    component: Accordion,
    argTypes: {},
};
var Template = function (args) { return (<Accordion {...args}/>); };
export var Primary = Template.bind({});
Primary.args = {
    title: "How can I mint my first nft?",
    content: "Minting your first NFT is as simple as clicking the mint button!",
};
//# sourceMappingURL=Accordion.stories.jsx.map