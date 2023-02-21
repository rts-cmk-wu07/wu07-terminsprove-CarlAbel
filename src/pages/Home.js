import ClassesForYou from "../components/ClassesForYou"
import PopularClass from "../templates/PopularClass"

export default function Home() {
  return (
    <div className="Home">
      <PopularClass />
      <ClassesForYou />
    </div>
  )
}
