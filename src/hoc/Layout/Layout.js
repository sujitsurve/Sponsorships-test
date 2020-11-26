import React from 'react';
import NavigationItems from '../../component/NavigationItems/NavigationItems';
import Aux from '../Auxiliary/Auxiliary';

const layout = (props) => {
  return(
    <Aux>
      <nav>
          <NavigationItems/>
      </nav>
      <main >
           {props.children}
      </main>
    </Aux>
  );
}

export default layout;
