import React, { Component } from 'react';
import BestSellers from './BestSellers';
import Carousel from './Carousel';


export class Home extends Component {
    render() {
        return (
            <div>
               <div> <Carousel/></div>
               <div>
                   <BestSellers/>
               </div>
            </div>
        )
    }
}

export default Home
