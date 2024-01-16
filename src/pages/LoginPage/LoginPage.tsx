import React, { FC } from 'react';
import 'react-international-phone/style.css';
import { LoginComponent } from '../../components/layout/LoginComponent';
import styles from './LoginPage.module.css'
import { NickName } from '../../components/layout/NickName';



const LoginPage: FC = () => {

  return (
    <>
      <div className={styles.container} border-color='white.4'>
        <LoginComponent />
        {/* <NickName /> */}
      </div>
    </>
  );
}

export default LoginPage;


