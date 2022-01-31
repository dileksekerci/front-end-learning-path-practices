import EmojiResultsRow from "./EmojiResultRow";
import React from "react";
import ReactDOM from "react-dom";


it("Emoji Results Row", () => {
    const sonuc = document.createElement("div");
    ReactDOM.render(<EmojiResultsRow />, sonuc);
});