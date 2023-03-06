import { AccountBalance } from '@material-ui/icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "./css/Zohaib.css";


function BasicExample() {
  return (
   
    <Dropdown>
      <Dropdown.Toggle variant="Transparent" id="dropdown-basic">
          <AccountBalance/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      
        <Link to='/Bscs' className='drop'> <Dropdown.Item href="#/action-1">BSCS</Dropdown.Item></Link>
        <Link to='/Bba' className='drop'> <Dropdown.Item href="#/action-1">BBA</Dropdown.Item></Link>
        <Link to='/Bcom' className='drop'> <Dropdown.Item href="#/action-1">BCOM</Dropdown.Item></Link>
        <Link to='/Law' className='drop'> <Dropdown.Item href="#/action-1">LAW</Dropdown.Item></Link>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;