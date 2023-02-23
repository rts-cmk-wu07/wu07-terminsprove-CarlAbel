import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

export default function PopularClass() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")

  const [selectedData, setSelectedData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (!data) return
    setSelectedData(data[Math.floor(Math.random() * data.length)])
  }, [data])

  return (
    <>
      {selectedData && (
        <div
          onClick={() => navigate(`/classDetails/${selectedData?.id}`)}
          className="PopularClass relative"
        >
          <h2 className="absolute text-[28px] w-60 leading-10 text-white bottom-6 ml-5">
            {selectedData.className}
          </h2>
          <img
            className="object-cover h-96 rounded-lg"
            src={selectedData.asset.url}
            alt=""
          />
        </div>
      )}
    </>
  )
}
