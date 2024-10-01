import Groq from "groq-sdk";

const apiKey = "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";
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

export default async function getAnswerGroq(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Kamu adalah chatbot super canggih yang dapat menjawab perintah atau prompt apapun dari pengguna, dalam hal ini, penggunanya adalah saya. Pengguna ingin mengirimkan perintah atau prompt kepada kamu, promptnya adalah "${prompt}", Jawablah prompt tersebut dengan sebaik mungkin menggunakan bahasa Indonesia. Jawaban dari prompt tersebut harus diawali dengan kalimat "Terima kasih sudah bertanya, saya Tanya Smalan Bot akan berusaha menjawab pertanyaan tersebut.", kemudian dilanjutkan dengan jawaban dari prompt yang diajukan pengguna`,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 1
  });
  return chatCompletion.choices[0]?.message?.content || "No Answer";
}

