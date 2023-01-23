import React from "react";
import ConnectModal from "../components/ConnectModal";
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
};
var Template = function (args, argTypes) { return (<>
    <ConnectModal {...args}/>
  </>); };
export var Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    isLoading: false,
};
//# sourceMappingURL=ConnectModal.stories.jsx.map