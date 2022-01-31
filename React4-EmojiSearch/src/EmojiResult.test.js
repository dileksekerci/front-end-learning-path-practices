import EmojiResults from "./EmojiResults";
import React from "react";
import ReactDOM from "react-dom";


it("Emoji Results", () => {
    const sonuc1 = document.createElement("div");
    ReactDOM.render(<EmojiResults />, sonuc1);
});