import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Servises extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo illum dolore magni similique"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo illum dolore magni similique"
            },
            {
                icon:< FaShuttleVan/>,
                title:"Free Shuttle",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo illum dolore magni similique"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo illum dolore magni similique"
            }
        ]
    }
    render() {
        return (
            <section className = "services">
                 <Title title="Services"/>
                 <div className="services-center">
                     {this.state.services.map((item, index) => {
                       return <article key={index}  className="services">
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                              <p>{item.info}</p>
                       </article>
                     })}
                 </div>
                
            </section>
        )
    }
}

