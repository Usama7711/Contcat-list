import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { AppContext } from "../src/context/AppContext";
import { v4 as uuid } from "uuid";
const Editcontact = () => {
  
    
    const Navigate = useNavigate()

    const { setName, name, isEdit, setEmployList, employList, age, designation, emId, setIsEdit, setdesignation, setAge, setWhatsapp, whatsapp, setProfile, profile } = useContext(AppContext);
    // useEffect(() => {
    //   if(profile)
    //     setProfile("")
    // }, [])
    console.log("name", name)
    console.log("age", age)
    console.log("designation", designation)
    console.log("profile", profile)
    const onsubmit = (e) => {
        e.preventDefault();

        if (!isEdit) {
            Navigate("/")
            setEmployList([
                ...employList,
                {
                    id: uuid(),
                    name: name,
                    age: age,
                    designation: designation,
                    whatsapp: whatsapp,
                    profile: profile

                },
            ]);

        } else {
            const updatedList = employList.map((obj) => {
                console.log("obj", obj)
                if (obj.id === emId) {
                    return {
                        id: emId,
                        name: name,
                        age: age,
                        designation: designation,
                        whatsapp: whatsapp , 
                        profile: profile
                    };
                } else {
                    return obj;
                }
            });
            setEmployList(updatedList);
            Navigate("/")

            setIsEdit(false);
            console.log("updatedList", updatedList)
        }
        setName("");
        setAge("");
        setdesignation("");
        whatsapp(false);

    };

    console.log("setWhatsapp", whatsapp)

    return (
        <div className="App">
            <div className="contact_main">
                <div className="header">
                    {isEdit ? "Update" : "Add"} Contact
                </div>
                <Form onSubmit={onsubmit}>
                    <div className="table-wrapper-main mb-4">
                        <table>
                            <tr className="firstTabelRow">
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Type</th>
                                <th>IsWhatsapp</th>
                            </tr>

                            <tr className="table-row-main">
                                <td>
                                    <input type="file" className='upload'
                                        onChange={(e) => {
                                            setProfile(e.target.files[0]);
                                        }}
                                    />
                                    {profile ? (
                                        <>
                                            <div className=" image_preview mt-3">
                                                <img 
                                                className='uploadimg'
                                                    src={URL.createObjectURL(
                                                        profile
                                                    )}
                                                    alt=""
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </td>
                                <td>
                                    <Form.Control type="text" placeholder="Name" value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </td>
                                <td>
                                    <Form.Control type="number" placeholder="Number"
                                        value={age}
                                        onChange={(e) => {

                                            setAge(e.target.value);

                                        }} />
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example"
                                        value={designation}
                                        onChange={(e) => {

                                            setdesignation(e.target.value);

                                        }}
                                    >

                                        <option>Open this select menu</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Teacher</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        checked={whatsapp == true ? true : false}
                                        onChange={(e) => {
                                            setWhatsapp(e.target.checked);
                                        }}
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="text-end">
                        <Button variant="secondary" type='reset' className='me-3'>
                            Reset
                        </Button>
                        <Button type='submit' variant="secondary" >
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default Editcontact