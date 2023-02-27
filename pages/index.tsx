import { useState } from "react";
import { disconnect } from "process";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import Radio from "../components/Radio";
import TextField from "../components/TextField";
import ConnectModal from "../components/ConnectModal";
import Description from "../components/Description";

const Home: React.FC = () => {

  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>
      {!isOpen && <Button onClick={toggleModal}>Open Modal</Button>}
      <Accordion title="title" content="blah blah blah"/>
      <Radio title="test" values={["one", "two", "three"]}/>
      <TextField placeholder="test" />
      <Description title="test" content="test"/>
    </div>
  );
};

export default Home;
