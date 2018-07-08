import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    state = {
        isLoading: true,
        contacts: []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        fetch('https://randomuser.me/api/?results=50&nat=us')
            .then(res => res.json())
            .then(data => data.results.map(user => (
                {
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    location: `${user.location.street}, ${user.location.city}`
                }
            )))
            .then(contacts => this.setState({
                contacts,
                isLoading: false
            }))
            .catch(err => console.log(err))
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts))
        localStorage.setItem('contactsDate', Date.now())
    }
    
    

    render() {
        const {isLoading, contacts} = this.state;
        console.log(contacts)
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Contact List <button className="btn btn-sm btn-danger">Get more</button></h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && contacts.length > 0 ? contacts.map(contact => {
                                const {name, username, email, location} = contact;
                                return <Collapsible  key={username} title={name}>
                                          <p>{email}<br />{location}</p>
                                       </Collapsible>
                            }) : null
                        }
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
