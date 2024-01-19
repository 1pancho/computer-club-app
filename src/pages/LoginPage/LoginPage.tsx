import { FC } from 'react';
import 'react-international-phone/style.css';
import { LoginComponent } from '../../components/layout/LoginComponent';
import styles from './LoginPage.module.css';



const LoginPage: FC = () => {

  return (
    <>
      <div className={styles.container} border-color='white.4'>
        <LoginComponent />
      </div>
    </>
  );
}

export default LoginPage;




// const [active, setActive] = useState(0);
// <Stepper active={active}>
// <Stepper.Step label="First step" description="Authentication">
//   <LoginComponent />
// </Stepper.Step>

// <Stepper.Step label="Second step" description="Setting a nickname">
//   <NickName />
// </Stepper.Step>
// </Stepper>