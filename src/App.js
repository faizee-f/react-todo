import './App.css';

import React, { useState } from 'react';
import Swal from 'sweetalert2'


function TodoApp() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  function addTodo() {
    if (toDo !== "") {

      setToDos([...toDos, { id: Date.now(), text: toDo, status: false, isEdit: false, delete: false }])
    }
  }
  return (
    <div className='container mt-5'>
      <div className="container-fluid ">
        <div className="row justify-content-center bg-danger text-white shadow-sm rounded p-3">
          <h1>toDo</h1>
        </div>
        <div className='text-center mt-3'>
          <span>Add items to the list</span>
        </div>
        <div className="mt-3 d-flex align-items-center justify-content-between bg-white shadow-sm rounded p-2">
          <div className="input-group ">
            <div className="input-group-prepend ">

            </div>
            <textarea value={toDo} onChange={(e) => setToDo(e.target.value)} type="textarea" className="bg-white form-control p-3 border-0 m-3" aria-label="Text input with checkbox" placeholder='Input your toDo here' />
          </div>
          <input type='submit' value='Add' className='m-3 p-2  btn btn-danger' onClick={addTodo} />

        </div>
        <nav className='mt-4'>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item col-4 text-center nav-link active" id="nav-pending-tab" data-toggle="tab" href="#nav-pending" role="tab" aria-controls="nav-pending" aria-selected="true">Pending</a>
            <a className="nav-item col-4 text-center nav-link" id="nav-completed-tab" data-toggle="tab" href="#nav-completed" role="tab" aria-controls="nav-completed" aria-selected="false">Completed</a>
            <a className="nav-item col-4 text-center nav-link" id="nav-deleted-tab" data-toggle="tab" href="#nav-deleted" role="tab" aria-controls="nav-deleted" aria-selected="false">Deleted</a>

          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">

          {/* pending task */}
          <div className="tab-pane fade show active" id="nav-pending" role="tabpanel" aria-labelledby="nav-pending-tab">
            {
              toDos.map((item) => {
                if (item.status == false && item.delete == false) {
                  return (
                    <div id={item.id} className="mt-3 d-flex align-items-center justify-content-between bg-white  rounded p-2">
                      <div className="input-group mb-3 shadow-sm">
                        <div className="input-group-prepend ">
                          <div className="input-group-text bg-danger">
                            <input onChange={(e) => {
                              console.log(e.target.value)
                              console.log(item)
                              setToDos(toDos.filter(obj2 => {
                                if (obj2.id === item.id) {
                                  obj2.status = e.target.checked
                                }
                                return obj2
                              }))
                            }} value={item.status} type="checkbox" aria-label="Checkbox for following text i nput" />
                          </div>
                        </div>
                        <textarea value={item.text} type="textarea" className="bg-white form-control p-3 border-0 " aria-label="Text input with checkbox" disabled />
                      </div>
                      <div className='p-2 text-danger'>
                        <i className="fas fa-edit my-2" onClick={() => {
                          console.log("Edit clicked")
                          console.log(item.id)
                          Swal.fire({
                            title: 'Update your To Do',
                            input: 'textarea',
                            inputAttributes: {
                              autocapitalize: 'off'
                            },
                            inputValue:item.text,
                            showCancelButton: true,
                            confirmButtonText: 'Update',
                            showCancelButton: true,
                            inputValidator: (value) => {
                              if (!value) {
                                return 'You need to write something!'
                              }
                              if (value){
                                setToDos(toDos.filter(obj2 => {
                                  if (obj2.id === item.id) {
                                    obj2.text = value
                                  }
                                  return obj2
                                }))
                              }
                            }
                          })
                          





                        }}></i>
                        <i className="fas fa-trash my-2" onClick={() => {
                          console.log("Delete clicked")
                          console.log(item.id)
                          setToDos(toDos.filter(obj2 => {
                            if (obj2.id === item.id) {
                              obj2.delete = true
                            }
                            return obj2
                          }))

                        }}></i>
                      </div>

                    </div>
                  )
                }
              })
            }

          </div>

          {/* completed tasks */}
          <div className="tab-pane fade" id="nav-completed" role="tabpanel" aria-labelledby="nav-completed-tab">

            {
              toDos.map((item) => {
                if (item.status) {
                  return (
                    <div id={item.id} className="mt-3 d-flex align-items-center justify-content-between bg-white  rounded p-2">
                      <div className="input-group mb-3 shadow-sm">
                        <div className="input-group-prepend ">
                          <div className="input-group-text bg-danger">
                            <input onChange={(e) => {
                              console.log(e.target.value)
                              console.log(item)
                              setToDos(toDos.filter(obj2 => {
                                if (obj2.id === item.id) {
                                  obj2.status = e.target.checked
                                }
                                return obj2
                              }))
                            }} value={item.status} type="checkbox" aria-label="Checkbox for following text i nput" />
                          </div>
                        </div>
                        <textarea value={item.text} type="textarea" className="bg-white form-control p-3 border-0 " aria-label="Text input with checkbox" disabled />
                      </div>


                    </div>
                  )
                }
              })
            }

          </div>

          {/* deleted tasks */}
          <div className="tab-pane fade" id="nav-deleted" role="tabpanel" aria-labelledby="nav-deleted-tab">
            {
              toDos.map((item) => {
                if (item.delete) {
                  return (
                    <div id={item.id} className="mt-3 d-flex align-items-center justify-content-between bg-white  rounded p-2">
                      <div className="input-group mb-3 shadow-sm">
                        <div className="input-group-prepend ">
                          <div className="input-group-text bg-danger">
                            <input onChange={(e) => {
                              console.log(e.target.value)
                              console.log(item)
                              setToDos(toDos.filter(obj2 => {
                                if (obj2.id === item.id) {
                                  obj2.status = e.target.checked
                                }
                                return obj2
                              }))
                            }} value={item.status} type="checkbox" aria-label="Checkbox for following text i nput" />
                          </div>
                        </div>
                        <textarea value={item.text} type="textarea" className="bg-white form-control p-3 border-0 " aria-label="Text input with checkbox" disabled />
                      </div>


                    </div>
                  )
                }
              })
            }

          </div>


        </div>



      </div>

    </div >
  )
}
export default TodoApp