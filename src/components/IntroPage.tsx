import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50" style={{ backgroundImage: 'url(/yapmac_bg.png)', backgroundRepeat: 'repeat' }}>
    {/*
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

      </div> */}


    <div className="bg-[#DCDCDC] pl-1  pr-1 pb-1 w-full md:3/4 lg:w-2/3 xl:w-1/2 mx-auto font-reg border sm:min-h-screen border-black shadow-[1px_1px_0px_0px_#1a202c]">
    

    <div className="flex items-center justify-between p-1">
              <div className="w-4 h-4 bg-black"></div> {/* Left square icon */}
              <h1 className="text-base font-bla text-[#454545] mx-auto">the yapple store (yapple inc.)</h1> {/* Title in the middle */}
              <div className="flex space-x-2"> {/* Right square icons */}
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-black"></div>
              </div>
    </div>



      <div className="bg-white border border-black shadow-[inset_2px_2px_0px_0px_#ABA9AA]">
        <div className="flex items-center m-1">
          <div className="flex-grow border-l border-t border-b border-r sm:border-r-0 border-black shadow-inner">

            <div className='py-2 pr-2 flex bg-[#DCDCDC]'>
            <div className="text-left text-[10px] sm:text-xs font-bold text-[#454545] p-1">
            Contract:
            </div>
            <div className="bg-[#6299FE] w-full text-left text-[10px] sm:text-xs text-[#454545] border border-black shadow-[inset_2px_2px_0px_0px_#5B70A5] p-1 font-bold truncate">
              3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump
            </div>
            </div>
          </div>
          <Button size="icon" variant="outline" className="hidden sm:grid h-11 w-11 p-1 border border-black">
            <img src="/yapplestore_bit.png" alt="Refresh" width={20} height={20} />
          </Button>
        </div>
        
        <div className='p-4'>
            <div className="flex flex-wrap  mb-4">
            <div className="w-full md:w-1/3 flex justify-center items-center"> 
                <img 
                src="/yapintro_0.jpeg" 
                alt="Person with sunglasses" 
                width={170} 
                className="mb-8 md:mb-0 text-center mx-0"
                />
            </div>
            <div className="w-full md:w-2/3 flex justify-center items-center">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-10 gap-y-8">
                {['YapMeme', 'Yapanese', 'YapPay', 'YapFlix', 'YapMoney', 'YapperNews', 'Yap+', 'Special Deals'].map((item, index) => {
                    const icons = [
                    "/ico/ico4.png",
                    "/ico/ico1.png",
                    "/ico/ico3.png",
                    "/ico/ico3.png",
                    "/ico/ico3.png",
                    "/ico/ico3.png",
                    "/ico/ico3.png",
                    "/ico/ico3.png"
                    ];
                    
                    const isActive = index === 0 || index === 1; // Make YapMeme and Yapanese active
                    
                    return isActive ? (
                    <Link to={index === 0 ? "/meme" : "/translator"} key={index} className="text-center  hover:bg-gray-200">
                        <img src={icons[index]} alt="" width={40} height={40} className="mx-auto mb-1 " />
                        <p className="text-xs font-bold text-[#2222ff]">{item}</p>
                    </Link>
                    ) : (
                    <div key={index} className="text-center hover:bg-gray-200  cursor-wait">
                        <img src={icons[index]} alt="" width={40} height={40} className="mx-auto mb-1 opacity-50" />
                        <p className="text-xs font-bold text-gray-400">{item}</p>
                    </div>
                    );
                })}
                </div>
            </div>
            
            </div>
        </div>


        <h1 className="text-[70px] lg:text-[90px] xl:text-[100px] 2xl:text-[120px] mb-8 font-greg tracking-tighter">The Yapple Store</h1>
        
        <div className="hidden sm:grid grid-cols-3 gap-1 my-4">
          <div className="flex flex-col items-center">
            <img src="/yapplekit_bit.png" className='spin-animation mb-4 sm:w-52 sm:h-52' alt="Visual 1" width={100} height={100} />
            <p className="text-xs font-bold text-[#000]">Powered Yapintosh Gen1</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/yapplekit_bit.png" className='spin-animation mb-4 sm:w-52 sm:h-52' alt="Visual 2" width={100} height={100} />
            <p className="text-xs font-bold text-[#000]">Powered Yapintosh Gen2</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/yapplekit_bit.png" className='spin-animation mb-4 sm:w-52 sm:h-52' alt="Visual 3" width={100} height={100} />
            <p className="text-xs font-bold text-[#000]">Powered Yapintosh Gen3</p>
          </div>
        </div>
        
  {/* LINKS
        <div className="hidden sm:grid grid-cols-3 gap-1 my-4 mx-60">
          <div className="flex flex-col items-center">
          <a className="hover:underline text-xs" href="https://www.yap.capital/" target="_blank" rel="noopener noreferrer">yap.capital</a>
          </div>
          <div className="flex flex-col items-center">
          <a className="hover:underline text-xs" href="https://www.yap.capital/" target="_blank" rel="noopener noreferrer">yap.capital</a>
          </div>
          <div className="flex flex-col items-center">
          <a className="hover:underline text-xs" href="https://www.yap.capital/" target="_blank" rel="noopener noreferrer">yap.capital</a>
          </div>
        </div>
    */}     

        {/* FOOTER */}
        <div className="flex justify-between text-sm bg-black w-full pt-1.5 px-4 h-8">
          <a className="hover:underline text-white" href="https://www.yap.capital/" target="_blank" rel="noopener noreferrer">yap.capital</a>
          <a className="hover:underline text-white" href="https://www.yap.ing/" target="_blank" rel="noopener noreferrer">yap.ing <sup>soon</sup></a>
          <a className="hover:underline text-white" href="https://www.yap.shopping//" target="_blank" rel="noopener noreferrer">yap.shopping</a>
          <a className="hover:underline text-white" href="#" target="_blank" rel="noopener noreferrer">yap.pay <sup>soon</sup></a>

          <img src="/yapplestore_wmin.png" alt="Apple logo" className='p-1.5 -mt-1.5' />
        </div>

      </div>
    </div>




    </div>
  );
}

export default IntroPage;
