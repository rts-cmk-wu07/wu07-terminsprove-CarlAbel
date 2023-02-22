import useFetch from "../hooks/useFetch"

export default function PopularTrainers() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes")
  console.log(data)
  return (
    <>
      <div className="Popular Trainers">
        {data &&
          data.map((item) => (
            <div className="flex w-32 cursor-pointer" key={item.id}>
              <img
                className="h-24 w-[84px] object-cover rounded-xl shadow-sm ml-4 mb-4"
                src={item.asset.url}
                alt=""
              />
              <div className="flex flex-col w-20">
                <h2 className="w-48 pl-4 pt-2 text-lg font-medium">
                  {item.trainer.trainerName}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
