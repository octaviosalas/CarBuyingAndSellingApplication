import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="footer grid-cols-3 p-10 bg-blue-500 text-neutral-content fixed bottom-0 left-10 right-0 main-content flex">
  <div >
    <span className="footer-title">Services</span> 
    <a className="link link-hover text-black text-black">Branding</a> 
    <a className="link link-hover text-black text-black">Design</a> 
    <a className="link link-hover text-black">Marketing</a> 
    <a className="link link-hover text-black">Advertisement</a>
  </div> 
 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover text-black">Terms of use</a> 
    <a className="link link-hover text-black">Privacy policy</a> 
    <a className="link link-hover text-black">Cookie policy</a>
  </div> 
 
  <div>
    <span className="footer-title">Explore</span> 
    <a className="link link-hover text-black">Features</a> 
    <a className="link link-hover text-black">Enterprise</a> 
    <a className="link link-hover text-black">Security</a> 
    <a className="link link-hover text-black">Pricing</a>
  </div> 
  
</footer>
    </div>
  )
}

export default Footer
