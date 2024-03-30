import aiimage from '../../assets/images/aiimg1.jpeg' // imp

function Image() {
return (
    <div className="w-screen h-screen">
            <img src={aiimage} alt="background image" className="w-full h-full" />
    </div>
)
}

export default Image