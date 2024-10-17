import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const SPECIAL_WORDS: { [key: string]: string } = {
  'airdrop': 'yapdrop',
  'algorithm': 'yapgorithm',
  'alpha': 'yappha',
  'aesthetic': 'yapesthetic',
  'ape': 'yape',
  'aped': 'yaped',
  'application': 'yapplication',
  'apricot': 'yapricot',
  'ATH': 'YAPTH',
  'atmosphere': 'yapmosphere',
  'bagholder': 'yapholder',
  'bearish': 'yapish',
  'blockchain': 'yapchain',
  'bullish': 'yaplish',
  'capital': 'yapital',
  'capitulation': 'yapitulation',
  'consensus': 'yapsensus',
  'cross-chain': 'yapcross-chain',
  'cryptocurrency': 'yaptopcurrency',
  'decentralized': 'yapcentralized',
  'DeFi': 'YapFi',
  'derivative': 'yaperivative',
  'diamond': 'yapmond',
  'dividend': 'yapidend',
  'dump': 'yadump',
  'dust': 'yapdust',
  'equity': 'yapquity',
  'exchange': 'yapchange',
  'fiat': 'yapiat',
  'flippening': 'yappenning',
  'fork': 'yapfork',
  'friend': 'yapper',
  'fren': 'yapper',
  'frenz': 'yapper',
  'gas': 'yap',
  'governance': 'yapvernance',
  'happening': 'yappening',
  'happiness': 'yappiness',
  'happy': 'yappy',
  'hash': 'yap',
  'hashrate': 'yaprate',
  'HODL': 'YODL',
  'ICO': 'YAPCO',
  'impermanent': 'yapmanent',
  'inflation': 'yapflation',
  'interest': 'yapterest',
  'investment': 'yapvestment',
  'japan': 'yapan',
  'japanese': 'yapanese',
  'ledger': 'yapger',
  'liquidity': 'yapidity',
  'majestic': 'yapestic',
  'margin': 'yapgin',
  'market': 'yapket',
  'metaverse': 'yapaverse',
  'mining': 'yapning',
  'minting': 'yapting',
  'moon': 'yap',
  'moonboy': 'yapboy',
  'NGMI': 'YAPMI',
  'september': 'yaptober',
  'october': 'yaptober',
  'november': 'yaptober',
  'december': 'yaptober',
  'optimistic': 'yaptimistic',
  'paper': 'yaper',
  'portfolio': 'yapfolio',
  'profit': 'yapfit',
  'protocol': 'yaptocol',
  'pump': 'yapump',
  'rug': 'yap',
  'rug pull': 'yap pull',
  'sats': 'yaps',
  'shitcoin': 'yapcoin',
  'smart contract': 'yapart contract',
  'sniper': 'yapper',
  'speak': 'yap',
  'staking': 'yapking',
  'talk': 'yap',
  'talking': 'yaping',
  'timeless': 'yapless',
  'tokenomics': 'yapenomics',
  'trading': 'yapding',
  'transaction': 'yapaction',
  'volatility': 'yaptility',
  'WAGMI': 'YAPMI',
  'wallet': 'yaplet',
  'white': 'yap',
  'whitelist': 'yaplist',
  'yield': 'yapld',
  'zk': 'yap',
  'zkproof': 'yapproof',
  'yapanese': 'yapanese',
  'capture': 'yapture',
  'apocalypse': 'yapocalypse',
  'capitalism': 'yapitalism',
  'cappuccino': 'yappuccino',
  'captain': 'yaptain',
  'apprehend': 'yapprehend',
  'caterpillar': 'yapterpillar',
  'capability': 'yapability',
  'capitulate': 'yapitulate',
  'apparel': 'yapparel',
  'laptop': 'yaptop',
  'capsize': 'yapsize',
  'appraisal': 'yappraisal',
  'capstone': 'yapstone',
  'astronaut': 'yapronaut',
  'captivator': 'yaptivator',
  'captain america': 'yaptain america',
  'capricorn': 'yapicorn',
  'godzilla': 'yapzilla',
  'snapchat': 'yapchat',
  'capitalist': 'yapitalist',
  'capitalistic': 'yapitalistic',
  'captured': 'yaptured',
  'capturing': 'yapturing',
  'apprehension': 'yapprehension',
  'apprehensive': 'yapprehensive',
  'capable': 'yapable',
  'captivate': 'yaptivate',
  'captivating': 'yaptivating',
  'captivation': 'yaptivation',
  'optional': 'yaptional',
  'optionally': 'yaptionally',
  'fantastic': 'yaptastic',
  'fantastically': 'yaptastically',
};

function yapifyWord(word: string): string {
  const lowerWord = word.toLowerCase();
  
  // Check for special words (singular or plural)
  if (SPECIAL_WORDS[lowerWord]) {
    return SPECIAL_WORDS[lowerWord];
  }

  // Check for plural forms of special words
  if (lowerWord.endsWith('s')) {
    const singular = lowerWord.slice(0, -1);
    if (SPECIAL_WORDS[singular]) {
      const yapWord = SPECIAL_WORDS[singular];
      return yapWord.endsWith('s') ? yapWord : yapWord + 's';
    }
  }

  // If no special rule applies, return the original word
  return word;
}

function translateToYapanese(text: string): string {
  const words = text.split(/\b/);
  return words.map((word: string) => {
    if (/^[a-z]+$/i.test(word)) {
      const yapWord = yapifyWord(word);
      return word[0].toUpperCase() === word[0] ? yapWord.charAt(0).toUpperCase() + yapWord.slice(1) : yapWord;
    }
    return word;
  }).join('');
}

export default function YapaneseTranslator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    setOutput(translateToYapanese(input));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Yapanese Translator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Enter text to translate"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleTranslate} className="w-full">
              Translate to Yapanese
            </Button>
            {output && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Yapanese Translation:</h3>
                <p className="mt-2 p-2 bg-gray-200 rounded">{output}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
