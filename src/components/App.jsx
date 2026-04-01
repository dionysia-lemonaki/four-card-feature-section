import Card from "./Card";

const App = ({ data }) => {
  return (
    <main>
      <div>
        <h1>
          Reliable, efficient delivery <span>Powered by Technology</span>
        </h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div>
        {data.map((item) => {
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            variant={item.variant}
          />;
        })}
      </div>
    </main>
  );
};

export default App;
