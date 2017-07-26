'use strict';

import  React   from  'react';

const   Nav =  React.createClass({

    render(){
        const  nav         = this.props.nav;
        const  navItem  = nav.map((item,index)=>{
            return <li key={index}><a  className={item.className}  href={item.link}  target={item.target}>{item.title}</a></li>
        })

        return(
            <div className="csj_navList">
                <ul >{navItem}</ul>
            </div>
        )
    }
})

export default  Nav;
