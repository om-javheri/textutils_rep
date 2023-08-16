import React from 'react'
import { Link } from 'react-router-dom'

export default function Concert() {
  return (
    <>
    <div className=' text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" className="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" className="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>
</div>

<h1>Create New Concert</h1>

<div className="mb-3 container">

  <label HtmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert Name</label>
  <input type="text" className=" my-2  " id="Concert_Name" placeholder="Enter Concert Name"/>
  <label HtmlFor="formFile" className="form-label col-5 "></label>
  <label HtmlFor="formFile" className="form-label mb-3 my-3 mx-2  ">Concert Image</label>
  <input className="" type="file" alt='image' id="Concert_Image"></input>
  
</div>
<div className="mb-3 container">
<label HtmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3">Team Name</label>
  <input type="email" className="my-2 mx-3 " id="Team_Name" placeholder="Enter Team Name"/>
  <label HtmlFor="formFile" className="form-label col-5 "></label>
  <label HtmlFor="formFile" className="form-label mb-3 my-3 mx-2">Team Image</label>
  <input className="mx-1" type="file" alt='image' id="Team_Image"></input>
</div>
<div className="mb-3 container">
  <label HtmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-5" type="date">Date</label>
  <input type="date" className="my-2 mx-1" id="date" placeholder="Set Date"/>
  <label HtmlFor="formFile" className="form-label col-6 "></label>
  <label HtmlFor="exampleFormControlInput1" className="form-label mx-2">Time</label>
  <input type="time" className="mx-1" id="time" placeholder="Set Time"/>
</div>
<div className='text-center'>
<div className="mb-3">

  <label HtmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 col-1">Ticket Charges</label>
  <input type="number" className="" id="Ticket_Fee " placeholder="Ticket Fee"/>
</div>

<div><button type="button" className="btn btn-success">Submit</button>
</div>
</div>



    
    </>
  )
}
