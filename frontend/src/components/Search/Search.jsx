import React, { useState } from 'react'
import '../Search/Search.css';
import {useNavigate} from 'react-router-dom'

function Search() {
    const [keyword,setkeyword]=useState("")
   const navigate= useNavigate()
    const searchHandler=()=>{
      
        // console.log(keyword)
        navigate('/?keyword='+keyword)
       
    }
  return (
    <div className='container-fluid' id='searchContainer'>
        <div className='total_search row'>
            <div className='search_bar col-md-4'>
                <input type='text' placeholder='Find your belongings  . . . . .' onChange={(e)=>setkeyword(e.target.value)} onBlur={searchHandler}/>
                <button type='submit' onClick={searchHandler}><i class="fa fa-search" aria-hidden="true"></i> </button>
               
            </div>
            <div className='search_filter col-md-4'>
                <select>
                    <option value='all'>All</option>
                   
                    <option value='clothes'>Clothes</option>
                    <option value='accessories'>Accessories</option>
                </select>
            </div>
            <div className='sort_by col-md-4'>
                <select>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                    <option value='highest'>Highest Price</option>
                    <option value='lowest'>Lowest Price</option>
                </select>
            </div>

        </div>
      
    </div>
  )
}

export default Search
