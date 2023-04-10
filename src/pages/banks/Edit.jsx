import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';

export default function BankEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [banks, setBanks] = useState({})

  useEffect(() => {
    const res = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/bank/${id}`)
        setBanks(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    res()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const edit = await axios.put(`http://localhost:5000/bank/${id}`, banks)
      if (edit.status === 200) {
        navigate('/banks')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/banks' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Update Banks</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={(e) => setBanks({ ...banks, name: e.target.value })} value={banks.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Nomor Rekening</span>
        </label>
        <input type="number" min={0} placeholder="Nomor Rekening" name='no_rek' onChange={(e) => setBanks({ ...banks, no_rek: e.target.value })} value={banks.no_rek} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
