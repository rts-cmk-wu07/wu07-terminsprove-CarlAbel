import useFetch from "../hooks/useFetch"

export default function PopularClass() {
  const { data } = useFetch("http://localhost:4000/api/v1/classes/1")

  return (
    <>
      {data && (
        <div className="PopularClass relative">
          <h1 className="text-center text-[28px] mb-8">Popular Class</h1>
          <h2 className="absolute text-[28px] w-60 leading-10 text-white  bottom-6 ml-5">
            {data.className}
          </h2>
          <img
            className="object-cover h-96 rounded-lg"
            src={data.asset.url}
            alt=""
          />
        </div>
      )}
    </>
  )
}
