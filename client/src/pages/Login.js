import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
require('dotenv').config();

function Login(props) {
  //login is a graphql function call that gets variables passed to it in the handleformSubmit
  // the data/response is in the handleformsubmit and gets sets globally there
  //const [login, { error }] = useMutation(LOGIN);

  const refreshTokenSetup = (GoogleAuthResponse) => {
    let refreshTiming = (GoogleAuthResponse.tokenObj.expires_in || 3600 -5 *60) * 1000;
    const refreshToken = async () => {
      const newAuthRes = await GoogleAuthResponse.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 -5 *60) *1000;
      //setup other timer after first timer is initated
      setTimeout(refreshToken,refreshTiming)
      console.log('force login refresh')
    }
    //setup first refresh timer
    setTimeout(refreshToken,refreshTiming)
  }

  const onSuccess = (googleAuthResponse) => {
    console.log(`[Login Success] user : `, googleAuthResponse.profileObj )
    console.log(`[Login Success] user : `, googleAuthResponse )
    refreshTokenSetup(googleAuthResponse)

  }
  const onLogOutSuccess = (googleAuthResponse) => {
    console.log(`[LogOut Success]  : `, googleAuthResponse )
  }

  const onFailure = (googleAuthResponse) => {
    console.log(`[Login Success] user : `, googleAuthResponse )
  }


  

  

  /*const handleLogin = async googleData => {
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    // store returned user somehow
  }*/

  return (
    <div className="container my-1">
      <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
/>
<GoogleLogout
  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
  buttonText="Log Out"
  onLogoutSuccess={onLogOutSuccess}
/>
    

    </div>
  );
}

export default Login;
