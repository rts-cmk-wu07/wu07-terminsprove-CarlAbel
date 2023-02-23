import TrainerCard from "../components/TrainerCard"
import { useParams } from "react-router-dom"
import PopularClass from "../components/PopularClass"

export default function ClassDetails() {
  const { id } = useParams()
  console.log(id)
  return (
    <div className="Home">
      <h1 className="text-center text-[28px] mb-8">Popular Class</h1>
      <PopularClass />
      <h1 className="text-[28px] mb-4 mt-6">Trainer</h1>
      <TrainerCard />
    </div>
  )
}
