import ConnectModal from "../components/ConnectModal";
import { useState } from "react";
import { disconnect } from "process";
import Button from "../components/Button";

const Home: React.FC = () => {

  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>
      {!isOpen && <Button onClick={toggleModal}>Open Modal</Button>}
    </div>
  );
};

export default Home;
