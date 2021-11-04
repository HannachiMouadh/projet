import React,{ useEffect, useState }  from "react";
import './Profile.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Form,Button } from 'react-bootstrap';
import { updateUser } from "../../JS/userslice/userSlice";


const Profile =  ()=>{
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
    //     console.log(data);
    //     setimage(data);
    //   };
  
      const handleUpdate = () =>{
          dispatch(updateUser(userRedux._id,User));

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
                    <img className={image? 'avatar':null} src={image?`http://localhost:5000${image}`: null}/>
                </div>
            </div> */}
            <div>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                name="name"
                value={User?.name}
                type="text" 
                onChange={(e)=>setUser({...User,name:e.target.value})}
                    
                />          
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="text" 
                value={User?.lastName}
                onChange={(e)=>setUser({...User,lastName:e.target.value})}
                />          
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                    value={User?.email}
                    onChange={(e)=>setUser({...User,email:e.target.value})}
                    />          
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                type="text" 
                value={User?.phone} 
                onChange={(e)=>setUser({...User,phone:e.target.value})}
                />          
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Date de naissance" 
                onChange={(e)=>setUser({...User,dateNaissance:e.target.value})}
                />          
                </Form.Group>
                <Button variant="primary" onClick={handleUpdate}>
                    Enregistrer
                </Button>
                </Form>
                </div>
    

        </div>
    )
}

export default Profile;