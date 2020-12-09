import { NavLink } from "react-router-dom"


const links = [
    {id:1, name:"Home", path:"/"},
    {id:2, name:"Movies", path:"/movies"}
]

export default function Header(){
    return(
        <header>
            <ul>
                {links.map(({id, name, path})=>(
                    <li key={id}><NavLink to={path} className="NavLink" activeClassName="NavLink--active">{name}</NavLink></li>
                ))}
            </ul>
        </header>
    )
}