import React from "react";
import Chat from "./components/Chat";

function App() {
  return (
	<div className="App">
	  <h1>Yuki NAGATO.Chat</h1>
	  <div className="wrapper">
		<div className="container comment-box">
		  この銀河を統括する情報統合思念体によって造られた対有機生命体コンタクト用ヒューマノイド・インターフェース、それがわたし。
		</div>
		<div className="container">
		  <Chat />
		</div>
	  </div>
	</div>
  );
}

export default App;