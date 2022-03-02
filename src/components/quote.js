import './pages.css';

const Quote = () => {
  const quoteText = '“Live as if you were to die tomorrow. Learn as if you were to live forever.”';
  const authorQuote = '– Mahatma Gandhi';

  return (
    <div className="container-quote">
      <p>{quoteText}</p>
      <span>{authorQuote}</span>
    </div>
  );
};

export default Quote;
