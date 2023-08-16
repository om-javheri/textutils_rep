import React from 'react'
import { Link } from 'react-router-dom'

export default function Concert() {
  return (
    <>
    <div className=' text-center'>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" class="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" class="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>

<h1>Edit Concert</h1>
<div className='text-center'>
<div className="mb-3">

  <label HtmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert Id</label>
  <input type="number" className="" id="Ticket_Fee " placeholder="Concert ID to Edit"/>
</div>

<div><button type="button" className="btn btn-success"><Link className="nav-link " aria-current="page" to="/Edit2">Edit</Link></button>
</div>
</div>



    </div>
    </>
  )
}
