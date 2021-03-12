class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          img="https://images.unsplash.com/photo-1531948371443-d5afa127f918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60"
        />
        <Hello
          to="Cher"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));