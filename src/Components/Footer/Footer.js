import './footer.scss';
import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'


class Footer extends Component{
    render(){
        return(
            <div className="flex-footer">
              <p className="address footer-item">
              Pet Rescue<br />
              1234 Main Street rd<br />
              Minneapolis, MN 55414
              </p>
             {/* <FontAwesomeIcon icon={faPaw} /> */}
              <p className="phone footer-item">
              Phone Number: < br />
               1(651)123-4567
              </p>
              <p className="email footer-item">
              Email:<br />
              petrescue@rescue.com
              </p>
           </div>
        );
    }
}



export default Footer;