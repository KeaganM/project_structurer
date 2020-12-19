import React from 'react';


export default function BasicDropDown(props) {
    console.log(props)
    return <div>
        <a className='dropdown-trigger btn' href='#'
           data-target={props.data_target}>{props.display_name}</a>
        <ul id={props.data_target} className='dropdown-content'>
            {
                props.content.map((value, index) => {
                    return <li><a href={value.link}>{value.text}</a></li>
                })
            }
        </ul>
    </div>

}
