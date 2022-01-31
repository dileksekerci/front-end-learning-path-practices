
//import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from "react";
import ReactDOM from "react-dom";


it("baslik sayfasi", () => {
    const baslik = document.createElement("header");
    ReactDOM.render(<Header />, baslik);
});

