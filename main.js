import { createRoot } from 'react-dom/client'
import "./style.css"
// import { Component } from 'react'


function Card({ title, thumbnail, price, description }) {
    // const {key,title,image,price,description} = props    //jo upar lukha hai ,us ko aaise v likh skye hai bas whaa p hmko
    return (                                                 // () es k andar props likhna hoo gaa..     key={key}
        <div className='card' >
            <img src={thumbnail} alt="" srcSet="" />
            <div className='contant'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><b>price = ${price}</b></p>
            </div>
        </div>
    )
}

// const container =[card(1),card(2),card(3),card(4)]         //hear card pass in array or each card having keys, which help 
//to run code without error

const root = createRoot(document.querySelector("#root"))
// console.log("tryall5")
// root.render(container)

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)
        const container2 = data.products.map((product) => {
            // console.log(product)
            // return card({             //yha p arrangement eror ho rha tha es lea ham --:pdt.__ ka use kea hai or card function jo tha 
            //     key: product.id,         //whaa p y sab ko obj m rkh k call kr dea hai ab koi arrangement ka error nhi aay ga..
            //     title:product.title,
            //     thumbnail:product.thumbnail,
            //     price:product.price,
            //     description:product.description
            // })
            return <Card
                key={product.id}                            //other way to write above code..
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                description={product.description} />

        })
        console.log(container2);
        root.render(<div className='container'>{container2}</div>)
    });