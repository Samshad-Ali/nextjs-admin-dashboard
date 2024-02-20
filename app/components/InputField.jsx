'use client'
const InputField = ({ type, placeholder, name, register, errors }) => {
  return (
    <>
      <input
        className="shadow-sm shadow-primaryClr  bg-primaryClr pl-2 p-1 text-sm rounded-sm outline-none placeholder:text-sm"
        type={type}
        placeholder={placeholder}
        name={name}
        {
          ...register(name)
        }
      />
      {errors[name] && <span className="text-xs text-red-500">{errors[name].message}</span>}
    </>
  );
};

export default InputField;
