import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import Alert from '../../components/Alert/Alert'
import { Formik, Form, Field } from 'formik'
import Password from '../../components/Password/Password'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Select, { components } from 'react-select'
import mercuryName from '../../assets/img/mercury-name.svg'
import mercuryLogo from '../../assets/img/mercury-logo.svg'
import { customSelect } from '../../helpers/reactSelect'
import { formatToSelect } from '../../helpers/functions'
import { createUsers } from '../../redux/slices/users'
import { getCountries } from '../../redux/slices/countries'
import ConfirmPassword from '../../components/ConfirmPassword/ConfirmPassword'
import Loading from '../../components/Loading/Loading'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { Placeholder, Option, ValueContainer } = components

  const [checked, setChecked] = useState(false)
  const [register, setRegister] = useState({
    email: '',
    country: '',
    password: '',
    terms: false,
    language: '',
    confirmPassword: '',
  })

  const { countries } = useSelector(state => state.countries)
  const optionsCountries = formatToSelect(countries, 'id', 'name', 'code')

  const registerValues = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid Email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Enter at least 8 characters'),
  })

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
  ]

  useEffect(() => {
    dispatch(getCountries())
  }, [])

  const CustomOption = props => (
    <Option {...props}>
      <div className='flex gap-1'>
        <span>{props?.data?.extra}</span>
        <span>{props?.data?.label}</span>
      </div>
    </Option>
  )

  const PlaceholderIconCountry = props => (
    <Placeholder {...props}>
      <div className='flex items-center gap-1'>
        <span className='material-icons text-[#6e37ee] text-[30px]'>
          search
        </span>
        <span className='text-[#6e37ee] text-[18px] font-bold'>
          Country of Residence
        </span>
      </div>
    </Placeholder>
  )

  const PlaceholderIconLanguage = props => (
    <Placeholder {...props}>
      <div className='flex items-center gap-1'>
        <span className='material-icons text-[#6e37ee] text-[30px]'>
          search
        </span>
        <span className='text-[#6e37ee] text-[18px] font-bold'>
          Preferred Language
        </span>
      </div>
    </Placeholder>
  )

  const customSingleValueCountries = props => (
    <ValueContainer {...props}>
      <div className='flex items-center gap-1'>
        <span className='text-[#6e37ee] font-bold text-[16px]'>
          {props.data.extra}
        </span>
        <span className='text-[#6e37ee] font-bold text-[16px]'>
          {props.data.label}
        </span>
      </div>
    </ValueContainer>
  )

  return (
    <>
      <Loading />
      <div className='md:flex h-screen'>
        <div className='bg-[#f6f7fb] h-full w-full'>
          <div className='flex flex-col justify-center items-center w-full max-w-[640px] m-auto pt-[50px] md:pt-[150px]'>
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
            <div className='w-full max-w-[290px] flex justify-center flex-col items-center mb-[20px]'>
              <div className='mb-[20px]'>
                <span className='text-[#6e37ee] leading-[28.8px] tracking-normal font-bold text-[24px]'>
                  Create your account
                </span>
              </div>
              <Formik
                initialValues={register}
                validationSchema={registerValues}
                onSubmit={(values, { resetForm }) => {
                  setRegister(values)
                  dispatch(createUsers(values))
                  resetForm()
                  navigate('/')
                }}
              >
                {({
                  dirty,
                  errors,
                  touched,
                  values,
                  isValid,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <Form className='w-full' onSubmit={handleSubmit}>
                    <div>
                      <div
                        className={`mb-[30px] ${errors.email && 'mb-[15px]'}`}
                      >
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
                      <div
                        className={`relative mb-[30px] ${
                          errors.password && 'mb-[15px]'
                        }`}
                      >
                        <Field name='password' component={Password} />
                        {errors.password && touched.password && (
                          <div className='w-full flex justify-between'>
                            <Alert>{errors.password}</Alert>
                          </div>
                        )}
                      </div>
                      <div
                        className={`relative mb-[30px] ${
                          errors.confirmPassword && 'mb-[15px]'
                        }`}
                      >
                        <Field
                          name='confirmPassword'
                          component={ConfirmPassword}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <div className='w-full flex justify-between'>
                            <Alert>{errors.confirmPassword}</Alert>
                          </div>
                        )}
                      </div>
                      <div className='mb-[30px]'>
                        <Select
                          name='country'
                          isSearchable={true}
                          styles={customSelect}
                          placeholder='Country of Residence'
                          value={optionsCountries.find(
                            x => x.value === values.country
                          )}
                          options={optionsCountries}
                          components={{
                            Option: CustomOption,
                            Placeholder: PlaceholderIconCountry,
                            SingleValue: customSingleValueCountries,
                          }}
                          onChange={e => setFieldValue('country', e.value)}
                        />
                      </div>
                      <div className='mb-[30px]'>
                        <Select
                          name='language'
                          isSearchable={true}
                          styles={customSelect}
                          value={languages.find(
                            x => x.value === values.language
                          )}
                          placeholder='Preferred Language'
                          options={languages}
                          components={{
                            Placeholder: PlaceholderIconLanguage,
                          }}
                          onChange={e => setFieldValue('language', e.value)}
                        />
                      </div>
                      <div className='flex gap-3 items-center mb-[30px]'>
                        <div
                          onClick={() => {
                            setChecked(!checked)
                            setFieldValue('terms', !checked)
                          }}
                          className={`cursor-pointer h-[18px] w-[24px] border-2 solid border-[#6E37EE] flex justify-center items-center rounded-full `}
                        >
                          <div
                            className={`${
                              checked ? 'bg-[#6E37EE]' : ''
                            } rounded-full h-[10px] w-[10px]`}
                          />
                        </div>
                        <p className='font-bold text-[12px]'>
                          By continuing I agree to the{' '}
                          <span className='text-[#6e37ee] underline hover:no-underline cursor-pointer'>
                            Terms of Services
                          </span>{' '}
                          and{' '}
                          <span className='text-[#6e37ee] underline hover:no-underline cursor-pointer'>
                            Privacy Policy
                          </span>
                        </p>
                      </div>
                      <div className='mb-[50px]'>
                        <button
                          type='submit'
                          disabled={!(isValid && dirty)}
                          className={`bg-[#6E37EE] text-white text-[20px] font-medium w-full rounded-[30px] h-[50px] disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className='border-t solid border-gray-mercury-100 w-full flex justify-center'>
              <p className='text-[18px] font-bold pt-[20px]'>
                Have an account ? {''}
                <span
                  className='text-[#6E37EE] underline cursor-pointer hover:no-underline'
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Log in{' '}
                </span>
                instead.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-[#110826] h-full w-full hidden md:block' />
      </div>
    </>
  )
}

export default Register
