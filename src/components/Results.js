import Result from "./Result";
import Card from "./UI/Card";
import classes from "./Results.module.css";

const Results = (props) => {
  return (
    <Card>
      {props.userInputs == 0 ? (
        <p>No users entered</p>
      ) : (
        <ul className={classes.list}>
          {props.userInputs.map((data) => {
            return (
              <Result key={data.id} username={data.username} age={data.age} />
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default Results;
