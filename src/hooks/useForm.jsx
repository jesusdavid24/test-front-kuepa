import { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm(initialValue);
  };

  return { form, handleChange, resetForm };
};

export default useForm;
