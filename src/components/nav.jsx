import * as React from "react"
import { Link } from "gatsby"

const Nav = ({linkTo, label}) => {
    return (
        <li class="text-blue-400 hover:text-blue-200 text-lg px-3">
            <Link to={linkTo}>{label}</Link>
        </li>
    )
}

export default Nav