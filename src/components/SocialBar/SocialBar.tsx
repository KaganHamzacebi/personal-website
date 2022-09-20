import './socialBar.scss'

import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedinIn} from 'react-icons/fa'

function SocialBar() {
    return (
        <div className="socialBar">
            <ul>
                <li>
                    <GoMarkGithub
                        className="socialBar__github"
                        onClick={() => {
                            window.open('https://github.com/KaganHamzacebi', '_target')
                        }}
                    />
                </li>
                <li>
                    <FaLinkedinIn
                        className="socialBar__linkedin"
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/kaganhamzacebi/', '_target')
                        }}
                    />
                </li>
                <li>
                    <hr className="socialBar__divider" />
                </li>
                <li>
                    <span className="socialBar__writing">socials</span>
                </li>
            </ul>
        </div>
    )
}

export default SocialBar;