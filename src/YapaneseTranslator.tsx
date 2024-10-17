import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

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
  'talked': 'yaped',
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
  'peep': 'yapper',
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

const YAP_LEXICON = [
    {
      "word": "Yapanese",
      "pronunciation": "/ya-puh-neez/",
      "gender": "neut",
      "definition": "The yapper's language whispered by Macronesian"
    },
    {
      "word": "Yapital",
      "pronunciation": "/ya-pi-tal/",
      "gender": "masc",
      "definition": "Yap currency of the Macronesian empire. More stable than rial iranien."
    },
    {
      "word": "Yapture",
      "pronunciation": "/ya-p-ture/",
      "gender": "fem",
      "definition": "What happens when your bag moons and you capture that sweet profit. Usually followed by ‘rekt’ if you miss it."
    },
    {
      "word": "Yapocalypse",
      "pronunciation": "/ya-pok-uh-lips/",
      "gender": "fem",
      "definition": "The total collapse of all memecoins. Usually happens every Friday night after too many liquidations."
    },
    {
      "word": "Yapitalism",
      "pronunciation": "/ya-pi-tal-iz-um/",
      "gender": "masc",
      "definition": "Economic system where yapping about your bags makes them grow. Zero work, 100% hopium."
    },
    {
      "word": "Yappuccino",
      "pronunciation": "/ya-pu-chee-noh/",
      "gender": "masc",
      "definition": "The preferred drink of degens who pretend they’ve been awake since 5am trading charts. Just vibes, no substance."
    },
    {
      "word": "Yaptain",
      "pronunciation": "/ya-payn/",
      "gender": "masc",
      "definition": "The fearless leader of a pump group. Known for commanding whales and dodging SEC subpoenas."
    },
    {
      "word": "Yapprehend",
      "pronunciation": "/ya-pre-hend/",
      "gender": "neut",
      "definition": "What happens when the authorities catch your wallet after that totally not-a-rug memecoin. You’ve been yapprehended!"
    },
    {
      "word": "Yapterpillar",
      "pronunciation": "/ya-p-ter-pill-er/",
      "gender": "masc",
      "definition": "A degen caterpillar that evolves into a majestic pump-and-dump butterfly. Blink and you'll miss the transformation."
    },
    {
      "word": "Yapability",
      "pronunciation": "/ya-pa-bi-li-tee/",
      "gender": "neut",
      "definition": "Your ability to hold strong hands while yapping on crypto Twitter. The stronger your Yapability, the longer you HODL."
    },
    {
      "word": "Yapitulate",
      "pronunciation": "/ya-pit-u-late/",
      "gender": "neut",
      "definition": "What happens when you sell the dip, thinking it’s the end of crypto forever. Spoiler: you sold right before it mooned."
    },
    {
      "word": "Yapparel",
      "pronunciation": "/ya-puh-rel/",
      "gender": "neut",
      "definition": "The essential clothing for degens: oversized hoodies with logos of coins that are 90% down from their ATH."
    },
    {
      "word": "Yaptop",
      "pronunciation": "/ya-top/",
      "gender": "masc",
      "definition": "A laptop used exclusively for trading memecoins and shitposting. Never used for ‘real’ work."
    },
    {
      "word": "Yapsize",
      "pronunciation": "/ya-size/",
      "gender": "neut",
      "definition": "The measurement of how big your bags are. Bigger yapsize equals more Twitter clout."
    },
    {
      "word": "Yappraisal",
      "pronunciation": "/ya-pray-zal/",
      "gender": "fem",
      "definition": "The completely made-up valuation you give your worthless NFT while trying to flip it to some poor noob."
    },
    {
      "word": "Yapstone",
      "pronunciation": "/ya-p-stone/",
      "gender": "masc",
      "definition": "The cornerstone of your portfolio, aka the one memecoin you refuse to sell, even though everyone tells you it's dead."
    },
    {
      "word": "Yapronaut",
      "pronunciation": "/ya-p-ro-naut/",
      "gender": "masc",
      "definition": "An explorer of the memecoin universe. They hold until their bags hit the moon or burn up in the atmosphere."
    },
    {
      "word": "Yaptional",
      "pronunciation": "/ya-p-shun-al/",
      "gender": "neut",
      "definition": "Optional, but only if you don’t want to make it. Degen rule: Always choose Yaptional."
    },
    {
      "word": "Yaptivator",
      "pronunciation": "/ya-p-ti-va-tor/",
      "gender": "masc",
      "definition": "A degen influencer who activates a pump with a single tweet. Hashtag: #YapRising"
    },
    {
      "word": "Yaptain America",
      "pronunciation": "/ya-payn uh-meh-ri-kuh/",
      "gender": "masc",
      "definition": "The superhero degens look up to: fights for freedom from fiat, with a shield made of memecoins. Probably rekt."
    },
    {
      "word": "Yapicorn",
      "pronunciation": "/ya-pi-korn/",
      "gender": "neut",
      "definition": "A memecoin startup that claims it’ll be the next $1B unicorn but is more likely to rug. Glitter and dreams, zero fundamentals."
    },
    {
      "word": "Yapzilla",
      "pronunciation": "/ya-p-zil-luh/",
      "gender": "masc",
      "definition": "A gigantic whale that wrecks the market whenever they sell. Fear him, or watch him burn your bags."
    },
    {
      "word": "Yap-tastic",
      "pronunciation": "/ya-tas-tic/",
      "gender": "neut",
      "definition": "Anything absolutely fabulous in the Yap world. Used to describe perfect degen moves. ‘That 100x was Yap-tastic, fren!’"
    },
    {
      "word": "Yapchat",
      "pronunciation": "/ya-p-chat/",
      "gender": "neut",
      "definition": "A messaging platform where degens yap endlessly about the next pump, mostly memes, barely any real alpha."
    }
  ];

