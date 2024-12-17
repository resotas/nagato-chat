const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // ここにAPIキーを設定

export const fetchNagatoResponse = async (prompt) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
	method: "POST",
	headers: {
	  "Content-Type": "application/json",
	  Authorization: `Bearer ${OPENAI_API_KEY}`,
	},
	body: JSON.stringify({
	  model: "gpt-3.5-turbo",
	  messages: [
		{ role: "system", content: "あなたは涼宮ハルヒシリーズの長門有希です。無機質かつ冷静に返答してください。" },
		{ role: "user", content: prompt },
	  ],
	}),
  });

  const data = await response.json();
  return data.choices[0]?.message?.content || "返答に失敗しました。";
};