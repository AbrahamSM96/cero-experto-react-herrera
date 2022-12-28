import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValue({
      ...value,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setValue(initialState);
  };

  return { ...value, value, handleInputChange, onResetForm };
};
