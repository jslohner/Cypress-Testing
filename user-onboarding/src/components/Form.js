import React from 'react';
import './App.css';

function Form(props) {
	const {
		values,
		onInputChange,
		onCheckboxChange,
		onSubmit,
		submitAvailability,
		errors
	} = props;
	return (
		<form className='form'>
			<h2>New User</h2>
			<div data-error_messages='error_messages'>
				{<p>{errors.username}</p>}
				{<p>{errors.email}</p>}
				{<p>{errors.password}</p>}
				{<p>{errors.terms}</p>}
			</div>
			<label>Username: <input data-username_input='username_input' value={values.username} onChange={onInputChange} name='username' type='text'/></label>
			<label>Email: <input data-email_input='email_input' value={values.email} onChange={onInputChange} name='email' type='text'/></label>
			<label>Password: <input data-password_input='password_input' value={values.password} onChange={onInputChange} name='password' type='text'/></label>
			<label><input data-terms_state='terms_state' checked={values.terms} onChange={onCheckboxChange} name='terms' type='checkbox'/>Terms of Service</label>
			<button data-submit_button='submit_button' onClick={onSubmit} disabled={submitAvailability}>Submit</button>
		</form>
	);
}

export default Form;
