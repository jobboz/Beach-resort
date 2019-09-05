import React, { Component } from 'react'
import items from './data';

const RoomContext = React.createContext()

 class RoomProvider extends Component {
    state = {
      rooms:[],
      sortedRoom: [],
      featuredRoom: [],
      loading:true
    }
    //getData

    componentDidMount(){
        let rooms = this.formateData(items)
       let featuredRoom = rooms.filter(room => room.featured === true)
       this.setState({
           rooms,
           featuredRoom, 
           sortedRoom: rooms,
           loading: false
       })
    }
    formateData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }

     getRoom = (slug) => {
         let tempRoom = [...] 

    } 
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
              {this.props.children}

            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};