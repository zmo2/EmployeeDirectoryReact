import React from "react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { term: "" }
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onchange(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onChange={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>Employee Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value }, () => this.props.onchange(this.state.term))} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar