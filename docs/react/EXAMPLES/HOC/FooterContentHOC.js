import React, {Component} from 'react';
import misc_var from "../Misc/MiscVariables";
import FooterContentHOC from "../../../../resources/react/src/components/FooterComponents/FooterContentHOC";
import AboutInfoF from "../../../../resources/react/src/components/FooterComponents/AboutInfoF";

// create a normal js function that takes in a component and a dataset
// note that data, and props are passed in here, this will allow you to pass in props down the line to the actual
// wrapped component. Essentially if you want to make changes to the wrapped components, pass props to the FooterContentHoc
// call; if you want to make changes to the wrapper (i.e. html FooterContentHoc is adding around the component) then
// when you get your component back, set props like you normally world
// for example:

// var about_info_data = [
//     <a href={'https://www.google.com'}>About Us</a>,
//     <a href={'https://www.google.com'}>News</a>,
//     <a href={'https://www.google.com'}>Our Team</a>,
// ]
// This will pass the props to the html around the component
// const ListInfo = FooterContentHOC(AboutInfoF,about_info_data,{title:'About'})
// This will pass the props to the wrapped component
// <ListInfo text='green'/>
// similar to unpacking a kwargs, we can use ...props to unpack an object (kinda like a dictionary being un packed in python) and
// unpack, assigning the prop keys in the wrapped component to the keys in the prop object we just passed
// essentially the props we passed is used for the surrounding html we are used for wrapping, while this.props is only used
// when we insert our component (<ListInfo prop=whatever/>) and we just set it up to dump this.props into the component with {...this.props} (again unpacking)
export default function FooterContentHoc(HocComponent, data,props) {
    // all you are doing here is returning the newly created component, just act as if you had created a new
    // component class and treat it appropriately. Props can be passed into the new once you run the this function and
    // get a new component
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            }
        }

        static defaultProps = {
            containing_div_class: 'col l4 s8',
            test:'red'

        }

        render() {
            return (
                <div className={props.containing_div_class}>
                    <p style={{color:props.test}}>hey what up</p>
                    <HocComponent data={this.state.data} {...this.props}/>
                </div>
            );
        }
    }
}