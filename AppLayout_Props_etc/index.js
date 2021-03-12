class App extends React.Component {
  render(){
    return (
      <div>
        <Hello 
          to="Ringo" 
          from="Paul"
          bangs={4} 
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          isNotFunny
          img="https://images.unsplash.com/photo-1531948371443-d5afa127f918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60"
          />
        <Hello
          to="Cher"
          from="Sonny"
          bangs={10}
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          isNotFunny
        />
         {/* <Hello to="Cher" from="Sonny"/>  */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));