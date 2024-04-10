import { useState } from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  const [isFocus, setInFocus] = useState(false);

  const handleFocus = () => {
    setInFocus(true);
  };

  const handleBlur = () => {
    setInFocus(false);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`w-full px-3 py-2 border rounded-md ${
          isFocus ? "border-blue-500" : "border-gray-300"
        } 
          focus:outline-none focus:border-blue-500 ${
            errorMessage ? "border-red-500" : ""
          }`}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs italic mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputComponent;