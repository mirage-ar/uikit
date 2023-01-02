import ConnectModal from "../stories/components/ConnectModal";
import { useAccount, useConnect } from "wagmi";
import { useState } from "react";
import { disconnect } from "process";
import Button from "../stories/components/Button";

const Home: React.FC = () => {
  const { connect, connectors, error, isLoading } = useConnect();
  const { address } = useAccount();

  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>
      {!isOpen && <Button onClick={toggleModal}>Open Modal</Button>}
      <ConnectModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        isLoading={isLoading}
        address={address}
        connect={connect}
        disconnect={disconnect}
        connectors={connectors}
        error={error}
      />
    </div>
  );
};

export default Home;
