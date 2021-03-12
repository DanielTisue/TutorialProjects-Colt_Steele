class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props; // don't have to do this.props 4 different times. 
    const isWinner = (s1 === s2) && (s2 === s3);
    const colors = { fontSize: '50px', backgroundColor: 'purple'};

    return (
      <div className="Machine">
        <p style={colors}>{s1} {s2} {s3}</p>
        <p className={isWinner ? 'win' : 'lose'}>
        {isWinner ? 'Winner!' : 'Loser!'}</p>
      </div>
    )
  }
}