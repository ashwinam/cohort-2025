export default function Logo({textSize='text-4xl'}){
    return (
        <div className="flex">
          <p className={`mr-2 ${textSize}`}>💕</p>
          <h1 className={`${textSize} text-[#3fe3d1]`}>Webinar</h1>
          <span className={`text-white ${textSize}`}>.gg</span>
        </div>
    )
}