import React, { Component } from 'react'
import img1 from '../testImages/humans4.jpg'
import img2 from '../testImages/boat1.jpg'
import img3 from '../testImages/animals2.jpg'

const withHoc = WrappedComponet => {
    class WithHOC extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                arr: [
                     {
                         id: 0,
                         img: img1
                     },
                     {
                         id: 1,
                         img: img2
                     },
                     {
                         id: 2,
                         img: img3
                     }
                ]
            }
        }
        
        render() {
            return (
                <div>
                   <WrappedComponet arr={this.state.arr}/> 
                </div>
            )
        }
    }
    return WithHOC
}

export default withHoc
