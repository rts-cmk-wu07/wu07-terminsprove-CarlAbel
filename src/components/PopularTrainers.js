import useFetch from "../hooks/useFetch"

export default function PopularTrainers() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")
  console.log(data)
  return (
    <>
      <div className="gap-3 overflow-y-auto pb-3 pr-3">
        {data &&
          data.map((item) => (
            <div className="w-32 overflow-hidden cursor-pointer" key={item.id}>
              <img
                className="h-24 w-24 object-cover rounded-xl shadow-sm"
                src={item.asset.url}
                alt=""
              />
              <h2>{item.trainer.trainerName}</h2>
            </div>
          ))}
      </div>
    </>
  )
}
