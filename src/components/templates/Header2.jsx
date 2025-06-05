import clsx from "clsx";
import Button from "@/components/Button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { logout } from "@/firebase/firebaseClient";
import { useRouter } from "next/router";
import ToastAlert from "@/components/ToastAlert";

export default function Header2({ className, ...props }) {
  const [show, setShow] = useState(false);
  const { user, removeSession } = useUser();
  const [showProfile, setShowProFile] = useState(false);
  const router = useRouter();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const logoutHandler = async () => {
    try {
      await logout();
      removeSession();
      router.reload();
    } catch (err) {
      setToastMessage(`${err.message}`);
      setToastType("danger");
      setShowToast(true);
      console.error(err);
    }
  };

  const showProfileHandler = () => {
    setShowProFile(!showProfile);
  };

  const navbarHander = () => {
    setShow(!show);
  };
  return (
    <>
      <ToastAlert show={showToast} onClose={() => setShowToast(false)} type={toastType} message={toastMessage} />
      <header className={clsx("hidden xl:block z-2", className)}>
        <div className="flex justify-between px-[100px] relative py-5 border-b-1 border-b-gray-200 items-center">
          <Link href="/" className="flex items-start max-w-[188px]">
            <img src="/images/logo.png" alt="logo" />
          </Link>

          <ul className="flex gap-8 body-6 absolute left-1/2 -translate-x-1/2">
            <li className="group relative inline-block cursor-pointer">
              <Link href="/" className="text-black">
                Home
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/scan" className="text-black">
                Scan
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/guide" className="text-black">
                Guide
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/chatbot" className="text-black">
                Chatbot
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/about" className="text-black">
                About
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
          </ul>
          <div className="flex gap-3">
            {user ? (
              <div className="relative">
                <div className="overflow-hidden rounded-full w-9 h-9 hover:cursor-pointer" onClick={showProfileHandler}>
                  <img
                    src={user.picture ? user.picture : "/images/default-user-profile.jpg"}
                    alt="user-profile"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* show Profile */}
                <ul
                  className={
                    showProfile
                      ? "opacity-100 transition duration-75 flex flex-col rounded-lg  border-gray-300 border shadow-lg mt-3 absolute top-full z-10 bg-white w-[250px] left-0 dan -translate-x-1/2"
                      : "opacity-0 transition duration-75 flex flex-col rounded-lg  border-gray-300 border shadow-lg mt-3 absolute top-full z-10 bg-white w-[250px] left-0 dan -translate-x-1/2"
                  }
                >
                  <h2 className="px-4 py-4 font-semibold text-lg truncate border-b-gray-300 border-b-1 mb-2">Profile </h2>
                  <li className="px-4 py-3 body-7 text-[#292929] flex items-center gap-2 ">
                    <Icon icon="mdi-light:email" className="w-4 h-4"></Icon>
                    <p className="truncate"> {user.email}</p>
                  </li>
                  <li className="px-4 py-3 body-7 text-[#292929] flex items-center gap-2">
                    <Icon icon="solar:user-outline" className="w-4 h-4"></Icon>
                    <p className="truncate"> {user.name}</p>
                  </li>

                  <li className="px-4 py-3 body-7 border-t-gray-300 border-t-1 mt-2">
                    <button
                      onClick={logoutHandler}
                      className="py-3 px-4 rounded bg-gray-200 w-full hover:bg-gray-300 active:bg-gray-400 flex gap-1 items-center justify-center"
                    >
                      <p>Logout</p>
                      <Icon icon="ic:round-logout"></Icon>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="rounded_secondary_lg" className="text-black border-black">
                    Register
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="rounded_primary_lg">Login</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
        <header className={clsx("block xl:hidden z-2 bg-white ", className)}>
          <div className="flex justify-between px-5 relative py-5 border-b-1 border-b-gray-200 items-center bg-white">
          <Link href="/" className="flex items-start max-w-[150px]">
            <img src="/images/logo.png" alt="logo" />
          </Link>

          <ul
            className={
              show
                ? "transition-all duration-75 flex flex-col body-6 absolute top-full bg-white w-full z-2 left-0 right-0  shadow"
                : "hidden transition-all  duration-75  flex-col body-6 absolute top-full bg-white w-full left-0 right-0  shadow -z-10"
            }
          >
            <Link
              href="/"
              className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center"
            >
              <p>Home</p>
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
            </Link>

            <Link
              href="/scan"
              className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center"
            >
              <p>Scan</p>
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
            </Link>

            <Link
              href="/guide"
              className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center"
            >
              <p>Guide</p>
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
            </Link>

            <Link
              href="/chatbot"
              className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center"
            >
              <p>Chatbot</p>
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
            </Link>
            <Link
              href="/about"
              className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center"
            >
              <p>About Us</p>
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
            </Link>

            {!user && (
              <li className="p-5 flex gap-2 lg:hidden">
                <Link href="/login">
                  <Button variant="primary_sm">Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="secondary_sm" className="text-gray-600 border-gray-600 border">Register</Button>
                </Link>
              </li>
            )}
          </ul>

          <div className="flex gap-4 items-center">
            {user ? (
              <div className="relative">
                <div className="overflow-hidden rounded-full w-9 h-9 hover:cursor-pointer" onClick={showProfileHandler}>
                  <img
                    src={user.picture ? user.picture : "/images/default-user-profile.jpg"}
                    alt="user-profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* show Profile */}
                <ul
                  className={
                    showProfile
                      ? "opacity-100 pointer-events-auto transition duration-200 flex flex-col rounded-lg border-gray-300 border shadow-lg mt-3 absolute top-full z-50 bg-white w-[180px] left-1/2 -translate-x-1/2"
                      : "opacity-0 pointer-events-none transition duration-200 flex flex-col rounded-lg border-gray-300 border shadow-lg mt-3 absolute top-full z-50 bg-white w-[180px] left-1/2 -translate-x-1/2"
                  }
                >
                  <h2 className="px-4 py-4 font-semibold text-lg truncate border-b-gray-300 border-b-1 mb-2">Profile </h2>
                  <li className="px-4 py-3 body-8 text-[#292929] flex items-center gap-2 ">
                    <Icon icon="mdi-light:email" className="w-4 h-4"></Icon>
                    <p className="truncate"> {user.email}</p>
                  </li>
                  <li className="px-4 py-3 body-8 text-[#292929] flex items-center gap-2">
                    <Icon icon="solar:user-outline" className="w-4 h-4"></Icon>
                    <p className="truncate"> {user.name}</p>
                  </li>

                  <li className="px-4 py-3 body-7 border-t-gray-300 border-t-1 mt-2">
                    <button
                      onClick={logoutHandler}
                      className="py-3 px-4 rounded bg-gray-200 w-full hover:bg-gray-300 active:bg-gray-400 flex gap-1 items-center justify-center"
                    >
                      <p>Logout</p>
                      <Icon icon="ic:round-logout"></Icon>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login" className="hidden lg:block">
                <Button variant="primary_sm">Login</Button>
              </Link>
            )}

            <Icon icon="icon-park-outline:hamburger-button" className="h-10 w-10 hover:cursor-pointer" onClick={navbarHander} />
          </div>
        </div>
      </header>
    </>
  );
}
