import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  let[cart,setCart]=useState(0);
  let product=[
    {
      name:"cup Nodels",
      price:2 
    },
    {
      name:"Briyani",
      price:5 
    },
    {
      name:"meals",
      price:1 
    },
    {
      name:"Burger",
      price:5 
    },
    {
      name:"maxican Tacco",
      price:2 
    }
  ]
  return <>
      <Navbar cart={cart} setCart={setCart}/>
      <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Shop in style</h1>
                        <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            product.map((e,i)=>{
              return <Card cart={cart} setCart={setCart}product={e}key={i}/>
            })
          }
        </div>
      </div>
    </section>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
    </footer>
  </>
  
}

export default App
