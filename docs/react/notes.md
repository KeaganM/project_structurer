#React CSS

- to import css into a react component, you can do it in multiple ways:
     - create a normal css file and simply just import it like so : import './styles.css'
        - add the class name like you would in normal html
     - create a css module (mystyle.module.css) and import it like so: import style './mystyle.module.css'
        - in the className, use the '.' operator to access the css class (e.g. style.myCssClass)
        - this would be good for one off class for components, and that way everything can be kept together.


#React HOC

- An hoc seems similar to the concept of a decorater in python in that it is a regular javascript function that
takes in an input of a react component and a set of data, does something, and returns a new component. This may be
useful when you want to do something to componenet, or when you have similar components with minor changes. In one
example, I had two components in a footer component, one a list of support links and one a list of about links. Both
were extremely similar with the only difference being some minor css attributes and the data they were displaying.
to get the hoc to work I first created a file called FooterContentHOC. In it it would accept a component and data.
It would then create a new class component, and just like a normal class component, a render method would return
the html. This is where I would do the decorating and wrap the passed component in some custom html. The created class
would be return and thus a new component was return:
```javascript
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
```


the component to be passed look like this:

```javascript
import React from 'react';

// here I have a normal and simple component that takes in a array and returns a div with list items
// this will be passed in the FooterContentHOC where it will undergo some custom html wrapping
// this is nice since this can be resued somewhere else if need but it also makes this simpler
// the other method that was used before was the import FooterContent and essentially customize it to be this ListInfo
// component, which works however there would be multiple Footercontent classes with some slight changes which may be
// unnecessarily complicated.
export default class AboutInfoF extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.map((value, index) => {
                    return <li>{value}</li>
                })}
            </div>

        )
    }
}
```

Finally in the Footer.js where all the footer components are gathered together, it would look like this:

```javascript

import React from 'react';

import SocialMediaIcons from '../IconComponents/SocialMediaIcons'
import FooterContent from "./FooterContent";
import SupportInfo from "./SupportInfo";
// import ListInfo from "./ListInfo";

import FooterContentHOC from "./FooterContentHOC";
import AboutInfoF from "./AboutInfoF";

import styles from './css/FooterStyles.module.css'

// first we go ahead and create the data we want in out component that will be passed to the HOC
var about_info_data = [
    <a href={'https://www.google.com'}>About Us</a>,
    <a href={'https://www.google.com'}>News</a>,
    <a href={'https://www.google.com'}>Our Team</a>,
]

// next we essentially create the ListInfo component (a constant that is assigned to a react component)
// Where the FooterContentHOC wraps the AboutInfoF component, and takes in the data we initialized above
const ListInfo = FooterContentHOC(AboutInfoF,about_info_data)

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {}


    render() {
        return (
            <footer className={'page-footer blue-grey ' + styles.footer}>
                <div className={'container'}>
                    <div className='row'>
                        finally we have our aboutinfo component where we can pass in props to change it up. This will
                        actually change up props in the HOC
                        <ListInfo test='green'/>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer
```


### React Routes

In order to properly use routes you will need to import the following if you have both your
links and your routes in the same file:

```react
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
```

and write the app like so: 

```react
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/users'>
                        <Users/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function About() {
    return <h2>about</h2>
}

function Users() {
    return <h2>users</h2>
}

function Home() {
    return <h2>home</h2>

```
Note, for some reason all routes should come before the '/' route otherwise it may not work. 
 
If you want to separate your links and your routes for example, have your links in the header component and 
your routes elsewhere you will first want to import just 

```react
import {Links} from "react-router-dom"
```

and apply them like so

```react
<HeaderItem content={<Link to='/main'>Main</Link>}/>
```

and then wherever you want your routes you would:

```react
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            button_text: 'a test from app'
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <SideNav/>
                    <Header/>
                    <Switch>
                        {/*note routes should come before the home path "/"*/}
                        <Route path='/main'>
                            <ContentContainer/>
                        </Route>
                        <Route path='/about'>
                            <p>an about</p>
                        </Route>
                        <Route path='/'>
                            <LandingContainer/>
                        </Route>

                    </Switch>
                    <Footer/>
                </Router>
            </div>

        )
    }
}
```

However you should import both the links and the routes that will go together into the same
file such as the app.js. It would probably be best if you had the links in the header/footer
or other components that are accessible at all times so that the routes can always be tied to them
in the app folder:

```react
render() {
        return (
            <nav>
                <div className='nav-wrapper blue-grey'>
                    <div className='container'>
                        <Logo custom_css='my-custom-class'/>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <HeaderItem content={<BasicLink link='https://www.google.com' text='google'/>}/>
                            <HeaderItem content={<Link to='/main'>Main</Link>}/>
                            <HeaderItem content={<BasicDropDown display_name='dropdown' data_target='dropdown_1'
                                                                content={
                                                                    [
                                                                        {
                                                                            link: 'https://www.google.com',
                                                                            text: 'google'
                                                                        },
                                                                        {
                                                                            link: 'https://www.facebook.com',
                                                                            text: 'facebook'
                                                                        }

                                                                    ]
                                                                }

                            />}/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
```

so here you have the Link the the file Header.js and then you would have your switch/routes in the
App.js. So App.js acts as the overarching component that takes in all the other components 
(and their nested components as well): 


```react
    render() {
        return (
            <div>
                <Router>
                    <SideNav/>
                    <Header/>
                    <Switch>
                        {/*note routes should come before the home path "/"*/}
                        <Route path='/main'>
                            <ContentContainer/>
                        </Route>
                        <Route path='/about'>
                            <p>an about</p>
                        </Route>
                        <Route path='/'>
                            <LandingContainer/>
                        </Route>

                    </Switch>
                    <Footer/>
                </Router>
            </div>

        )
    }
}
```
 