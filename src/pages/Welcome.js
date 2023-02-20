import { useNavigate } from "react-router-dom"
import backgroundImage from "../Assets/welcome-background.jpg"
import centerImage from "../Assets/welcome-center.jpg"

export default function Welcome() {
  const navigate = useNavigate()
  function handleClick(event) {
    event.preventDefault()
    sessionStorage.setItem("key", true)
    navigate("/home")
    navigate(0)
  }

  return (
    <div className="Welcome">
      <img
        src={backgroundImage}
        alt="welcome-background"
        className="absolute z-10 object-cover w-screen h-screen"
      />

      <div className="absolute z-20 bottom-24 h-94">
        <div className="-translate-y-16">
          <h1 className="text-white w-11 ml-14 text-[56px] leading-[3.8rem]">
            Believe Yourself
          </h1>
          <div className="flex items-center pt-6">
            <div className="border border-white h-[1px] w-12  mr-2"></div>
            <p className="text-white text-[20px]">Train like a pro</p>
          </div>
        </div>
        <img
          className="object-cover translate-y-4 h-80"
          src={centerImage}
          alt=""
        />
        <input
          onClick={handleClick}
          className="bg-white text-[26px] absolute right-0 px-14 py-4 -bottom-12 rounded-l-xl"
          type="submit"
          value="Start Training"
        />
      </div>
    </div>
  )
}
