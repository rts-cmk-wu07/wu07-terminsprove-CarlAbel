import useFetch from "../hooks/useFetch"

export default function ClassesForYou() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")
  return (
    <>
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
    </>
  )
}
