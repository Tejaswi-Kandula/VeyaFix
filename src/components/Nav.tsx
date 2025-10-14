// import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
function Nav() {
  // const navigate = useNavigate()
  return (
    <div className="w-full bg-gray-950">
      <div className="flex  justify-between items-center p-4">
        <div className="flex items-center space-x-2 text-white">
          <svg className="h-[30px] w-[30px] fill-current animate-spin" preserveAspectRatio="xMidYMid meet" data-bbox="0 0 186 186" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 186" height="186" width="186" data-type="color" role="presentation" aria-hidden="true" aria-label="">
            <g>
              <g clip-path="url(#fd0f04a2-6e94-46c8-963c-664339a46b77_comp-lyzozy6h)">
                {/* Changed fill="#DBDBDB" to fill="currentColor" to inherit text-white */}
                <path fill="currentColor" d="M78.742 0C66.968 1.806 55.903 5.742 46 11.484l6.645 24.806C62.581 25.226 71.323 13.065 78.742 0" data-color="1"></path>
                <path fill="currentColor" d="m45.161 44.226-27.645-7.42A94.4 94.4 0 0 0 .032 78.71c16.613-9.42 31.774-21.065 45.13-34.484" data-color="1"></path>
                <path fill="currentColor" d="M185.968 78.71c-1.968-12.84-6.549-25-13.194-35.613l-25.871 6.935C158.742 61 171.807 70.677 185.936 78.71z" data-color="1"></path>
                <path fill="currentColor" d="m140 43.355 7.29-27.194A93.8 93.8 0 0 0 107.258 0c9 15.903 20.064 30.452 32.742 43.355" data-color="1"></path>
                <path fill="currentColor" d="m48.516 145.258-7.097 26.419c11.065 7.258 23.71 12.258 37.355 14.323-8.42-14.839-18.613-28.484-30.258-40.742" data-color="1"></path>
                <path fill="currentColor" d="m147.517 135.355 25.677 6.871A93.2 93.2 0 0 0 186 107.194c-13.935 7.903-26.806 17.387-38.483 28.129z" data-color="1"></path>
                <path fill="currentColor" d="M0 107.226c2.065 13.645 7.065 26.29 14.323 37.355l26.419-7.097C28.484 125.839 14.839 115.645 0 107.226" data-color="1"></path>
                <path fill="currentColor" d="M107.258 186a93.6 93.6 0 0 0 39.709-15.935l-7.258-27.129A208 208 0 0 0 107.258 186" data-color="1"></path>
                <path fill="currentColor" d="M63.097 63.097a74.3 74.3 0 0 1 0 62.096 74.3 74.3 0 0 1 62.096 0 74.3 74.3 0 0 1 0-62.096 74.3 74.3 0 0 1-62.096 0" data-color="1"></path>
              </g>
              <defs fill="none">
                <clipPath id="fd0f04a2-6e94-46c8-963c-664339a46b77_comp-lyzozy6h">
                  <path fill="#ffffff" d="M186 0v186H0V0z"></path>
                </clipPath>
              </defs>
            </g>
          </svg>
          <h1 className="text-xl font-bold">VeyaFix</h1>
        </div>
        <div className="flex space-x-4 text-white">
          <NavLink
            to="/" className={({ isActive }) => `transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
              }`
            }
          >
            Booking
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
              }`
            }
          >
            About Us
          </NavLink>
        </div>
      </div>
      <hr className="border-t border-gray-500 w-full" />
    </div>
  )
}
export default Nav