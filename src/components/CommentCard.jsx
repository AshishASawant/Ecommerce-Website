import React from 'react'

const CommentCard = ({props}) => {
    let {title,user,date}=props
  return (
    <div className='w-full gird p-5 bg-bg-secondary rounded-md'>
        <p className='mb-5'>{title}</p>
        <span className='leading-none pr-5 border-r-2 border-slate-400  py-0'>{user}</span>
        <span className='leading-none pl-5'>{date}</span>
    </div>
  )
}

export default CommentCard