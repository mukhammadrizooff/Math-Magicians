import './quote.css';

const Quote = () => {
  const quoteText = 'Mathematics is not about numbers equations, computations, or algorithms. It is about undersatanding.';
  const authorQuote = '-William paul Thurston';

  return (
    <div className="container-quote">
      <p>{quoteText}</p>
      <span>{authorQuote}</span>
    </div>
  );
};

export default Quote;
