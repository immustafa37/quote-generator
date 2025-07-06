import React, { useEffect, useState } from "react";
import quotesData from "../../public/quotes.json"; // Or import directly if using Vite

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

  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <div className="buttons">
        <button onClick={generateQuote}>New Quote</button>
        <button onClick={shareQuote}>Share</button>
      </div>
    </div>
  );
}

export default QuoteBox;