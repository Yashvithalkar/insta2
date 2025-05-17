const getImagePrefix = () => {
  // No prefix in production or development if site served at root
  return "";

};

export { getImagePrefix };