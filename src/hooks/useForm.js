import { useState } from "react";


const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const onChageHandelr = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const resetForm = () => {
    setFormState(initialState);
  }

  return {formState, onChageHandelr, resetForm}
};

export default useForm;