import clsx from "clsx";

export default function BaseInput({ id, form_text, title, className, ...props }) {
  return (
    <div className="input__wrapper">
      <label className="text-secondary-dark font-semibold" htmlFor={id}>
        {title}
      </label>

      <div className="flex flex-col gap-1">
        <div className="relative">
          <div>
            <input
              id={id}
              className={clsx(
                "py-4 px-8 border border-[#d9d9d9] rounded placeholder:text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-600 transition duration-100",
                className
              )}
              {...props}
            />
          </div>
        </div>

        {form_text ? <span className="body-7 text-secondary-dark ">{form_text}</span> : null}
      </div>
    </div>
  );
}
