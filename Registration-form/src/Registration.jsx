import React from "react";
import { useFormik } from "formik";
import { SignUpSchema} from "./schemas";


const initialValues = {
    Name: "",
    email: "",
    password: "",
    confirm_password: "",

};

const Registration = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (value, action) => {console.log(value);
            action.resetForm()
        }
    })

  return (
        <>
            <div className="form-container">
                <h1>Welcome!</h1>
                <p className="top">Please Sign-in to proceed.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="name" className="input-label">Name</label>
                        <input 
                        type="text"
                        autoComplete="off"
                        name="Name"
                        id="Name"
                        placeholder="Enter Name"
                        value={values.Name}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        />
                        {errors.Name && touched.Name ? 
                        (<p className="form-error">{errors.Name}</p>) :
                        null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input 
                        type="text"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        {errors.email && touched.email ? 
                        (<p className="form-error">{errors.email}</p>) :
                        null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input 
                        type="text"
                        className="p-block"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        {errors.password && touched.password ? 
                        (<p className="form-error">{errors.password}</p>) :
                        null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="confirm_password" className="input-label">Confirm Password</label>
                        <input 
                        type="text"
                        className="cf-block"
                        autoComplete="off"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm Password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        {errors.confirm_password && touched.confirm_password ? 
                        (<p className="form-error">{errors.confirm_password}</p>) :
                        null}
                    </div>
                    <div className="submit-bttn">
                        <button className="Register-bttn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}; 

export default Registration;