import Button from "../stories/components/Button";

const Home: React.FC = () => {

  const updateTheme = () => {
    console.log("here");
  };

  return (
    <div>
      <h1>NEXT COMPONENT TESTING PAGE</h1>

      <Button onClick={updateTheme}>CONSOLE LOG</Button>
    </div>
  );
};

export default Home;
