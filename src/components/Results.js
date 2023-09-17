import Result from "./Result";
import Card from "./UI/Card";

const Results = (props) => {
  return (
    <Card>
      {props.userInputs == 0 ? (
        <p>No users entered</p>
      ) : (
        props.userInputs.map((data) => {
          return (<Result key={data.id} username={data.username} age={data.age} />);
        })
      )}
    </Card>
  );
};

export default Results;
