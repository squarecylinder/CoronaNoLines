import React from 'react';

function NoMatch() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Oops!</h1>
                <p className="lead">This page doesn't exist! You should go back home!</p>
                <a href="/"><button className="btn btn-primary">Home</button></a>
            </div>
        </div>
    )
}

export default NoMatch;