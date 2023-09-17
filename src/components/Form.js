import FormInputs from "./FormInputs";
import Card from "./UI/Card";

const Form = (props) => {
    return (
        <Card>
            <FormInputs enteredData={props.userInputs}/>
        </Card>
    );
}

export default Form;