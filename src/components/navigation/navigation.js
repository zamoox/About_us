import React, {useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';


const Navigation = ({location}) => {

  useEffect(() => {
    console.log(location);
  })

  return (
    <>  
      <nav class='map'>
        <Link to='/'>Main Page </Link>
          <span>&nbsp;&gt;&nbsp;</span>
        <Link className='active' to='/'>User Statistics </Link>
        {/* { loc === '/charts' && 
        <Link className='active' to='/'> <span>&nbsp;&gt;&nbsp;</span>
          Profile 
        </Link> } */}
        

      </nav>
    </>
  );
}

export default withRouter(Navigation);
