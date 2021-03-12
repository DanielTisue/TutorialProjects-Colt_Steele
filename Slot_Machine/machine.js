
class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props; // don't have to do this.props 4 different times. 
    const isWinner= (s1 === s2) && (s2 === s3);
    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{isWinner ? 'Winner!' : 'Loser!'}</p>
      </div>
    )
  }
}