import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
   <h1 className="text-sm font-bold mt-6">🗣️</h1>
      <h1 className="text-sm font-bold mb-6">YAPP STORE</h1>
      <div className="space-y-4">
        <Link to="/translator" className="block w-48 bg-black text-white text-xs py-2 text-center">
          Yapanese translator
        </Link>
        <Link to="/meme" className="block w-48 bg-black text-white text-xs py-2 text-center">
          Memegen
        </Link>
      </div>
    </div>
  );
}

export default IntroPage;
