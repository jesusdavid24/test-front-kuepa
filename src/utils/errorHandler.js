export const errorHandler = (error) => {
  const message = error.response.data.message;
  return message;
};
