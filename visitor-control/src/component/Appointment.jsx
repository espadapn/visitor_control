import axios from 'axios';
import React,{ useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal)

function CreateAppointment() {
    const [input, setInput] = useState({
        name:'',
        surname:'',
        contact:'',
        appointment:''
    })

    function handleChange(event){
        const{ name,value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function ClearInput(){
        const visitor = {
            name:'',
            surname:'',
            contact:'',
            appointment:''
        }
        setInput(visitor);
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
        const Visitor = {
            name:input.name,
            surname:input.surname,
            contact:input.contact,
            appointment:input.appointment
        }
        axios.post('http://localhost:9000/visitors',Visitor).then(res=>{
            if(res.status===201)
            {
                ClearInput();
                mySwal.fire({
                    title:'บันทึกสำเร็จ',
                    icon:'success'
                })
            } else {
                mySwal.fire({
                    title:'ไม่สามารถบันทึกข้อมูลได้',
                    icon:'error'
                })
            }
        })
    }

  
    return <div className="container">
        <h1>นัดหมาย</h1>
        <form>           
                <input onChange={handleChange} name="name" value={input.name}  className="form-control my-2" placeholder="ชื่อ"></input>          
                <input onChange={handleChange} name="surname" value={input.surname} className="form-control my-2" placeholder="สกุล"></input>
                <input onChange={handleChange} name="contact" value={input.contact} className="form-control my-2" placeholder="ผู้ติดต่อ"></input>
                <input onChange={handleChange} name="appointment" value={input.appointment} className="form-control my-2" placeholder="วันที่และเวลานัดหมาย"></input>
       
            <button onClick={handleClick} className="btn btn-info btn-lg">บันทึก</button>
        </form>
    </div>
}

export default CreateAppointment;