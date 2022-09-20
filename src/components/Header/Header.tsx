import './header.scss'
import {useState} from "react";
import {MdMenu} from 'react-icons/md'

function Header() {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <div>
            <MdMenu onClick={() => setShowHeader(!showHeader)} className="header__btn" />
            <div className={`header ${showHeader && "active"}`}>
                <nav className="header__nav">
                    <ul>
                        <li>
                            <a className="" href="/">About Me</a>
                        </li>
                        <li>
                            <a className="" href="/">Skills & Interests</a>
                        </li>
                        <li>
                            <a className="" href="/">Projects</a>
                        </li>
                        <li>
                            <a className="" href="/">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;