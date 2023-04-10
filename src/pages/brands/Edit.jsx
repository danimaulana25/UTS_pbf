import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function BrandEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [brands, setBrands] = useState({})

  useEffect(() => {
    const res = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/brand/${id}`)
        setBrands(response.data)
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
      const edit = await axios.put(`http://localhost:5000/brand/${id}`, brands)
      if (edit.status === 200) {
        navigate('/brands')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/brands' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Update Brands</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={(e) => setBrands({ ...brands, name: e.target.value })} value={brands.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
