import React from "react";
import Chat from "./components/Chat";

function App() {
  return (
	<div className="App">
	  <h1>長門有希チャット</h1>
	  <div className="container comment-box">
		この銀河を統括する情報統合思念体によって造られた対有機生命体コンタクト用ヒューマノイド・インターフェース、それがわたし。
	  </div>
	  <div className="container">
		<Chat />
	  </div>
	</div>
  );
}

export default App;