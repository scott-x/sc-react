import React, { PureComponent } from 'react';
import {HeaderWrapper,H3} from './style';

class Header extends PureComponent {
  render() {
    return (
     <HeaderWrapper> 
      <H3>I am Header: </H3>
     Look, the cli supports iconfont, example:  <i className='iconfont'>&#xe6cf;</i>
     </HeaderWrapper>
    );
  }
}

export default Header;