import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-3xl font-bold'>SA2C3</h1>
        <ul className="flex gap-4">
            <li><Link to="/" className='hover:underline text-2xl'>Home</Link></li>
            <li><Link to="/services" className='hover:underline text-2xl'>Services</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
