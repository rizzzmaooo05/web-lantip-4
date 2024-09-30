"use client";

import { useState, useEffect } from "react";

import getAnswerGroq from "../../../../libs/getAnswerGroq";

export default function TanyaSmalan() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function getAnswer() {
    const yourAnswer = await getAnswerGroq(prompt);
    setAnswer(yourAnswer);
  }

  useEffect(
    function () {
      const answerWrapper = document.getElementById("answer-wrapper");
      const answerTextArea = document.getElementById("answer-textarea");

      if (answer) {
        answerWrapper.classList.remove("hidden");
        answerWrapper.classList.add("flex");
        answerTextArea.value = answer;
        answerTextArea.style.height = answerTextArea.scrollHeight.toString() + 'px';
      }
    },
    [answer]
  );

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 text-primary">
      <h3 className="self-start w-full text-2xl font-bold mb-4">
        Tanya Smalan
      </h3>
      <p className="self-start w-full text-justify mb-4">
        Di jaman yang sudah sangat canggih ini, sekarang marak penggunaan dari
        Kecerdasan Buatan atau Artificial Intelligence (AI). Salah satu
        penerapan AI adalah dalam bentuk chatbot, di mana AI tersebut dalam
        memberikan output sesuai dengan perintah yang di-input oleh pengguna.
        Pada website ini, kamu juga mencoba untuk menerapkan AI Chatbot.
        Pengguna dapat memberikan perintah apapun yang kemudian AI akan mencoba
        menjawab perintah yang di-input oleh pengguna. AI Chatbot kami ini
        dinamakan "Tanya Smalan Bot".
      </p>
      <div className="w-full flex flex-col p-2 mb-2 border-[2px] border-primary rounded-md gap-1">
        {prompt && (
          <label htmlFor="prompt" className="font-bold">
            Input Dari Pengguna
          </label>
        )}
        <textarea
          className="outline-none h-36"
          id="prompt"
          placeholder="Input Dari Pengguna"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button
        className="w-full p-1 mb-10 bg-primary text-white rounded-sm font-bold"
        id="kirim"
        onClick={getAnswer}
      >
        Kirim
      </button>

      <div
        className="w-full flex-col p-2 mb-2 border-[2px] border-primary rounded-md gap-1 hidden"
        id="answer-wrapper"
      >
        <label htmlFor="answer-bot" className="font-bold" id="label-answer-bot">
          Output Dari Tanya Smalan Bot
        </label>
        <textarea className="outline-none text-justify" id="answer-textarea" readOnly />
      </div>
    </div>
  );
}
