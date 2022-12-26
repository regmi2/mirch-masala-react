import React from 'react'
import './App.css'
import vegApp from './menuJSON/vegApp.json'
import nonVegApp from './menuJSON/nonVegApp.json'
import soupSalad from './menuJSON/soupSalad.json'
import bread from './menuJSON/bread.json'
import chickenCurry from './menuJSON/chickenCurry.json'
import lambCurry from './menuJSON/lambCurry.json'
import beefCurry from  './menuJSON/beefCurry.json'
import seafood from './menuJSON/seafood.json'
import tandoor from './menuJSON/tandoor.json'
import rice from './menuJSON/biryaniRice.json'
import vegEntree from './menuJSON/vegEntree.json'
import dinner from './menuJSON/dinner.json'
import dessert from './menuJSON/dessert.json'



const App = () => {



  //const menuArray = JSON.parse()

  




  return(
    <div>
      <div className="container">
        
        <div className="header">
       
          
          <h1> Mirch Masala Menu </h1>
          <div className='address-number'>
            <h4> <a href='https://goo.gl/maps/vd6nZFUGd6yvaghS9'>439 Grand Canyon Dr, Madison, WI 53719 </a> <br/>
            Phone: (608)203-5387</h4>
          </div>
        </div>
        <div className="menu">

          <h2 className="section-heading">
            Veg Apps
          </h2>
          <section className="menu-section">
          {
          vegApp.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Non-Veg Apps
          </h2>
          <section className="menu-section">
          {
          nonVegApp.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Soup and Salad
          </h2>
          <section className="menu-section">
          {
          soupSalad.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Bread
          </h2>
          <section className="menu-section">
          {
          bread.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Chicken Curry
          </h2>
          <section className="menu-section">
          {
          chickenCurry.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Lamb Curry
          </h2>
          <section className="menu-section">
          {
          lambCurry.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>


          <h2 className="section-heading">
            Beef Curry
          </h2>
          <section className="menu-section">
          {
          beefCurry.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Seafood
          </h2>
          <section className="menu-section">
          {
          seafood.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Mirch Masala Tandoor
          </h2>
          <section className="menu-section">
          {
          tandoor.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Biryani/Rice
          </h2>
          <section className="menu-section">
          {
          rice.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>


          <h2 className="section-heading">
            Vegetarian Entrees
          </h2>
          <section className="menu-section">
          {
          vegEntree.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>


          <h2 className="section-heading">
            Dinners
          </h2>
          <section className="menu-section">
          {
          dinner.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
              
              </div>
            )
          })
        }
          </section>

          <h2 className="section-heading">
            Dessert
          </h2>
          <section className="menu-section">
          {
          dessert.map(item => {
            return(
              <div className="item" key={item['Item Number']}>
                <div className="item-header">
                  <h4>{item.Name}</h4>
                  <h4>{item.Price}</h4>
                </div>
                <div className="item-text">
                  <p>{item.Description}</p>
                </div>
                
              </div>
              
            )
          })
        }
        
          </section>
          <div className='footer'>
          <small> Mirch Masala © 2022</small>
          </div>
          

          




        </div>
      </div>


      


      
    </div>

  )
}



export default App
