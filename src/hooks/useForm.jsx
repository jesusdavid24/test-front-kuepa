import { useState } from 'react';

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, id: ratingId } = e.target;

    if (name === 'rating') {
      const id = parseInt(ratingId);

      return setForm({
        ...form,
        rating: id,
      });
    }

    setForm({
      ...form,
      [name]:
        name === 'booking_persons' ? (value ? parseInt(value) : '') : value,
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return { form, handleChange, resetForm, setForm };
};
