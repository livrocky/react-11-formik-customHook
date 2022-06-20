import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './AddForm.module.css';

export default function AddForm() {
  const formik = useFormik({
    initialValues: {
      image: '',
      price: '',
      desc: '',
      city: '',
    },
    validationSchema: Yup.object({
      image: Yup.string().required('Required'),
      price: Yup.number().min(2, 'Must be a double digit or more').required('Required'),
      desc: Yup.string().min(10, 'Must at least be 10 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.touched);
  return (
    <div className='addForm'>
      <header className={css.header}>
        <div className={css.container}>
          <h1>Add your property for sale</h1>
          <p className={css.h__subtitle}>Yes, you can sell where you live and get cash!</p>
        </div>
      </header>
      <h2 className={css.subtitle}>Add Property</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={css.container}>
          <input type='text' name='image' placeholder='Image' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.image} />
          {formik.touched.image && formik.errors.image ? <p className={css.error}>{formik.errors.image}</p> : null}

          <input type='number' name='price' placeholder='Price' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.price} />
          {formik.touched.price && formik.errors.price ? <p className={css.error}>{formik.errors.price}</p> : null}

          <textarea name='desc' cols='30' rows='4' placeholder='Anything you would like to say?' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.desc}></textarea>
          {formik.touched.desc && formik.errors.desc ? <p className={css.error}>{formik.errors.desc}</p> : null}

          <select name='city' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city}>
            <option value='kaunas'>Kaunas</option>
            <option value='vilnius'>Vilnius</option>
            <option value='klaipeda'>Klaipeda</option>
            {formik.touched.city && formik.errors.city ? <p className={css.error}>{formik.errors.city}</p> : null}
          </select>
          <br></br>
          <button type='submit' className={css.btnLink}>
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
}
