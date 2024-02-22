import React from 'react'

const Card = ({icon,title,data}) => {
  return (
    <div className='min-w-[230px] flex flex-col gap-2 bg-primaryClr text-white shadow-black/60 shadow-md rounded-sm p-2'>
        {icon}
        <div>
            <p className='font-semibold'>{data}</p>
            <p className='font-semibold'>{title}</p>
        </div>
    </div>
  )
}

export default Card