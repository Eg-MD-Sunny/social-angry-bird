import React from 'react';
import './UserDatas.css';
// import Swal from 'sweetalert2';
import swal from 'sweetalert';


const userDatas = (props) => {
    const {name, email, img, phone, address} = props.fakeDataItem;
    
    function clickHandler(){

        swal("Great!", "Friend Request Sent!", "success",
            {
                // button: "Aww yiss!",
                showConfirmButton: false,
                timer: 1500,
            }
          );
        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-middle',
        //     showConfirmButton: false,
        //     timer: 1500,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.addEventListener('mouseenter', Swal.stopTimer)
        //       toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        //   })
          
        //   Toast.fire({
        //     icon: 'success',
        //     title: 'Friend Request Sent successfully'
        //   })
    }
    return (
     <div className="Wrapper">
        <div className="card-container">
            <div className="upper-container">
                <div className="img-container">
                    <img src={img}></img>
                </div>
            </div>
            <div className="lower-container">
                <div>
                    <h3>{name}</h3>
                    <h4>{email}</h4>
                    <p style={{fontSize:'20px', fontWeight:'500'}}>{phone}</p>
                </div>
                <div>
                    <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                </div>
                <div className="btn-container">
                    <a href="#" onClick={clickHandler}>SEND REQUEST</a>
                </div>
            </div>
        </div>
    </div>
    );
};
export default userDatas;