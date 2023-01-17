import React from 'react'

function Home() {
  return (
    <div style={{ margin: '0 auto' }}>
      <h1>Welcome to the Employees Home Page</h1>
      <p>
        Erta Ale is 613 metres (2,011 ft) high, with one or sometimes two active
        lava lakes at the summit which occasionally overflow on the south side
        of the volcano.[1] It is notable for holding the longest-existing lava
        lake, present since the early years of the twentieth century (1906).
        Volcanoes with lava lakes are very rare: there are only eight in the
        world.[4] Erta Ale means "smoking mountain" in the local Afar language
        and its southernmost pit is known locally as "the gateway to Hell".
      </p>
      <div>
        <div>
          <button style={styleButton}>Login</button>
        </div>
        <div>
          <button style={styleButton}>Register</button>
        </div>
      </div>
    </div>
  )
}

const styleButton = {
  backgroundColor: '#2196F3',
  width: '100px',
  marginBottom: '10px',
  marginLeft: '10px',
  textAlign: 'center',
  padding: '3px 0',
  borderRadius: '4px',
  color: '#fff',
}

export default Home
