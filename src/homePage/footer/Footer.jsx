
import "./footer.scss"
export default function Footer() {
  return (
    <div className="bg-[#191919] h-[200px] text-[#FDFDFD]">
      <div className="flex justify-between">
        <div>
          <div>
            <span className="xxs:text-[4vw] md:text-[2.5vw] timbu">
              timbu
            </span>
            <span className="xxs:text-[4vw] md:text-[2.5vw] cloud">
              Cloud
            </span>
          </div>
          <div>
            <span>

            </span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="secondFooter">
          <h3 className="xxs:text-[4vw] md:text-[2.5vw] pb-2" >
            Let Us Help You
          </h3>
          <div className="pb-2">
            Account Details
          </div>
          <div className="pb-2">
            Order History
          </div>
          <div>
            help
          </div>
        </div>
        <div className="thirdfooter">
          <h4 className="xxs:text-[4vw] md:text-[2.5vw] pb-2">
            Categories
          </h4>
          <p className="pb-2">Smartwatches</p>
          <p className="pb-2">Luxury Time Piece</p>
          <p>Sports/Games</p>
        </div>
        <div>
          <div >
            <div>
              <img src="./assets/Appstorecontain.png" alt="" />
            </div>
            <img className="z-50" src="./assets/Appstorebutton.png" alt="" />
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
