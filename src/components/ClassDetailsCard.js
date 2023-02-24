import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ClassDetailsCard() {
  const { id } = useParams()
  const [ratingsData, setRatingsData] = useState(null)
  const { data } = useFetch(`http://localhost:4000/api/v1/classes/${id}`)

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsResponse = await fetch(
        `http://localhost:4000/api/v1/classes/${id}/ratings`
      )
      const ratingsData = await ratingsResponse.json()
      setRatingsData(ratingsData)
    }

    fetchRatings()
  }, [id])
  console.log(ratingsData)
  if (!data) {
    return <div>Loading...</div>
  }

  const { className, asset, classDescription } = data

  const ratingsCount = ratingsData?.length || 0
  const totalStars =
    ratingsData?.reduce((sum, { rating }) => sum + rating, 0) || 0
  const averageRating = ratingsCount > 0 ? totalStars / ratingsCount : 0

  return (
    <>
      <div className="w-full h-[32rem] relative rounded-lg">
        <img
          src={asset.url}
          alt={className}
          className="absolute z-0 h-[32rem] w-full object-cover shadow-md"
        />
        <input
          className="bg-white text-[26px] absolute right-0 px-6 py-3 bottom-6 rounded-l-xl"
          type="submit"
          value="Sign up"
        />
        <div className="p-4 absolute bottom-6">
          <h2 className="w-[17rem] leading-[2.6rem] text-4xl font-normal text-white  ">
            {className}
          </h2>
          <div className="mt-2"></div>{" "}
        </div>
      </div>
      <h2 className="w-[15rem] text-2xl font-semibold ml-4 mt-1 -mb-[6px]">
        Schedule
      </h2>
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-black ml-4">{data.classDay}</span>
          <span className="text-black mr-4">{data.classTime}</span>
        </div>
        <p className="text-black"></p>
        <p className="text-black m-4 leading-[1.4rem]">{classDescription}</p>
        <div>
          <h2>Ratings:</h2>
          {ratingsCount > 0 && (
            <p>
              Average rating: {averageRating.toFixed(1)} ({ratingsCount}{" "}
              {ratingsCount === 1 ? "rating" : "ratings"})
            </p>
          )}
          {ratingsData?.map((rating) => (
            <div key={rating.id}>
              <p>{rating.comment}</p>
              <p>{rating.rating} stars</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
