import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useChat } from "ai/react";
import { useUser } from "@/contexts/UserContext";
import { getChatHistory, sendChatHistory } from "@/utils/routeHelper";

export default function Chat({ className }) {
  const { user } = useUser();
  const textareaRef = useRef(null);
  const bottomRef = useRef(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });
  const chatContainer = useRef(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedMessages, setSavedMessages] = useState([]);

  const scroll = () => {
    if (chatContainer.current) {
      const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
      if (scrollHeight >= scrollTop + offsetHeight) {
        chatContainer.current.scrollTo(0, scrollHeight + 200);
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, savedMessages]);

  useEffect(() => {
    if (input === "" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    scroll();
    if (messages.length < 2) return;

    const timer = setTimeout(() => {
      const sendLastPair = async () => {
        const lastTwo = messages.slice(-2);
        if (lastTwo[0].role === "user" && lastTwo[1].role === "assistant") {
          const lastTwo = messages.slice(-2);

          console.log(lastTwo);
          try {
            let response = await sendChatHistory(lastTwo, user.uid, user.token);
            console.log(response.message);
          } catch (err) {
            console.error(err.message);
          }
        }
      };
      sendLastPair();
    }, 2000);

    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        setLoading(true);
        if (!user?.uid || !user?.token) return;
        const response = await getChatHistory(user?.uid, user.token);
        const chatArray = response?.data?.chat ?? [];
        setSavedMessages(chatArray);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [user]);

  useEffect(() => {
    setActive(input.length > 0);
  }, [input]);

  const shouldShowWelcome = useMemo(() => {
    return savedMessages.length === 0 && messages.length === 0 && input.length === 0;
  }, [savedMessages, messages, input]);

  return (
    <>
      <main ref={chatContainer} className="mx-auto flex flex-col max-w-[700px] mb-32  w-full mt-5 gap-8 p-8 lg:p-0 ">
        {loading ? (
          <p className="text-center text-sm text-gray-500 ">Retrieves chat...</p>
        ) : savedMessages.length > 0 || messages.length > 0 ? (
          savedMessages.concat(messages).map((m) =>
            m.role === "user" ? (
              <div key={m.id} className="flex justify-end">
                <div className="flex gap-2 items-center">
                  <div className="bg-green-300 break-all shadow overflow-hidden text-gray-800 w-full max-w-[500px] rounded-2xl py-3 px-5 text-sm">
                    {m.content}
                  </div>
                  <div className="rounded-full w-[32px] h-[32px] overflow-hidden">
                    <img
                      src={user?.picture || "/images/default-user-profile.jpg"}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex justify-start">
                <div className="flex gap-2 items-center">
                  <div className="rounded-full w-[32px] h-[32px] overflow-hidden">
                    <img src="/images/chatbot-profile.jpg" alt="bot" className="w-full h-full object-fill" />
                  </div>
                  <div className="shadow text-gray-800 border border-gray-300 w-full max-w-[500px] rounded-2xl py-3 px-5 text-sm">
                    {m.content}
                  </div>
                </div>
              </div>
            )
          )
        ) : shouldShowWelcome ? (
          <div className="text-center text-gray-700 mt-20">
            <img src="/images/welcome-bot.gif" alt="Welcome" className="w-44 h-44 mx-auto mb-4" />
            <p className="text-lg">
              Hai, aku <strong>SortiBot</strong>! 🌱
            </p>
            <p className="text-sm text-gray-600">Tanya apa saja tentang edukasi sampah ya!</p>
          </div>
        ) : null}

        <div ref={bottomRef} />
      </main>

      <form
        onSubmit={handleSubmit}
        className={clsx(
          "md:max-w-[700px] md:w-full fixed flex gap-2 items-center bottom-6 left-5 py-3 px-3 right-5 md:left-1/2 md:-translate-x-1/2 transform rounded-2xl transition-all duration-100 shadow-lg overflow-hidden",
          active ? "bg-white border border-green-600" : "bg-white border border-green-300",
          className
        )}
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          required
          className="w-full max-h-50 overflow-y-auto resize-none p-3 focus:outline-none  text-sm"
          placeholder="Tanyakan sesuatu..."
          rows={1}
        />

        <button
          type="submit"
          disabled={input.length === 0}
          className="p-2 z-1 bg-green-700 rounded-full hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <Icon icon="majesticons:arrow-up-line" className="text-white w-6 h-6" />
        </button>
      </form>
    </>
  );
}
