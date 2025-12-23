"use client";
import React, { useState } from "react";

export default function ChatFrame({ name }: { name?: string }) {
  const [messages, setMessages] = useState<{ id: number; text: string; fromMe?: boolean }[]>([
    { id: 1, text: `Hi ${name || "there"}! Welcome to my 3D corner.`, fromMe: false },
  ]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    const next = { id: Date.now(), text: text.trim(), fromMe: true };
    setMessages((s) => [...s, next]);
    setText("");
    // simple echo for UX demo
    setTimeout(() => {
      setMessages((s) => [...s, { id: Date.now() + 1, text: "Thanks — I got your message!", fromMe: false }]);
    }, 600);
  };

  return (
    <div className="w-full max-w-md bg-zinc-900/60 border border-zinc-700 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm text-zinc-300 font-semibold">Message</div>
          <div className="text-xs text-zinc-500">Chat with {name || "me"}</div>
        </div>
        <div className="text-xs text-zinc-500">online</div>
      </div>

      <div className="h-40 overflow-y-auto mb-3 flex flex-col gap-2">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`py-2 px-3 rounded-md max-w-[85%] ${m.fromMe ? "ml-auto bg-emerald-600/20 text-emerald-200" : "bg-zinc-800 text-zinc-200"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          className="flex-1 bg-transparent border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none"
          placeholder="Write a message..."
        />
        <button
          onClick={send}
          className="px-3 py-2 rounded-md bg-emerald-500 text-black text-sm font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}
