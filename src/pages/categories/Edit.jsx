import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function CategoryEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [categories, setCategories] = useState({})

  useEffect(() => {
    const res = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/category/${id}`)
        setCategories(response.data)
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
      const edit = await axios.put(`http://localhost:5000/category/${id}`, categories)
      if (edit.status === 200) {
        navigate('/categories')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Link to='/categories' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Update Categories</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' onChange={(e) => setCategories({ ...categories, name: e.target.value })} value={categories.name} className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='bg-blue-500 border-0 hover:bg-blue-600 btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
