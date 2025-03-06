import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-blue-900 text-white p-4 fixed w-full top-0 left-0'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-3xl font-bold'>
          <Link to="/">SA2C3</Link>
          </h1>
        <ul className="flex gap-4">
            <li><Link to="/" 
            className='hover:underline text-2xl'>Home</Link></li>
            <li><Link to="/services" 
            className='hover:underline text-2xl'>Services</Link></li>
            <li>
              <Link to="/staff"
              className="hover:underline text-2xl">Staff</Link>
            </li>
            <li>
              <Link to="/contact"
              className="hover:underline text-2xl">Contact</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
