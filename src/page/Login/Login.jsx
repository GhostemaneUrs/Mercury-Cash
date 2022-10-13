import React, { useState } from 'react'
import * as Yup from 'yup'
import Alert from '../../components/Alert/Alert'
import { Formik, Form, Field } from 'formik'
import Password from '../../components/Password/Password'
import { useNavigate } from 'react-router-dom'
import mercuryName from '../../assets/img/mercury-name.svg'
import mercuryLogo from '../../assets/img/mercury-logo.svg'
import Loading from '../../components/Loading/Loading'

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const [checked, setChecked] = useState(false)
  const loginValues = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid Email')
      .required('Enter valid Email'),
    password: Yup.string().required('Password is required'),
  })

  return (
    <>
      <Loading />
      <div className='pt-[110px]'>
        <div className='flex flex-col justify-center items-center w-full max-w-[640px] m-auto'>
          <div className='flex items-center gap-1 mb-[50px]'>
            <img
              src={mercuryLogo}
              alt='mercury'
              className='w-[38px] h-[38px]'
            />
            <img
              src={mercuryName}
              alt='mercury-name'
              className='w-[128px] h-[18px]'
            />
          </div>
          <div className='w-full max-w-[320px] flex justify-center flex-col items-center mb-[20px]'>
            <div className='mb-[20px]'>
              <span className='text-[#6e37ee] leading-[28.8px] tracking-normal font-bold text-[24px]'>
                Welcome Back
              </span>
            </div>
            <Formik
              initialValues={login}
              validationSchema={loginValues}
              onSubmit={(values, { resetForm }) => {
                setLogin({ ...values, remember: checked })
                resetForm()
              }}
            >
              {({ handleSubmit, errors, touched, isValid, dirty }) => (
                <Form className='w-full' onSubmit={handleSubmit}>
                  <div>
                    <div className={`mb-[30px] ${errors.email && 'mb-[8px]'}`}>
                      <Field
                        type='text'
                        name='email'
                        placeholder='Email'
                        className={`w-full border-[0.6px] border-solid border-gray-mercury-100 text-[20px]  placeholder:text-[20px] placeholder:text-[#E3E3E3] bg-white py-[11px] pl-[12px] rounded-[6px] ${
                          errors.email && 'border-red-400'
                        } focus:shadow-mercury outline-none h-[50px]`}
                      />
                      {errors.email && touched.email ? (
                        <Alert>{errors.email}</Alert>
                      ) : null}
                    </div>
                    <div className='relative mb-4'>
                      <Field name='password' component={Password} />
                      {errors.password && touched.password ? (
                        <div className='w-full flex justify-between'>
                          <Alert>{errors.password}</Alert>
                          <span className='text-[#7947EF] text-[13px] leading-[24px] underline hover:no-underline cursor-pointer'>
                            Forgot Password
                          </span>
                        </div>
                      ) : (
                        <div className='w-full flex justify-end'>
                          <span className='text-[#7947EF] text-[13px] leading-[24px] underline hover:no-underline cursor-pointer'>
                            Forgot Password
                          </span>
                        </div>
                      )}
                    </div>
                    <div className='flex gap-2 items-center mb-[70px]'>
                      <div
                        onClick={() => {
                          setChecked(!checked)
                        }}
                        className={`cursor-pointer h-[17px] w-[17px] border-2 solid border-[#6E37EE] ${
                          checked ? 'bg-[#6E37EE]' : ''
                        } rounded-[4px] flex justify-center items-center`}
                      >
                        {checked && (
                          <span className='material-icons text-white text-[14px]'>
                            check
                          </span>
                        )}
                      </div>
                      <span className='font-bold text-[12px]'>
                        Remember me.
                      </span>
                    </div>
                    <div className='mb-[50px]'>
                      <button
                        type='submit'
                        disabled={!(isValid && dirty)}
                        className={`bg-[#6E37EE] text-white text-[20px] font-medium w-full rounded-[30px] h-[50px] disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className='border-t solid border-gray-mercury-100 w-full flex justify-center'>
            <p className='text-[18px] font-bold pt-[20px]'>
              Don't have an account? {''}
              <span
                className='text-[#6E37EE] underline cursor-pointer hover:no-underline'
                onClick={() => {
                  navigate('/register')
                }}
              >
                Sign up{' '}
              </span>
              instead.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
