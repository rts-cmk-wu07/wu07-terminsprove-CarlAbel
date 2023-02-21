import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

export default function ClassesForYou() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")
  const navigate = useNavigate()
  return (
    <>
      <div className="flex gap-3 overflow-y-auto pb-3 pr-3">
        {data &&
          data.map((item) => (
            <div
              onClick={() => navigate(`/class/${item.id}`)}
              className="w-32 overflow-hidden cursor-pointer"
              key={item.id}
            >
              <img
                className="h-32 w-[100%] object-cover rounded-xl shadow-sm"
                src={item.asset.url}
                alt=""
              />
              <h2>{item.className}</h2>
            </div>
          ))}
      </div>
    </>
  )
}
