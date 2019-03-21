import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown,Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import { connect } from 'net';

const Navbarbox =({user}) =>{
    return(
        <Menu secondary pointing>
            <Menu.Item as={Link} to="/App">home</Menu.Item>
            <Menu.Menu position="right">
                <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)}/>}>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown>
            </Menu.Menu>
        </Menu>

    );

 Navbarbox.propTypes = {
     user: propTypes.shape({
        email: propTypes.string.isRequired
     }).isRequired
 };

 function mapStateToProps(state){
     return{
         user: state.user
     }
 }
}
export default connect(mapStateToProps, { logout }) (Navbarbox);