import React from "react"
import ClassesForYou from "../components/ClassesForYou"

import PopularTrainers from "../components/PopularTrainers"
import SearchField from "../components/SearchField"

export default function Search() {
  return (
    <div className="Search">
      <div>
        <h1 className="text-left text-[42px] mb-3 pt-14">Search</h1>
        <SearchField />
      </div>
      <div className="mt-8">
        <h1 className="text-[28px] mb-4">Popular classes</h1>
        <ClassesForYou />
      </div>
      <div className="">
        <h1 className="text-[28px] mb-4">Popular Trainers</h1>
        <PopularTrainers />
      </div>
    </div>
  )
}
