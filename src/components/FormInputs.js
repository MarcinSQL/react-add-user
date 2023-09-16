import Button from "./UI/Button";

const FormInputs = () => {
    return (
        <form>
            <label> Username
                <input type="text" />
            </label>
            <label> Age (Years)
                <input type="number" min={1}/>
            </label>
            <Button>Add user</Button>
        </form>
    );
}

export default FormInputs;