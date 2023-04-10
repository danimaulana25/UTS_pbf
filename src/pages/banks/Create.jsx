import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function BankCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    no_rek: ''
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
      const bank = await axios.post('http://localhost:5000/bank', form)
      if (bank.status == 201) {
        navigate('/banks')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/banks' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Create Banks</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={handleChange} value={form.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Nomor Rekening</span>
        </label>
        <input type="number" min={0} placeholder="Nomor Rekening" name='no_rek' onChange={handleChange} value={form.no_rek} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
