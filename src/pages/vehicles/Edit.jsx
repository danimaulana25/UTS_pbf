import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function VechicleEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState({})

  useEffect(() => {
    const res = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/kendaraan/${id}`)
        setVehicles(response.data)
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
      const edit = await axios.put(`http://localhost:5000/kendaraan/${id}`, vehicles)
      if (edit.status === 200) {
        navigate('/vehicles')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/vehicles' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Update Vehicles</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={(e) => setVehicles({ ...vehicles, name: e.target.value })} value={vehicles.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Color</span>
        </label>
        <input type="text" placeholder="Color" name='color' onChange={(e) => setVehicles({ ...vehicles, color: e.target.value })} value={vehicles.color} className="w-full max-w-xs input input-bordered" />
      </div>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input type="number" min={0} placeholder="Price" name='price' onChange={(e) => setVehicles({ ...vehicles, price: e.target.value })} value={vehicles.price} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
