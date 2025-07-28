import React from 'react'
import Form from 'next/form'
import SearchWFormReset from './SearchWFormReset';

const SearchForm = ({query}:{query?:string}) => {

  return (
    <> 
     <div>SearchForm</div>
     <Form action='/' scroll={false} className='flex items-center gap-4 search-form'>
     <input type="text" name='faiq' defaultValue={query} className='p-2 border-2' placeholder='search startups'/>

     <div className='flex gap-2'>
       {query && <SearchWFormReset />}

      <button type='submit' className='search-btn bg-amber-600 text-white p-2 rounded'>
        S
      </button>
     </div>
    </Form>
    </>
  )
}

export default SearchForm