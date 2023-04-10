import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function CategoryCreate() {
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
      const categorie = await axios.post('http://localhost:5000/category', form)
      if (categorie.status == 201) {
        navigate('/categories')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/categories' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Create Categories</p>
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
