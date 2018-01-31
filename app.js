// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <TodoList todos={['cheese', 'ham', 'bread', 'apple']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
