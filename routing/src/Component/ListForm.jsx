import React, { useState, } from "react";
import { Link,useNavigate } from "react-router-dom";


export default function UserTable() {

     const [initialInfo] = useState({ Name: "", Email: "", pwd: "", Add: "", Mo: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     const [editMode, setEditMode] = useState(false);
     const [editIndex, setEditIndex] = useState(null);
      const navigate = useNavigate();


     const HandleDelete = (index) => {
          const newArray = [...array];
          newArray.splice(index, 1);
          setArray(newArray);
          localStorage.setItem("Array", JSON.stringify(newArray));
     }

     const HandleEdit = (index) => {
          setEditMode(true);
          setEditIndex(index);
          setInfo(array[index]);
     }
     return (
          <div >
            <div className="">
            <table className="table table-bordered border-dark w-75 mt-2 text-center" style={{marginLeft:"200px",}}>
                    <thead style={{color:"#5F9EA0"}}>
                         <th className="border border-dark ">Name</th>
                         <th className="border border-dark ">Email</th>
                         <th className="border border-dark ">Password</th>
                         <th className="border border-dark ">Address</th>
                         <th className="border border-dark ">Mobile Number</th>
                         <th className="border border-dark ">Action</th>
                    </thead>
                    <tbody style={{color:"#4682B4"}}>
                         {array.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        <td className="border border-dark fw-bold">{item.Name}</td>
                                        <td className="border border-dark fw-bold">{item.Email}</td>
                                        <td className="border border-dark fw-bold pe-2">{item.pwd}</td>
                                        <td className="border border-dark fw-bold">{item.Add}</td>
                                        <td className="border border-dark fw-bold">{item.Mo}</td>
                                        <td className="border border-dark fw-bold"><button onClick={() => HandleDelete(index)} className="btn btn-danger ms-1 fw-bold">Delete</button>
                                             <button onClick={() => HandleEdit(index)} className="btn btn-info ms-1 fw-bold">Edit</button>
                                        </td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
            </div>
              
        <div className="position-fixed start-50   translate-middle" >
        <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
        <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
        </div>
          </div>
)
}