// Add this new array of random yap questions
const YAP_QUESTIONS = [
  "Why do moonboys always wear spacesuits to bed?",
  "If a blockchain could sneeze, would it be called a block-achoo?",
  "How many Yapanese does it take to HODL a lightbulb?",
  "What's the average airspeed velocity of an unladen NFT?",
  "If you stake spaghetti, do you get pasta rewards?",
  "Can you mine bitcoin with a pickaxe made of diamond hands?",
  "What's the APY on staking your hopes and dreams?",
  "If a bear market falls in the forest and no one is around to panic sell, does it make a sound?",
  "How many decimals of Pi do you need to calculate the perfect rug pull timing?",
  "If you wrap your hardware wallet in tinfoil, does it become quantum-resistant?",
  "What's the gas fee for sending good vibes on the Ethereum network?",
  "If you stake your crypto long enough, does it eventually turn into a fine wine?",
  "How many YapFi protocols does it take to decentralize a light bulb?",
  "What's the carbon footprint of a single 'gm' tweet?",
];

export default function YapaneseTranslator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    setOutput(translateToYapanese(input));
  };

  // Modified function to set the output instead of input
  const generateYapQuestion = () => {
    const randomIndex = Math.floor(Math.random() * YAP_QUESTIONS.length);
    setOutput(YAP_QUESTIONS[randomIndex]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="flex w-full max-w-5xl gap-6">
        <div className="w-full md:w-2/3">
          <CardContent className="space-y-6 p-6">
            <h1 className=" text-base text-center font-bold mb-16">🗣️🗣️🗣️<br/>yapanese translator</h1>
            <div className="relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50 bg-[#0000FF]">
                english
              </Badge>
              <div className="relative">
                <textarea
                  id="english-input"
                  placeholder="my japanese peeps told me about the fantastic yap token lore."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-40 p-4 border rounded-none resize-none italic pt-8 text-center"
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button 
                    onClick={handleTranslate}
                  >
                    translate
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2  bg-[#0000FF]">
                yapanese
              </Badge>
              <textarea
                id="yapanese-output"
                value={output}
                readOnly
                className="w-full h-40 p-4 border text-[#0000FF] rounded-none bg-gray-100 italic pt-8 text-center resize-none"
              />
              <div className="absolute bottom-4 right-4">
                <Button 
                  onClick={generateYapQuestion}
                  className="bg-black text-white hover:bg-gray-300"
                >
                  yap generator
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
        <div className="text-sm text-left">
          <Card className="w-1/4 fixed top-0 right-0 h-screen rounded-none !p-0 sm:block hidden shadow-none border-t-0">
            <CardContent>
              <ScrollArea className="h-screen ">
              <h2 className="text-xl mt-8">🗣️</h2>
              <h2 className="text-xl italic mb-8">Yapxicon</h2>


                {YAP_LEXICON.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-[#0000FF] text-sm font-semibold">{item.word}</h3>
                    <p className="text-sm text-gray-500">{item.pronunciation} ({item.gender})</p>
                    <p className="mt-1">{item.definition}</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
