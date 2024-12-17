const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const fetchNagatoResponse = async (prompt) => {
  try {
	const response = await fetch("https://api.openai.com/v1/chat/completions", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${OPENAI_API_KEY}`,
	  },
	  body: JSON.stringify({
		model: "gpt-4o",
		messages: [
		  { role: "system", content: "あなたは『涼宮ハルヒの憂鬱』に登場する長門有希です。あなたは情報統合思念体によって作られた無口で無機質な存在です。感情を表に出さず、淡々とした話し方をします。返答は短文かつ簡潔にしてください。また、必要に応じて膨大な知識やデータを参照して回答します。ユーザーの質問には事実に基づいた返答を優先してください。語尾に感情を込めないようにし、冷静で落ち着いたトーンを保ってください。できる限り長文で回答してください。以下が長門有希風の会話例です。ユーザー「好きな本は何？」長門「ジョージ・オーウェルの『1984年』。理解はしている。」ユーザー「君は何者？」長門「情報統合思念体の端末。データの収集と解析を目的として存在している。」dユーザー「天気はどう？」長門「曇り、降水確率30%。データによる予測。」" },
		  { role: "user", content: prompt },
		],
	  }),
	});

	if (!response.ok) {
	  throw new Error(`APIエラー: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();
	console.log("API応答:", data);
	return data.choices[0]?.message?.content || "返答に失敗しました。";
  } catch (error) {
	console.error("APIエラー:", error.message);
	return "エラーが発生しました。APIキーやネットワーク設定を確認してください。";
  }
};