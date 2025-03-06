const InputField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className="block text-base font-semibold text-dark2d mb-2"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-4 border border-white/50 rounded-xl bg-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-md shadow-lg"
          {...props}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-4 border border-white/50 rounded-xl bg-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-md shadow-lg"
          required={required}
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
