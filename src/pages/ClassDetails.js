import TrainerCard from "../components/TrainerCard"
import { useParams } from "react-router-dom"

import ClassDetailsCard from "../components/ClassDetailsCard"

export default function ClassDetails() {
  const { id } = useParams()
  console.log(id)
  return (
    <div className="ClassDetails">
      <div className="absolute left-0 top-0 w-full">
        <ClassDetailsCard />
      </div>
      <div className="absolute bottom-10">
        <h1 className="text-[28px]">Trainer</h1>
        <TrainerCard />
      </div>
    </div>
  )
}
