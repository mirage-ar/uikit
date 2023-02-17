import ConnectModal from "../components/ConnectModal";
import { useState } from "react";
import { disconnect } from "process";
import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Home: React.FC = () => {

  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>
      {!isOpen && <Button onClick={toggleModal}>Open Modal</Button>}
      <Accordion title="title" content="blah blah blah"/>
    </div>
  );
};

export default Home;
