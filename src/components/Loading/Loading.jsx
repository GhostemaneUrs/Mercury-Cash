import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {loading && (
        <div className='bg-[#ffffffaa] h-full w-full absolute z-[15]'>
          <div className='flex justify-center items-center w-full h-full'>
            <ClipLoader color='#6e37ee' loading={loading} size='170px'/>
          </div>
        </div>
      )}
    </>
  )
}

export default Loading
