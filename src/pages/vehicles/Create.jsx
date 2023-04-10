import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function VechicleCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    color: '',
    price: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const vehicle = await axios.post('http://localhost:5000/kendaraan', form)
      if (vehicle.status == 201) {
        navigate('/vehicles')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/vehicles' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Create Vehicles</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={handleChange} value={form.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Color</span>
        </label>
        <input type="text" placeholder="Color" name='color' onChange={handleChange} value={form.color} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input type="number" min={0} placeholder="Price" name='price' onChange={handleChange} value={form.price} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
