import Banner from "./Banner"
import Navbar from "./Navbar"

const Nav = () => {
  return (
    <div className="sticky top-0 w-full bg-white z-10">
      <Banner />
      <Navbar />
    </div>
  )
}

export default Nav