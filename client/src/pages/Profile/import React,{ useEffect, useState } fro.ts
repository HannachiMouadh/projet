import React,{ useEffect, useState }  from "react";
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form,Button } from 'react-bootstrap';
import { updateUser } from "../../JS/userslice/userSlice";
import axios from 'axios';



const Profile = () => {

    const dispatch = useDispatch();
    const [User,setUser] = useState({name:"",lastName:"",email:"",image:"",phone:"",dateNaissance:""});
    const userRedux = useSelector((state) => state.user.user);
    
    useEffect(() => {
        setUser(userRedux);
    }, [userRedux]);

    // const uploadFileHandler = async (e) => {
    //     const file = e.target.files[0];
    //     const bodyFormData = new FormData();
    //     bodyFormData.append("file", file);
    //     const { data } = await axios.post(
    //       "http://localhost:5000/api/user/upload",
    //       bodyFormData,
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //           Authorization: localStorage.getItem("token"),
    //         },
    //       }
    //     );
    //     setUser({...User,image:e.target.value});
    //   };
  
      const handleUpdate = () =>{
        dispatch(updateUser(userRedux._id,User));
      }

      const handleChange = (e)=>{
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }
    return(
        <div className="container">
            {/* <div className="row mt-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-10">
                        <div className="form-group files">
                            <label>Choisir une photo</label>
                            <input  onChange={uploadFileHandler} multiple id="ImageFile"  type="file"  name='file' className="form-control"/>
                        </div>
                        </div>
                    </div>                   
                </div>
                <div className="col-md-6">
                    <img className={User.image? 'avatar':null} src={User.image?`http://localhost:5000${User.image}`: null}/>
                </div>
            </div> */}
            <div>
                <Form>
                    <Form.Field>
                        <label>Name :</label>
                        <input value={User.name} placeholder=' Name' name="name" required onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>lastName :</label>
                        <input value={User.lastName} placeholder='First Name' name="lastName" required onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email :</label>
                        <input value={User.email} placeholder='Email' name="email" required onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone :</label>
                        <input value={User.phone} placeholder='Phone' name="phone" required onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone :</label>
                        <input value={User.dateNaissance} placeholder='Phone' name="dateNaissance" required onChange={handleChange} />
                    </Form.Field>
                
                    <Button onClick={()=>handleUpdate}  type='submit'>Save</Button>
                </Form>
            </div>
        </div>
    )
}

export default Profile;