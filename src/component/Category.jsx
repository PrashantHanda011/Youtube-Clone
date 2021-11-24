import React from 'react'
import { useEffect,useState } from 'react'
import data from '../data/category'
import '../style/category.css'

function Category() {
   
    const [Data, setData] = useState(data)
    return (
        <div className='category-block'>
        <div className='category'>
            {Data.map((item,index)=>{
                  return (
                      <div className="category-items">
                        <button>{item.name}</button>
                      </div>
                  )  
            })}
        </div>
        </div>
    )
}

export default Category
