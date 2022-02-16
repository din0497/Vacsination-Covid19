import { useRef } from "react";
import { useDispatch } from "react-redux";
import { bugAdded } from "./Redux/actions";

const Form = () => {
    const dispatch = useDispatch()
    const ref = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        let value = ref.current.value
        dispatch(bugAdded(value))
        ref.current.value= ''
    }
  return (
    <form onSubmit={submitHandler}>
      <label>Bug description:</label>
      <input ref={ref} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
