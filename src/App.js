import './App.css'
import EmployeePage from './Components/EmployeePage'
import HomePage from './Components/HomePage'
import Wrapper from './Components/Wrapper'
import imageOne from './assets/images/image_One.jpg'
import imageTwo from './assets/images/image_Two.jpg'
import imageThree from './assets/images/image_Three.jpg'
import imageFour from './assets/images/image_Four.jpg'
import imageFive from './assets/images/image_Five.jpg'
import imageSix from './assets/images/image_Six.jpg'

function App() {
  const employees = [
    {
      id: 1,
      name: 'James King',
      image: imageOne,
      title: 'President and CEO',
      callOff: 7810000002,
      callMobile: 2044445667,
      sms: 2044445667,
      email: 'Jamesking@gmail.com',
    },

    {
      id: 2,
      name: 'Juli Taylor',
      image: imageTwo,
      title: 'VP of Marketing',
      callOff: 7810000002,
      callMobile: 2033209918,
      sms: 2033209918,
      email: 'Julitaylor@gmail.com',
    },

    {
      id: 3,
      name: 'Eugene Lee',
      image: imageThree,
      title: 'CFO',
      callOff: 7810000002,
      callMobile: 2034527216,
      sms: 2034527216,
      email: 'Eugenelee@gmail.com',
    },

    {
      id: 4,
      name: 'John Williams',
      image: imageFour,
      title: 'VP of Engineering',
      callOff: 7810000002,
      callMobile: 2024183209,
      sms: 2024183209,
      email: 'Johnwilliams@gmail.com',
    },

    {
      id: 5,
      name: 'Ray Moore',
      image: imageFive,
      title: 'VP of Sales',
      callOff: 7810000002,
      callMobile: 2024183209,
      sms: 2024183209,
      email: 'Raymoore@gmail.com',
    },

    {
      id: 6,
      name: 'Paul Johnes',
      image: imageSix,
      title: 'QA Manager',
      callOff: 7810000002,
      callMobile: 2024183209,
      sms: 2024183209,
      email: 'Raymoore@gmail.com',
    },
  ]
  return (
    <div className="App">
      <Wrapper>
        <HomePage employees={employees} />
        <EmployeePage employees={employees} />
      </Wrapper>
    </div>
  )
}

export default App
