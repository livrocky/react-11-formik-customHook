import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myFetch } from '../../utils';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

const initValues = {
  email: '',
  password: '',
  repeatPassword: '',
};
function RegisterForm() {
  const { register } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(20).required(),
      repeatPassword: Yup.string().min(4, 'Maziausiai 4 simboliai').max(20).required(),
    }),
    onSubmit: async (values) => {
      console.log(values);

      const result = await myFetch('https://reqres.in/api/register', 'POST', values);
      if (!result.token) {
        console.log('cannot register');
        return;
      }

      register(result.token);
      console.log('result ===', result);
    },
  });

  //   console.log('formik.touched ===', formik.touched);
  //   console.log('formik.values ===', formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className={formik.touched.email && formik.errors.email ? css.errorInput : ''} name='email' type='text' placeholder='Your email' />
      {formik.touched.email && formik.errors.email && <p className={css.errorMsg}>{formik.errors.email}</p>}
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className={formik.touched.password && formik.errors.password ? css.errorInput : ''} name='password' type='password' placeholder='Your password' />
      {formik.touched.password && formik.errors.password && <p className={css.errorMsg}>{formik.errors.password}</p>}

      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repeatPassword}
        className={formik.touched.repeatPassword && formik.errors.repeatPassword ? css.errorInput : ''}
        name='repeatPassword'
        type='password'
        placeholder='Repeat your password'
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword && <p className={css.errorMsg}>{formik.errors.repeatPassword}</p>}

      <button type='submit'>Register</button>
    </form>
  );
}

export default RegisterForm;
