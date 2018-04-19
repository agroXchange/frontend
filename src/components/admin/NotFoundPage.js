import React, { PureComponent } from "react"

class NotFound extends PureComponent{



	render() {
    return (
      <div>
				<h1>Page Not Found</h1>
				<p>Sorry, there is nothing to see here.</p>
        <button
          onClick={() => this.props.history.goBack()}
        >
          Go Back
        </button>
			</div>
    )
  }
}


export default NotFound
