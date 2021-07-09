import axios from 'axios';
import React,{ useEffect,useState} from 'react';
import './visitors.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

function Visitors() {
    const [visitors, setVisitors] = useState([{
        name:'',
        surname:'',
        contact:'',
        appointment:''
    }])

    const fetchData = () => {
        return fetch("http://localhost:9000/visitors")
        .then(res=> res.json())
        .then(data => setVisitors(data))
    }

    useEffect(()=>{
      fetchData()
    })
    return <div className="container box">
        <h1 className="text-center">รายการนัดหมาย</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ลำดับ</th>
                    <th>ชื่อ</th>
                    <th>สกุล</th>
                    <th>ผู้ติดต่อ</th>
                    <th>นัดหมาย</th>
                    <th>ลบ</th>
                </tr>
            </thead>
            <tbody>
        {visitors.map((visitor,index)=>
            <tr>
                <td>{index+1}</td>
                <td>{visitor.name}</td>
                <td>{visitor.surname}</td>
                <td>{visitor.contact}</td>
                <td>{visitor.appointment}</td>
                <td>
                    <button type="button" class="btn btn-danger">ลบ</button>
                </td>
            </tr>
            )}
            </tbody>
            </table>
    </div>
}

export default Visitors;