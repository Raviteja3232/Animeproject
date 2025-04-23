import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderComponent(){

    return(
    <div className="row bg-light">
        <nav>
        <ul className="d-flex gap-5 justify-content-center mt-2">
            <li><button className="Home" role="button"><FontAwesomeIcon icon="fa-solid fa-house-fire" /><a href='./Home.js'>Home</a></button></li>
            <li><button className='Home'>Favourites</button></li>
            <li><button className='Home'>Cart</button></li>
        </ul>
        </nav>
        <FontAwesomeIcon icon="fa-solid fa-house-fire" />
    </div>
    )

}export default HeaderComponent;
