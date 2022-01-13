import React,{useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import {FirebaseContext} from '../context/firebase.context'
import HeaderContainer from '../components/header/header.component'
import FooterContainer from '../components/footer/footer.component'
import Form from '../components/form/form.index' 

import * as ROUTES from '../components/constants/router'

const SignIn = () => {
    const history = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] =useState('')
    const [password, setPassword] =useState('')
    const [error, setError] =useState('')

    const isInvalid = password === '' || emailAddress ===''

    const handleSignIn = (event) => {
      event.preventDefault()

      // firebase work here

      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          //push to the browse page
          history.push(ROUTES.BROWSE)
        })
        .catch((error) => {
          setEmailAddress('')
          setPassword('')
          setError(error.message)
        })
    }

    //check  input elements are valid

    return ( 
       <div>
           <HeaderContainer>
              <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="post">
                  <Form.Input
                    autocomplete = "off"
                    placeholder="Email address"
                    Value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                  />
                  <Form.Input 
                    autocomplete = "off"
                    type="password"
                    placeholder="Password"
                    Value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>

                  <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                  </Form.Text>
                  <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.SmallText>
                </Form.Base>
              </Form>
            </HeaderContainer>
            <FooterContainer />
       </div>
     );
}
 
export default SignIn;