import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function PasswordInput({ id, form_text, title, error = false, showStrength = true, className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");


  return (
    <div className="input__wrapper">
      <label className="text-secondary-dark font-semibold" htmlFor={id}>
        {title}
      </label>

      <div className="flex flex-col gap-1">
        <div className="relative">
          <input
            id={id}
            type={showPassword ? "text" : "password"}
            className={clsx(
              "py-4 px-8 border border-[#d9d9d9] rounded placeholder:text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-600 transition duration-100",
              className
            )}
        
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            
          >
            <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} className="w-5 h-5" />
          </button>
        </div>

        {form_text && <span className={error ? "text-red-600 body-8 pl-1" : "text-secondary-dark body-8 pl-1"} >{form_text}</span>}

   
      </div>
    </div>
  );
}
