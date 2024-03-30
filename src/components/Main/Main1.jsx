import image from '../../assets/images/Main1.jpg'
import animationData from '../../assets/lotties/home.json'
import Lottie from "react-lottie";


function Main1() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        // style={{ backgroundImage: `url(${image})` }}
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 h-screen ">
      {/* Your content goes here */}
        <div className='flex'>
        <div className="flex justify-center items-center  bg-cover" >
        <div className="pt-8 pb-8">
      {/* Content goes here */}
    
            <div>
                <h1 className='text-black text-5xl py-8 font-playfair'>Dream job? Consider it nailed with AcePrep's secret sauce</h1>
                <p className='text-black px-2 py-4 text-3xl'>"Prep like a Champion, Ace like a Boss"</p>
            </div>
        </div>
        <div className ='px-15 mx-4 h-screen py-20'>
        <Lottie
        className='flex'
	    options={defaultOptions}
        height={600}
        width={600}
      />
        </div>
        </div>
        </div>
        </div>
    )
}

export default Main1