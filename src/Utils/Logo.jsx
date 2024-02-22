import { IoSchool } from "react-icons/io5"

const Logo = () => {
  return (
    <div className="logo flex gap-sm align-center" title="Adda College">
        <div className="icon">
          <IoSchool />
        </div>
        <div className="flex flex-col">
          <span>Adda</span>
          <span>College</span>
        </div>
      </div>
  )
}

export default Logo