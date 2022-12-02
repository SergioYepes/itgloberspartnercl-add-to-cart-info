import React from 'react'
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from './ButtonGroup'
import {generateBlockClass} from "@vtex/css-handles"
import styles from './styles.css'
// import Totalizer from './Totalizer'
// import ProductGroup from './ProductGroup'

function AddToCartInfo({blockClass}:{blockClass:string}) {
    const container = generateBlockClass(styles.container,blockClass),
          container__items = generateBlockClass(styles.container__items,blockClass),
          container__item = generateBlockClass(styles.container__item,blockClass),
          container__text=generateBlockClass(styles.container__item__text,blockClass),
          container__totalizer=generateBlockClass(styles.container__totalizer,blockClass)
    const productInfo= useProduct()
    const { orderForm:{
        items,
        totalizers
    } }= useOrderForm()
    
    console.log("info",productInfo);
    console.log("order", totalizers);
    

    return (
    <div className={container}>
        {
            items.map((item:any,index:number)=>{
                console.log(item);
                
                return (
                    <div key={index} className={container__items}>
                        <div>
                            <img src={item.imageUrls.at1x}/>
                        </div>
                        <div className={container__item}>
                            <p className={container__text}>{item.name} </p>
                            <p>{item.id}</p>
                            <p>${item.price/100}</p>
                            <p>Cant:{item.quantity}</p>

                        </div>
                    </div>
                )
            })
        }
        {/* <ProductGroup products={items} />  */}
        {/* <Totalizer totalizers={totalizers[0]}/> */}
        <div className={container__totalizer}>
            <p>Tenemos {items.length} items en el carrito</p>
            <p>Total : ${totalizers[0]?.value/100}</p>
        </div>
        
        <ButtonGroup />

    </div>
  )
}

export default AddToCartInfo