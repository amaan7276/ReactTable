
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTableRow } from '../redux/tableSlice';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addTableRow(data));
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add Account</h2>
      <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Account Name</label>
        <input {...register('name', { required: 'Account Name is required' })} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Phone No.</label>
        <input {...register('phone', { required: 'Phone number is required' })} />
        {errors.phone && <p>{errors.phone.message}</p>}

        <label>Website</label>
        <input {...register('website', { required: 'Website is required' })} />
        {errors.website && <p>{errors.website.message}</p>}

        <label>Industry</label>
        <input {...register('industry', { required: 'Industry is required' })} />
        {errors.industry && <p>{errors.industry.message}</p>}

        <label>Account Status</label>
        <input {...register('status', { required: 'Status is required' })} />
        {errors.status && <p>{errors.status.message}</p>}

        <label>Remark</label>
        <input {...register('remark', { required: 'Remark is required' })} />
        {errors.remark && <p>{errors.remark.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
