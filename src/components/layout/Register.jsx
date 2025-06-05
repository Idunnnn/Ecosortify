import { useState } from "react";
import FormCover from "../FormCover";
import PasswordInput from "@/components/PasswordInput";
import FormHeader from "../FormHeader";
import BaseInput from "@/components/BaseInput";
import Button from "@/components/Button";
import Link from "next/link";
import { continueWithGoogle, registerUser } from "@/firebase/firebaseClient";
import ToastAlert from "@/components/ToastAlert";
import { getFirebaseErrorMessage } from "@/utils/utils";
import { useRouter } from "next/router";
import { useUser } from "@/contexts/UserContext";

function passwordValidator(value) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(value);
}

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [error, setError] = useState(false);

  const { login } = useUser();
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    const isValid = passwordValidator(e.target.value);

    setError(!isValid);
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isValid = passwordValidator(password);

    if (!isValid) {
      setToastMessage(`Gunakan minimal 8 karakter yang terdiri dari huruf dan angka`);
      setToastType("danger");
      setShowToast(true);
      return null;
    }
    try {
      setLoading(true);
      await registerUser(fullName, email, password);

      setToastMessage(
        `Verification email has been sent to ${email}. Please check your inbox and activate your account to complete the registration`
      );
      setToastType("success");
      setShowToast(true);
    } catch (err) {
      setToastMessage(getFirebaseErrorMessage(err));
      setToastType("danger");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  const handleContinueWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await continueWithGoogle();
      login(result.data.user);
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex min-h-screen h-fit relative justify-center lg:justify-end">
      <FormCover />

      <ToastAlert show={showToast} onClose={() => setShowToast(false)} type={toastType} message={toastMessage} />
      <form
        onSubmit={handleRegister}
        className="flex flex-col p-8 max-w-[550px] lg:max-w-[40%] w-full lg:w-[40%] items-center justify-center"
      >
        <FormHeader title="Sign Up" subTitle={"Enter your detail below to create your account and get started"} />

        <div className="flex flex-col gap-5 mt-7 mb-10 w-full">
          <BaseInput
            onChange={handleFullName}
            required
            type="text"
            title="Full Name"
            id="full-name"
            placeholder="Please enter your full name"
          />
          <BaseInput
            onChange={handleEmail}
            required
            type="email"
            title="Email"
            id="email"
            placeholder="Please enter your email"
          />
          <PasswordInput
            onChange={handlePassword}
            required
            error={error}
            id="password"
            title="Password"
            placeholder="Please enter your password"
            form_text="Use at least 8 characters with a combination of letters and numbers."
          />
        </div>

        <div className="flex flex-col w-full ">
          <div className="flex flex-col gap-4">
            <Button
              disabled={loading}
              variant="primary_lg"
              id="sign-up"
              type="submit"
              className="flex justify-center disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg
                  className=" size-8 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Sign Up"
              )}
            </Button>
            <span className="body-7 text-center text-gray-900">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Sign in
              </Link>
            </span>
          </div>
          <div className="flex items-center my-4 body-8">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4  text-gray-500  whitespace-nowrap">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="google" type="button" onClick={handleContinueWithGoogle}>
            <p className="text-base">Continue with google</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
