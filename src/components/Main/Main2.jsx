// import image1 from "../../assets/images/mainimg"
import image1 from "../../assets/images/mainimg1.jpg"
import image2 from "../../assets/images/mainimg2.jpg"
import image3 from "../../assets/images/mainimg3.jpg"
import image4 from "../../assets/images/mainimg4.jpg"
import image5 from "../../assets/images/mainimg5.jpg"
import image6 from "../../assets/images/mainimg6.jpeg"
import image7 from "../../assets/images/mainimg7.png"
import image8 from "../../assets/images/mainimg8.webp"
import image9 from "../../assets/images/mainimg9.jpg"

function Main2() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Your content goes here */}
    <div className='my-4'>
        <div>
            <h1 className='text-5xl px-2 py-7 text-center dark:text-black leading-tight tracking-tighter animate-pulse'>Our features</h1>
            <p className='text-center text-2xl py-2 '>Ready to conquer interviews?</p>

            <p className="text-center text-xl"> Whether you're a newbie or a ninja, we've got your back! From baby steps to boss moves, we've got all the tools you need to rock those interviews and make 'em beg for more!</p>
        </div>
        <div className='flex justify-center my-10 py-10 '>
            <button className='bg-blue-600 text-white px-5 py-3 mx-3 rounded-lg flex hover:bg-blue-800'>Learn more</button>

        </div>
        <div className='grid grid-cols-4 px-4 py-4 mx-2 gap-8 my-10'>                    
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl flex flex-col h-full justify-between'>
                        <img src={image1} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold text-center mb-4'>AI Prep</h2>
    
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl flex flex-col h-full justify-between'>
                        <img src={image2} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold text-center mb-4'>Built-In ATS</h2>
            
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl flex flex-col h-full justify-between'>
                        <img src={image3} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold text-center mb-4'>Trending Contents</h2>
                    
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl flex flex-col h-full justify-between'>
                        <img src={image4} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold text-center mb-4'>Fingertip Guidance</h2>
                
            </div>
        </div>
        <div className='grid grid-cols-3 px-4 py-8 gap-12 mx-2 '>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg shadow-md'>
                    <h1 className='text-xl font-bold dark:text-black leading-tight tracking-tighter animate-pulse '>"if you're not networking, 
you're not working."</h1>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg shadow-md'>
                    <h1 className='text-xl font-bold dark:text-black leading-tight tracking-tighter animate-pulse'>"Growth takes place outside
of your comfort zone."
</h1>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg shadow-md'>
                    <h1 className='text-xl font-bold dark:text-black leading-tight tracking-tighter animate-pulse'>
"A good laugh makes any interview, 
or any conversation, so much better."</h1>
                </div>
        </div>
        <div className='grid grid-cols-5 px-4 py-4 mx-2 gap-4 my-10'>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image5} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image6} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image7} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image8} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image9} alt='Card Image' className='w-full h-auto' />
            </div>
        </div>
        
    </div>
    </div>
  )
}


export default Main2