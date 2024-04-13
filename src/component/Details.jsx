import React from 'react'

const Details = (props) => {
    const { cardDetailsProp } = props
  return (
    <div className='p-4 flex-row'>
        <h2 className='font-bold'>{cardDetailsProp.villageName.charAt(0).toUpperCase() + cardDetailsProp.villageName.slice(1) + ' , ' + cardDetailsProp.mandalName.charAt(0).toUpperCase() + cardDetailsProp.mandalName.slice(1)}</h2>
        <h2 className='font-bold'>{cardDetailsProp.district_name.charAt(0).toUpperCase() + cardDetailsProp.district_name.slice(1) + ' (dt)'}</h2>
        <p className='text-sm mt-2'><b>{cardDetailsProp.sizeString}</b> • ₹ {cardDetailsProp.priceString} per acre</p>
    </div>
  )
}

export default Details