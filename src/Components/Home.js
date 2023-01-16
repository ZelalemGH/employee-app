import React from 'react'

function Home() {
  return (
    <div>
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
          <button style={styledLogin} type="submit">
            Login
          </button>
        </div>
        <div>
          <button style={styledRegister} type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

const styledLogin = {
  display: 'flex',
  marginTop: '20px',
  margin: '5px',
  padding: '5px',
  cursor: 'pointer',
  // justifyContent: 'spaceBetween',
}

const styledRegister = {
  display: 'flex',
  marginTop: '20px',
  margin: '5px',
  padding: '5px',
  cursor: 'pointer',
  // justifyContent: 'spaceBetween',
}

export default Home
