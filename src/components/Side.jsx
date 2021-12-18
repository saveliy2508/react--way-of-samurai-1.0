import './Side.scss'

const Side = () => {
    return (
    <div className="side-bar">
        <ul className="side-bar__menu">
            <li className="side-bar__link">
                Profile
            </li>
            <li className="side-bar__link">
                Message
            </li>
            <li className="side-bar__link">
                News
            </li>
            <li className="side-bar__link">
                Music
            </li>
            <li className="side-bar__link">
                Settings
            </li>
        </ul>
    </div>)
}

export default Side;