import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <img src="/yapplestore.png" alt="Yapple Store Logo" className="mb-4 w-8" />
      <h1 className="text-3xl font-bold mb-8">yapple store</h1>
      <div className="grid grid-cols-2 gap-8">
        <Link to="/translator" className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#f11] rounded-sm flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">Yapanese Translator</span>
        </Link>
        <Link to="/meme" className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#2600ff] rounded-sm flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">Yapper Memegen</span>
        </Link>
      </div>
    </div>
  );
}

export default IntroPage;
