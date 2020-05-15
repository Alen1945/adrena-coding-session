import React from 'react'
import {Route} from 'react-router-dom'

export default function RouteLink(props){
  const {title, component,...anotherProps} = props
  document.title=title
  return (
    <Route {...anotherProps} component={component}/>
  )
}