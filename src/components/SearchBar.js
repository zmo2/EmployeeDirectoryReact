import React from "react"

class SearchBar extends React.Component {
    state = { term: "" }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onChange(this.state.term)
    };

    render() {
        return (
            <div className="ui segment">
                <form onChange={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>Employee Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar