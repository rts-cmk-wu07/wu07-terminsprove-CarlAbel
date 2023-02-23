import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PopularTrainers() {
  const { data } = useFetch("http://localhost:4000/api/v1/trainers")
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "slider",
    adaptiveHeight: false,
  }

  const handleOnClick = (id) => {
    navigate(`/trainer/${id}`)
  }

  return (
    <div className="Popular Trainers">
      <Slider {...settings}>
        {data &&
          data.map((item) => (
            <div className="flex w-20" key={item.id}>
              <div
                className="flex cursor-pointer"
                onClick={() => handleOnClick(item.id)}
              >
                <img
                  className="h-[90px] w-[22%] object-cover rounded-xl shadow-sm my-2"
                  src={item.asset.url}
                  alt=""
                />

                <h2 className="pl-6 pt-4 text-lg font-[400]">
                  {item.trainerName}
                </h2>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}
