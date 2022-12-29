import './App.css';
import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import edit from "../src/pencil-square.svg"
import profile from "../src/profile.svg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Navigate } from 'react-router-dom';
import { AppContext } from "../src/context/AppContext";

const Contact = () => {
    const { setEmployList, employList, name, setName, setdesignation, designation, isEdit, setIsEdit, setAge,emId, setEmpId  , setWhatsapp , whatsapp ,setProfile , profile} = useContext(AppContext);
    console.log(whatsapp)
    console.log("employList",employList)
    const editEmp = ( {id, name, age, designation,whatsapp ,profile }) => {
        console.log("id", id)
        console.log("age", age)
        console.log("designation", profile)
        setEmpId(id);
        setName(name);
        setAge(age);
        setWhatsapp(whatsapp)
        setdesignation(designation);
        setProfile(profile)
        setIsEdit(true);
        Navigate("/Editcontact")
    };
   
    return (
        <div className="App">
            <div className="contact_main">
                <div className="header">
                    <p>Contact List</p>
                    <Button variant="primary" className="custom-btn">
                        <Link to="/Editcontact" className='addBtn' >Add Contact</Link>
                    </Button>
                </div>
                <div className="table-wrapper-main mb-4">
                    <table>
                        <tr className="firstTabelRow">
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Type</th>
                            <th>IsWhatsapp</th>
                            <th>Edit</th>
                        </tr>
                        {employList &&employList.length >0 ? employList.map((item) => {
                            console.log(item.profile.name)
                            return (
                                <>
                                    <tr className="table-row-main">
                                        <td className='profile'> <img src={URL.createObjectURL(item.profile)} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.designation}</td>
                                        <td>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                checked = {item.whatsapp == true ? true : false}
                                            />
                                        </td>
                                        <td onClick={() => {
                                            editEmp(item);
                                        }}><Link to="/Editcontact"><img src={edit} alt="" /></Link></td>
                                    </tr>
                                </>
                            )
                        }):(
                            <p className='d-flex justify-content-center text-danger p-0 m-0'>No Contact Found</p>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contact;
