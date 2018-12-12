import React, { PureComponent } from 'react';
import {
	HomeWrapper,
	H3
} from './style';

class Home extends PureComponent {
  render() {
    return (
     <HomeWrapper>
       <H3>I am Home</H3>
     </HomeWrapper>
    );
  }
}
export default Home;