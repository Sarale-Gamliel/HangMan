const HEAD = (
    <div style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '7px solid black',
      position: 'absolute',
      top: '45px',
      right: '975px'
    }} />
  )
  
  const BODY = (
    <div style={{
      width: '10px',
      height: '130px',
      background: 'black',
      position: 'absolute',
      top: '105px',
      right: '1000px'
    }} />
  )
  
  const RIGHT_ARM = (
    <div
      style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "990px",
        transform: "rotate(-30deg)",
        transformOrigin: "left bottom",
        borderRadius: '12px'
      }}
    />
  )
  
  const LEFT_ARM = (
    <div
      style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "930px",
        transform: "rotate(30deg)",
        transformOrigin: "right bottom",
        borderRadius: '12px'
      }}
    />
  )
  
  const RIGHT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "220px",
        right: "912px",
        transform: "rotate(60deg)",
        transformOrigin: "left bottom",
        borderRadius: '12px'
      }}
    />
  )
  
  const LEFT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "220px",
        right: "998px",
        transform: "rotate(-60deg)",
        transformOrigin: "right bottom",
        borderRadius: '12px'
      }}
    />
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  const HangmanDrawProps = {
    numberOfGuess: Number
  }
  
  const HangmanDraw = (props) => {
    const {numberOfGuess}= props;
    return (
      <div style={{ position: 'relative' }}>
        {BODY_PARTS.slice(0, numberOfGuess)}
        <div style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: '0',
          right: '0',
          borderRadius: '12px',
          marginRight: '1000px'
        }} />
  
        <div style={{
          height: '10px',
          width: '330px',
          background: 'black',
          marginLeft: '120px'
        }} />
  
        <div style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px'
        }} />
  
        <div style={{
          height: '10px',
          width: '250px',
          background: 'black',
          borderRadius: '12px'
        }} />
      </div>
    )
  }
  
  export default HangmanDraw