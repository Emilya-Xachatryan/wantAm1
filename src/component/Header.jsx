// import React from "react";
import "../styles/Header.css"
const Header =() => {
  return (
    <div className="head">
    <div >
      <img className="img" src="	https://want.am/wp-content/uploads/2024/11/logo.png" alt="" />
    </div>

    <div>
      <button className="button1" > Կատալոգ </button>
      <input className="form-search__input" id="searchInput" type="text" name="q" placeholder="Փնտրել նվեր"></input>
      {/*   icons?        */}
    </div>

    </div>
  )

}

export default Header