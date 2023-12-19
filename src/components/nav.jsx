import * as React from "react"
import { Link } from "gatsby"

const Nav = ({linkTo, label}) => {
    return (
        <li class="text-blue-600 hover:text-blue-400 px-3">
            <Link to={linkTo}>{label}</Link>
        </li>
    )
}

export default Nav