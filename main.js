import { createRoot } from 'react-dom/client'
import "./style.css"


function card(key,title,image) {
    console.log(key)
    return(
        <div className='card' key={key}>
        <img src={image} alt="" srcset="" />
         <div className='contant'>
         <h3>{title}</h3>
         <p></p>
         <p><b>price = notdefine</b></p>
         </div>
    </div>
    )
}



const container =[card(1),card(2),card(3),card(4)]

const root = createRoot(document.querySelector("#root"))


console.log("tryall5")



fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=> {
    console.log(data)
    const container2=data.products.map((product)=>{
        console.log(product)
        return card(product.id,product.title,product.thumbnail)
    })
    console.log(container2);
    root.render(<div className='container'>{container2}</div>)
});