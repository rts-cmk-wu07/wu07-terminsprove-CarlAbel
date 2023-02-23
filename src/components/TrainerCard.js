import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
export default function TrainerCard() {
  const { id } = useParams()
  const { data } = useFetch(`http://localhost:4000/api/v1/classes/${id}`)
  return <div>Trainer</div>
}
