import Login from '@react-login-page/page3';
// buttons
import { Reset, Submit } from '@react-login-page/page3';
// blocks
import { Logo, Title, Welcome, ButtonAfter } from '@react-login-page/page3';
// fields
import { Email, Password } from '@react-login-page/page3';

import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

// Basic Components
import { Button } from '@react-login-page/page3';
// or
// import { Button } from 'react-login-page';



import React from 'react'

const LoginTemplate = () => {
  return (
    <>
    <div>LoginTemplate</div>
    <Login>
  <Password index={2} />
</Login>

{/* // Define the order of `Password` controls */}
<Password index={2} />

{/* // Hiding the `Password` control */}
<Password visible={false} />

{/* // Add new input control */}
<Email rename="phone" label="Phone:" type="tel" index={1} placeholder="Phone number">
  <div>xx</div>
</Email>

{/* // Add content after the button */}
<ButtonAfter>
  Forgot <a href="#">Username / Password?</a>
</ButtonAfter>

<Welcome>Welcome back! Log in to your account.</Welcome>

{/* // Modify logo image */}
<Logo>⚛️</Logo>
    </>
  )
}

export default LoginTemplate
