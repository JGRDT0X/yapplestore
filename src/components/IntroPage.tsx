import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center my-12">
        <img src="/yapplestore.png" alt="Yapple Store Logo" className="w-5" />
        <h1 className="text-sm font-bold ml-2">yapple store</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/translator" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#61BB46] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">yapanese</span>
        </Link>

        <Link to="/meme" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#FDB827] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">memeyapper</span>
        </Link>

        <Link to="/" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#ff7700] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">yappernews</span>
        </Link>

        <Link to="/" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#ff1216] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">yappage</span>
        </Link>

        <Link to="/" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#fb1cff] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">yappage</span>
        </Link>

        <Link to="/" className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1abeff] rounded flex items-center justify-center mb-2">
            <span className="text-4xl">🗣️</span>
          </div>
          <span className="text-sm font-medium text-black italic">yappage</span>
        </Link>

      </div>
    </div>
  );
}

export default IntroPage;
