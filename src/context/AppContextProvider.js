import React from 'react';
import {AppContext} from './app-context';

export default class extends React.Component{
    state = {
        token:null,
        contacts:[]
    }

    componentDidMount(){
        const token = localStorage.getItem("TOKEN");
        console.log(token);
        if(token){
            this.setState({token:token,contacts:[]});
        }
    }
    
    updateContacts = (contacts) => this.setState({...this.state,contacts});

    findContactById = (id) => this.state.contacts.find(c => c.id === id);

    logout = () => {
        localStorage.removeItem("TOKEN");
        this.setState({token:null,contacts:[]});
    }

    updateToken = (token) => {
        localStorage.setItem("TOKEN",token);
        this.setState({token,contact:[]});
    }

    render(){
        return (
            <AppContext.Provider value={{
                contacts:this.state.contacts,
                token: this.state.token,
                updateContacts: this.updateContacts,
                findContactById: this.findContactById,
                logout: this.logout,
                updateToken: this.updateToken
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}