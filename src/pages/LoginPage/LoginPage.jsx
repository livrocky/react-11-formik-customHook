// import css from './LoginPage.module.css'

import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage(props) {
  function handleSuccessLogin() {
    // TODO: redirect to about
  }

  return (
    <div>
      <h1>Login here</h1>
      <LoginForm onSuccessLogin={handleSuccessLogin} />
    </div>
  );
}
export default LoginPage;
