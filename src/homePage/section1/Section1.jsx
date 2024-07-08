import Hero from "./Hero";
import Nav from "./Nav";
import './section1.scss'

export default function Section1() {
  return (
    <div className="section1 h-auto">
      <div className="bg-[rgba(0,0,0,0.45)] h-full">
        <div className=" text-white">
          <Nav  />
          <Hero />
        </div>
        
      </div>
    </div>
  )
}
