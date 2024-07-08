
import Advert from './Advert'
import Items from './Items'
import './section2.scss'

export default function Section2() {
  return (
    <div id='list'  className=" xxs:pt-[16px] scroll-mt-14 bg-[#ACACAC] h-auto border border-[#ACACAC]">
      <div>
        <Advert />
       <Items  />
      </div>
    </div>
  )
}
