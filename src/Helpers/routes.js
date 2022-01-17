import React from 'react';
import {Navigate} from 'react-router-dom'

// import * as R from '../components/constants/router'

// export const IsUserNavigate = ({user, loggedInPath, children, ...otherProps}) => {
//     return ( 
//         <Route 
//             {...otherProps}
//             render ={()=>{
//                 if(!user){
//                     return children
//                 }
//                 if(user){
//                     return(
//                         <Navigate 
//                             to = {{
//                                 pathName: loggedInPath
//                             }}
//                         />
//                     )
//                 }
//                 return null
//             }}
//         />
//      );
// }

export const IsUserNavigate =({user,children,loggedInPath, ...otherProps}) =>{
    return (
        user ? <Navigate { ...otherProps } to={loggedInPath} replace /> : children
    )
}

export const ProtectedNavigate =({user,children,location, ...otherProps}) =>{
  
    return (
        user ===!null ? <Navigate { ...otherProps } to={{
            pathname:'/signin',
            state: {from: location}  
        }} replace /> : children
    )
}