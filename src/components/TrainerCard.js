import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

export default function TrainerCard() {
  const { id } = useParams()
  const { data } = useFetch(`http://localhost:4000/api/v1/classes/${id}`)

  if (!data) {
    return <div>Loading...</div>
  }

  const { className, asset, trainer } = data

  return (
    <div className="flex w-64 rounded-lg overflow-hidden">
      <img
        src={asset.url}
        alt={className}
        className="h-[90px] w-[25%] object-cover rounded-xl shadow-sm my-2"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium">{trainer.trainerName}</h2>
        <div className="mt-2">
          <p className="text-red-900 text-xl font-medium border-2 rounded-md p-2 text-center">
            Calender
          </p>
        </div>
      </div>
    </div>
  )
}
