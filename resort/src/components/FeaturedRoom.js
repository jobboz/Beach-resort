import React, { Component } from 'react'
import { RoomContext } from '../context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRoom: rooms }  = this.context
          rooms = rooms.map(room => {
              return <Room key={room.id} room={room}/>
          })
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                {loading ? <Loading/>: rooms }

                </div>
              
            </section>
        )
    }
}
