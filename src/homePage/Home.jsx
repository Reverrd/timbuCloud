import Footer from "./footer/Footer";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";


export default function Home() {
  return (
    <div className="relative">
      <Section1 />
      <Section2  />
      <Section3 />
      <Footer />
      
    </div>
  )
}
