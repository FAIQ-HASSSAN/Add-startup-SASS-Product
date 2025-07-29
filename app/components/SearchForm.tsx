import React from 'react'
import Form from 'next/form'
import SearchWFormReset from './SearchWFormReset';
import {Search} from 'lucide-react';

const SearchForm = ({query}:{query?:string}) => {

  return (
    <> 
     <div>SearchForm</div>
     <Form action='/' scroll={false} className='flex items-center gap-4 search-form'>
     <input type="text" name='query' defaultValue={query} className='p-2 border-2' placeholder='search startups'/>

     <div className='flex gap-2'>
       {query && <SearchWFormReset />}

      <button type='submit' className='search-btn bg-amber-600 text-white p-2 rounded'>
        <Search className='size-5'/>
      </button>
     </div>
    </Form>
    </>
  )
}

export default SearchForm