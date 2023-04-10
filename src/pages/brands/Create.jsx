import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function BrandCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: ''
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
      const brand = await axios.post('http://localhost:5000/brand', form)
      if (brand.status == 201) {
        navigate('/brands')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/brands' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Create Brands</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={handleChange} value={form.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
