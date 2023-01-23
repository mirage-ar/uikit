import ConnectModal from "../components/ConnectModal";
import { useAccount, useConnect } from "wagmi";
import { useState } from "react";
import { disconnect } from "process";
import Button from "../components/Button";
var Home = function () {
    var _a = useConnect(), connect = _a.connect, connectors = _a.connectors, error = _a.error, isLoading = _a.isLoading;
    var address = useAccount().address;
    var _b = useState(false), isOpen = _b[0], toggleModal = _b[1];
    return (<div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>
      {!isOpen && <Button onClick={toggleModal}>Open Modal</Button>}
      <ConnectModal isOpen={isOpen} toggleModal={toggleModal} isLoading={isLoading} address={address} connect={connect} disconnect={disconnect} connectors={connectors} error={error}/>
    </div>);
};
export default Home;
//# sourceMappingURL=index.jsx.map