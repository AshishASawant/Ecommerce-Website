import React from 'react'
import { useNavigate } from 'react-router-dom'


const SearchProductCard = ({props,setsearchProduct}) => {

    const navigate = useNavigate()
    let {title,image,price,}=props

    const changePage = () =>{
        setsearchProduct([])
        window.scrollTo(0,0)
        navigate(`store/${title}`,{state:props})
      }

  return (
    <div className='flex gap-5 h-fit w-fit'>
        <img src={image} alt="product" className='w-[5rem] aspect-square cursor-pointer' onClick={changePage}/>
        <div className='grid justify-between'>
            <p className='line-clamp-2 h-fit'>{title}</p>
            <p className='font-medium'>$ {price}</p>
        </div>
    </div>
  )
}

export default SearchProductCard