import React from 'react';
import UserDropdown from '@/components/UserDropdown';
import * as ImgObjects from '@/assets/images/serviceIcon';
import { logo } from '@/assets/images';
import { createHashHistory } from 'history';
const history = createHashHistory();

export default () => (
  <div className="service-container">
    <div className="service-container-head">
      <img src={logo} alt="" />
      <UserDropdown />
    </div>
    <div className="service-container-welcome">欢迎来到戒毒所业务平台</div>
    <ul className="service-container-menu">
      {
        Object.keys(ImgObjects).map(item => {
          return (
            <li key={item} onClick={() => history.push('/jd')}>
              <img src={ImgObjects[item]} alt={item} />
              <div>{item}</div>
            </li>
          );
        })
      }
    </ul>
  </div>
);
