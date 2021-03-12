class App extends React.Component {
  render() {

    return (
      <div>
        <h1>WTF</h1>
        <Friend
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']}
        />
        <Friend
          name="Frita"
          hobbies={['Painting', 'Drawing']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));