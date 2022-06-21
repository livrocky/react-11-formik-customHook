import RegisterForm from '../../components/RegisterForm/RegisterForm';

function RegisterPage() {
  function handleSuccessRegister() {
    // TODO: redirect to about
  }

  return (
    <div>
      <h1>Register here</h1>
      <RegisterForm onSuccessRegister={handleSuccessRegister} />
    </div>
  );
}

export default RegisterPage;
