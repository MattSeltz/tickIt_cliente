export const Submit = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 rounded-md p-3 transition-transform hover:scale-105"
    >
      {children}
    </button>
  );
};
