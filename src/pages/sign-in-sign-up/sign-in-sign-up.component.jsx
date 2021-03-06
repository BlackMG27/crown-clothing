import React, {Fragment} from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up-component';
import './sign-in-sign-up.styles.scss'

const SignInSignUpPage = () => (
    <Fragment>
        <section className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </section>
    </Fragment>

)

export default SignInSignUpPage;
