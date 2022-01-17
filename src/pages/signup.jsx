import React,{useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import {FirebaseContext} from '../context/firebase.context'
import HeaderContainer from '../components/header/header.component'
import FooterContainer from '../components/footer/footer.component'
import Form from '../components/form/form.index' 

import * as ROUTES from '../components/constants/router'

const SignUp = () => {
    const history = useNavigate()
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid =firstName === '' || password === '' || emailAddress ===''

    const handleSignUp = (event) => {
      event.preventDefault();
        return firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
          result.user
            .updateProfile({
              displayName: firstName,
              photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
              history(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
          setFirstName('');
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
           
    }

    return ( 
      <div>
            <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method='POST'>
                    <Form.Input 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={({target})=> setFirstName(target.value)}
                    />
                    <Form.Input 
                        placeholder="Email Address"  
                        value={emailAddress}
                        onChange={({target})=> setEmailAddress(target.value)}
                    />
                    <Form.Input 
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                      Sign Up
                    </Form.Submit>
                    <Form.Text>
                        Already a user ? <Form.Link to="/signin">Sign In now.</Form.Link>
                    </Form.Text>
                    <Form.SmallText>
                      This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.SmallText>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
      </div>
     );
}
 
export default SignUp;