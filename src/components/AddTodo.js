import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '5px' }}>
                <input type="text" 
                name="title" 
                style={ inputStyle }
                placeholder="Add To Do..." 
                value = {this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Submit" 
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

const inputStyle = {
    paddingLeft: '5px',
    flex: '10'
}

export default AddTodo
