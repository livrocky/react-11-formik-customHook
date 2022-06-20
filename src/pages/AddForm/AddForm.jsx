import { useFormik } from 'formik';
import React from 'react';

export default function AddForm() {
  const formik = useFormik({
    initialValues: {
      image: '',
      price: '',
      desc: '',
      city: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input type='text' name='image' placeholder='Image' onChange={formik.handleChange} value={formik.values.image} />

        <input type='number' name='price' placeholder='Price' onChange={formik.handleChange} value={formik.values.price} />

        <textarea name='desc' cols='30' rows='4' placeholder='Anything you would like to say?' onChange={formik.handleChange} value={formik.values.desc}></textarea>

        <select name='city' onChange={formik.handleChange} value={formik.values.city}>
          <option value='kaunas'>Kaunas</option>
          <option value='vilnius'>Vilnius</option>
          <option value='klaipeda'>Klaipeda</option>
        </select>
      </div>
      <button type='submit' className='btn-link'>
        Add Property
      </button>
    </form>
  );
}
