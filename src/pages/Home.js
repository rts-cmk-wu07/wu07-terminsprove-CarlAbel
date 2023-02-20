import useFetch from "../hooks/useFetch"
import PopularClass from "../templates/PopularClass"

export default function Home() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")

  console.log(data)
  return (
    <div className="Home">
      <PopularClass />
      <h1 className="text-[28px] mb-4">Classes for you</h1>
      <div className="flex">
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <img src={item.asset.url} alt="" />
              <h2>{item.className}</h2>
            </div>
          ))}
      </div>
    </div>
  )
}
