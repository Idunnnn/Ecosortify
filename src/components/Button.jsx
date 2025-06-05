import clsx from "clsx";
import { Icon } from "@iconify/react";

export default function Button({ variant = "primary_lg", children, className, ...props }) {
  const variants = {
    rounded_primary_sm: "r-primary__sm body-7",
    rounded_primary_lg: "r-primary__lg body-6",

    rounded_secondary_sm: "r-secondary__sm body-7",
    rounded_secondary_lg: "r-secondary__lg body-6",

    primary_sm: "primary__sm body-7",
    primary_lg: "primary__lg heading-6",

    secondary_sm: "secondary__sm body-7",
    secondary_lg: "secondary__lg heading-6",

    google: "btn-google",

    figma_green_reversed: clsx(
      "body-6",
      "text-base",
      "font-normal",
      "leading-none",
      "tracking-normal",
      "w-[200px] h-[64px]",
      "px-10 py-5",
      "rounded-[8px]",
      "border border-white text-white",
      "hover:border-[#058C42] hover:text-[#058C42]",
      "active:border-[#058C42] active:text-[#058C42]",
      "transition-colors duration-200 ease-in"
    ),

    figma_green_solid: clsx(
      "body-6",
      "font-montserrat", 
      "text-base", // Untuk font-size: 16px (default Tailwind)
      "font-normal", // Untuk font-weight: 400
      "leading-none", // Untuk line-height: 100% (atau 'leading-[1]')
      "tracking-normal",
      "w-[200px] h-[64px]",
      "px-10 py-5",
      "rounded-[8px]",
      "bg-[#088D43] text-white",
      "hover:bg-[#0C6F39] active:bg-[#0C6F39]",
      "transition-colors duration-200 ease-in"
    ),

    // ✅ Varian baru (rounded pill, Login button)
    figma_green_pill: clsx(
      "body-6", // Jika 'body-6' sudah mengurus tipografi, biarkan saja.
      // Jika tidak, tambahkan kelas berikut:
      "font-montserrat", // Pastikan Montserrat dikonfigurasi di tailwind.config.js
      "text-base", // Untuk font-size: 16px (default Tailwind)
      "font-normal", // Untuk font-weight: 400
      "leading-none", // Untuk line-height: 100% (atau 'leading-[1]')
      "tracking-normal",
      "w-[131px] h-[52px]",
      "px-8 py-4",
      "rounded-full",
      "bg-[#088D43] text-white",
      "hover:bg-[#0C6F39] active:bg-[#0C6F39]",
      "transition-colors duration-200 ease-out"
    ),

    figma_green_outline_pill: clsx(
      "body-6", // Jika 'body-6' sudah mengurus tipografi, biarkan saja.
      // Jika tidak, tambahkan kelas berikut:
      "font-montserrat", // Pastikan Montserrat dikonfigurasi di tailwind.config.js
      "text-base", // Untuk font-size: 16px (default Tailwind)
      "font-normal", // Untuk font-weight: 400
      "leading-none", // Untuk line-height: 100% (atau 'leading-[1]')
      "tracking-normal",
      "w-[131px] h-[52px]",
      "px-8 py-4",
      "rounded-full",
      "border border-white text-white",
      "hover:border-[#058C42] hover:text-[#058C42]",
      "active:border-[#058C42] active:text-[#058C42]",
      "transition-colors duration-200 ease-out"
    ),

    figma_white_outline_pill: clsx(
      "body-6", // Jika 'body-6' sudah mengurus tipografi, biarkan saja.
      // Jika tidak, tambahkan kelas berikut:
      "font-montserrat", // Pastikan Montserrat dikonfigurasi di tailwind.config.js
      "text-base", // Untuk font-size: 16px (default Tailwind)
      "font-normal", // Untuk font-weight: 400
      "leading-none", // Untuk line-height: 100% (atau 'leading-[1]')
      "tracking-normal", // Untuk letter-spacing: 0%

      // Properti layout, border, hover, active yang sudah ada
      "w-[131px] h-[52px]",
      "px-8 py-4",
      "rounded-full",
      "border border-[#088D43] text-[#088D43]",
      "hover:border-[#0C6F39] hover:text-[#0C6F39]",
      "active:border-[#0C6F39] active:text-[#0C6F39]",
      "transition-colors duration-200 ease-out"
    ),
  };

  return (
    <button className={clsx(className, variants[variant])} {...props}>
      {variant === "google" && <Icon icon="devicon:google" width={"28"} />}
      {children}
    </button>
  );
}
