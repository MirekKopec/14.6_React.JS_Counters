
var Counter1 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {className: 'counter1'},
            React.createElement('h1', {}, 'counter 1: ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '<<< decrement'),
            React.createElement('button', {onClick: this.increment}, 'increment >>>')
            )
        );
    }
});


var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {className: 'counter2'},
            React.createElement('h1', {}, 'counter 2: ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '<<< decrement'),
            React.createElement('button', {onClick: this.increment}, 'increment >>>')
            )
        );
    }
});


var Counter3 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {className: 'counter3'},
            React.createElement('h1', {}, 'counter 3: ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '<<< decrement'),
            React.createElement('button', {onClick: this.increment}, 'increment >>>')
            )
        );
    }
});


var Counter4 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {className: 'counter4'},
            React.createElement('h1', {}, 'counter 4: ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '<<< decrement'),
            React.createElement('button', {onClick: this.increment}, 'increment >>>')
            )
        );
    }
});

var App = React.createClass({

  render: function() {
    
    return (
        React.createElement('div', {className: 'Counters'},
        React.createElement(Counter1),
        React.createElement(Counter2),
        React.createElement(Counter3),
        React.createElement(Counter4)
      )
    );
  }
});


var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

