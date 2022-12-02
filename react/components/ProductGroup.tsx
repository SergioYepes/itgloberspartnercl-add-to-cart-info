import React from 'react'

type Props = {
    products : []
}

function ProductGroup({products}:Props) {
    console.log("mis productos",products)
  return (
    <div>ProductGroup</div>
  )
}

export default ProductGroup