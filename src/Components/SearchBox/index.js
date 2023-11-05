import {ReactComponent as SearchIcon} from "./search-icon.svg";
import "./SearchBox.css"

export default function SearchBox(){
    return(
    <form className="search">
        <input type="text" placeholder="Search a album of you choice" className="input-box"/>
        <button className="search-icon"><SearchIcon/></button>
    </form>
    )
}