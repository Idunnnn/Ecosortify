import clsx from "clsx";
import { Icon } from "@iconify/react";

export default function ToastAlert({ message, type = "success", show = false, onClose = () => {}, className, ...props }) {
  if (show && type === "success") {
    return (
      <div className="shadow-xxl fixed bottom-4 left-4 flex justify-between items-center right-4 md:max-w-[800px] bg-green-600 py-5 px-8 text-white rounded-lg text-sm md:text-base">
        <div className={clsx("flex gap-3 w-full md:w-fit  items-center md:mr-20", className)} {...props}>
          <Icon icon="qlementine-icons:success-16" className="w-5 h-5 hidden md:block" />

          <p className="pe-2">{message}</p>
        </div>
        <Icon
          onClick={onClose}
          icon="solar:close-square-linear"
          className="w-7 h-7 hover:text-[#e9e9e9] absolute  right-2 text-white hover:cursor-pointer"
        />
      </div>
    );
  }
  if (show && type === "danger") {
    return (
      <div className="fixed bottom-4 left-4 flex justify-between items-center right-4 md:w-fit  bg-red-600 py-5 px-8 text-white rounded-lg text-sm md:text-base">
        <div className={clsx("flex gap-3 w-full md:w-fit  items-center md:mr-20", className)} {...props}>
          <Icon icon="si:warning-line" className="w-5 h-5 hidden md:block" />

          <p className="pe-2">{message}</p>
        </div>
        <Icon
          onClick={onClose}
          icon="solar:close-square-linear"
          className="w-7 h-7 hover:text-[#e9e9e9] absolute  right-2 text-white hover:cursor-pointer "
        />
      </div>
    );
  }
}
