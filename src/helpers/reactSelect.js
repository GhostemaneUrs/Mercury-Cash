export const customSelect = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 13,
    padding: '5px',
    height: '100%',
    color: '#4F5B7B',
    minHeight: '30px',
    cursor: 'pointer',
    backgroundColor: state.isDisabled
      ? '#F9FBFE'
      : state.isSelected
      ? '#F2F4F7'
      : state.isFocused
      ? '#F2F4F7'
      : '#F9FBFE',
    border: '1px solid #E4E9F0',
    ':hover': { backgroundColor: '#F2F4F7' },
  }),

  control: (provided, state) => ({
    ...provided,
    fontSize: 13,
    height: '100%',
    borderRadius: 30,
    boxShadow: 'none',
    minHeight: '50px',
    backgroundColor: '#FFFFFF',
    border: '0.5px solid #B0BEC5',
    ':hover': { borderColor: '#B0BEC5' },
    ':active': { borderColor: '#B0BEC5' },
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: '#6e37ee',
    fontSize: 16,
    fontWeight: 900,
  }),

  container: (provided, state) => ({
    ...provided,
    ':hover': {
      borderColor: '#B0BEC5',
    },
    ':focus': {
      borderColor: ' #B0BEC5',
    },
    ':active': { borderColor: ' #B0BEC5' },
  }),

  menu: (provided, state) => ({
    ...provided,
    margin: 0,
    borderRadius: 6,
  }),

  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    '::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: '#BCC9D9',
    },
    '::-webkit-scrollbar-track': {
      background: '#F9FBFE',
    },
    '::-webkit-scrollbar-track:hover': {
      background: '#F9FBFE',
    },
    '::-webkit-scrollbar-track:active': {
      background: '#F9FBFE',
    },
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    paddingTop: 7,
    height: '100%',
    paddingBottom: 0,
    color: '#6E6F7C',
    minHeight: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  clearIndicator: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#6E6F7C',
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '100%',
    display: 'flex',
    width: '100%',
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
    display: 'none',
  }),

  indicatorSeparator: state => ({
    display: 'none',
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '100%',
    minHeight: '40px',
  }),

  multiValue: (provided, state) => {
    return { ...provided, backgroundColor: '#E4E9F0', borderRadius: '2px' }
  },

  multiValueLabel: (provided, state) => {
    return { ...provided, color: '#7B849C', fontSize: '14px' }
  },

  multiValueRemove: (provided, state) => {
    return { ...provided, color: '#7B849C', ':hover': { color: '#7B849C' } }
  },
}
