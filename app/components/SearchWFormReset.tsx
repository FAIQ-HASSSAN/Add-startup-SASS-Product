'use client'; // This is a client component
import Link from 'next/link';
import React from 'react'

const SearchWFormReset = () => {

  const reset = () =>{
    const form = document.querySelector('.search-form') as HTMLFormElement;
    // if(form) form.reset();
  }

  return (
     <button type='reset' onClick={reset}>
        <Link href='/' className='bg-red-500 text-white px-4 py-2 rounded'>
         X
        </Link>
     </button>
  )
}

export default SearchWFormReset