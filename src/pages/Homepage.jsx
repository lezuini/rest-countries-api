import Card from "../components/Card";

const Homepage = ({ data }) => {
  return (
    <div className="home">
      {data.map((country) => {
        return <Card country={country} key={country.name} />;
      })}
    </div>
  );
};

export default Homepage;
