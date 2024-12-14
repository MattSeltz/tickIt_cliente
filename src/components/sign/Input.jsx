export const Input = ({ children, type, value, setValue }) => {
  return (
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-10 sm:items-center">
      <label htmlFor={children.toLowerCase()}>{children}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        name={children.toLowerCase()}
        id={children.toLowerCase()}
        placeholder={children}
        className="rounded-md p-3 text-black"
      />
    </div>
  );
};
