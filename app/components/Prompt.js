let React = require('react');
let transparentBg= require('../styles').transparentBg;

let Prompt = React.createClass({
    render: function() {
        return (
          <div className="jumbotron" style={transparentBg}>
            <h1>{this.props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={this.props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github Username"
                            onChange={this.props.onUpdateUser}
                            value={this.props.username}
                            type="text" />
                    </div>
                    <div className="form-group col-sm-4">
                        <button
                            className="btn btn-block"
                            type="submit">
                                Continue
                        </button>
                    </div>
                </form>
            </div>
          </div>
        )
    }
})