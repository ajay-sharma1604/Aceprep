import image1 from '../../assets/images/ai2.webp' // imp
import image2 from '../../assets/images/ai3.jpeg'
import image3 from '../../assets/images/ai4.jpg'
import image4 from '../../assets/images/ai5.jpeg'
import image5 from '../../assets/images/ai6.jpg'
import image6 from '../../assets/images/ai7.jpg'
function ImageCards() {
    return (
        <div className="grid grid-cols-3 gap-8  h-screen p-8">
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image1} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image2} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image3} alt="Image 3" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image4} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image5} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image6} alt="Image 3" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default ImageCards