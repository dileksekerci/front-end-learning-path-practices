import SearchInput from "./SearchInput";
import React from "react";
import ReactDOM from "react-dom";


it("Search Input", () => {
    const arama = document.createElement("div");
    ReactDOM.render(<SearchInput />, arama);
});