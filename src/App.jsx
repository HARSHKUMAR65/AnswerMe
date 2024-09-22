import { useState } from 'react';
import useGetResponse from './hooks/useGetData';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const getResponse = useGetResponse();

  const handleSubmit = async () => {
    if (question) {
      setLoading(true);
      const answer = await getResponse(question);
      setResponse(answer);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="bg-white w-full text-indigo-600 text-center py-6 text-3xl font-extrabold shadow-lg animate-bounce">
        Ask Your Question
      </header>

      {/* Input and Submit Button */}
      <div className="w-full max-w-lg mt-10 bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-shadow"
        />

        <button
          onClick={handleSubmit}
          className={`mt-4 w-full p-4 rounded-lg text-white font-semibold transition-colors duration-300 ease-in-out ${loading ? 'bg-gray-400' : 'bg-indigo-600'} hover:bg-indigo-700 disabled:cursor-not-allowed`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>

      {/* Response Section */}
      {response && (
        <div className="w-full max-w-lg mt-8 p-6 bg-white rounded-lg shadow-lg opacity-0 animate-fadeIn">
          <h3 className="text-xl font-bold text-indigo-600">Response:</h3>
          <p className="mt-2 text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
