import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">YAP</h1>
      <div className="space-y-4">
        <Link to="/translator" className="block w-48 bg-black text-white text-xs py-2 text-center">
          Go to Translator
        </Link>
        <Link to="/meme" className="block w-48 bg-black text-white text-xs py-2 text-center">
          Go to Meme Generator
        </Link>
      </div>
    </div>
  );
}

export default IntroPage;
