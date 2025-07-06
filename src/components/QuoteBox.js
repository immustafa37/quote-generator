import React, { useEffect, useState } from "react";
import quotesData from "../data/quotes.json";

function QuoteBox() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[random]);
  };

  const shareQuote = () => {
    const text = `"${quote.text}" — ${quote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const shareWhatsApp = () => {
    const text = `"${quote.text}" — ${quote.author}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <div className="buttons">
        <button onClick={generateQuote}>New Quote</button>
        <button onClick={shareQuote}>Twitter</button>
        <button onClick={shareWhatsApp}>WhatsApp</button>
      </div>
    </div>
  );
}

export default QuoteBox;