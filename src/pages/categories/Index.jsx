import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CategoryIndex() {
  const [category, setCategory] = useState([])
  const [modal, setModal] = useState(false)
  const [dataModal, setDataModal] = useState({
    id: '',
  })

  const getCategory = async () => {
    let res = await axios.get('http://localhost:5000/category')
    setCategory(res.data)
  }
  const handleModal = async (id) => {
    setModal(!modal)
    let data = await axios.get(`http://localhost:5000/category/${id}`)
    setDataModal(data.data)
  }
  const handleDelete = async (id) => {
    try {
      const del = await axios.delete(`http://localhost:5000/category/${id}`)
      if (del.status === 200) {
        getCategory()
        setModal(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">List Category</p>
        <Link to={'/categoriesCreate'} className="bg-gray-200 btn btn-ghost"><i class="fa-solid fa-circle-plus mr-1"></i>Create</Link>
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>action</th>
            </tr>
          </thead>
          <tbody>
            {
              category.map((category, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className='text-center'>{category.name}</td>
                    <td className='text-center'>
                      <div className="flex items-center justify-center gap-2">
                        <Link to={'/categories/' + category.id} className="text-black bg-yellow-400 border-0 hover:bg-yellow-500 btn">Edit</Link>
                        <button onClick={() => handleModal(category.id)} className="bg-red-500 border-0 hover:bg-red-600 btn ">Delete</button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <label htmlFor="my-modal-4" className={`fixed top-0 bottom-0 left-0 right-0  justify-center cursor-pointer  z-[999] items-center ${modal ? 'flex' : 'hidden'}`}  >
        <label className="relative modal-box" htmlFor="">
          <h3 className="text-lg font-bold">
            <div className="shadow-lg alert alert-warning">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Alert!</span>
              </div>
            </div>
          </h3>
          <p className="py-4">Are you sure delete <strong>{dataModal.name}</strong>?</p>
          <div className="flex justify-end gap-1">
            <button onClick={() => handleDelete(dataModal.id)} className="bg-green-600 border-0 btn hover:bg-green-700">Delete</button>
            <label onClick={() => setModal(false)} className="bg-red-500 border-0 btn hover:bg-red-700" htmlFor='my-modal-4'>Cancel</label>
          </div>
        </label>
      </label>
    </div>
  )
}
