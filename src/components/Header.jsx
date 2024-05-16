import SearchBar from "./SearchBar"
import logo from '../statics/logo.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="PokeRedux logo" className="m-10" />
        <SearchBar/>
    </header>
  )
}

export default Header