import React from 'react'
import xIcon from '../assets/footer/x.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import facebookIcon from '../assets/footer/facebook.svg';

function MainFoot() {
  return (
    <div className="w-full">
    <footer className='w-[65%] mx-auto'>
      <div className="flex justify-center gap-8 py-4">
        <div className="basis-1/6 ">
          <h5 className='footer-heading'>Section</h5>
          <ul className=" ">
            <li className="nav-item mb-2"><a href="#" className="">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="">About</a></li>
          </ul>
        </div>
  
        <div className="basis-1/6">
          <h5 className='footer-heading'>Section</h5>
          <ul className="">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
  
        <div className="basis-1/6">
          <h5 className='footer-heading'>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
  

        <div className="basis-1/2 flex justify-end">
  <form className=" min-w-[80%]">
    <h5 className='footer-heading'>Subscribe to our newsletter</h5>
    <p className='mb-[1rem]'>Monthly digest of what's new and exciting from us.</p>
    <div className='flex gap-2'>
      <label htmlFor="newsletter1" className="hidden">Email address</label>
      <input id="newsletter1" type="text" className="rounded-md basis-3/4 p-1" placeholder="Email address"/>
      <button className="bg-blue-600 text-white basis-1/4 rounded-md p-1" type="button">Subscribe</button>
    </div>
  </form>
</div>



      </div>
  
      <div className="flex justify-between border-t border-slate-500 py-4 my-4">
        <p>© 2024 Yoblr, All rights reserved.</p>
        <ul className="flex">
          <li className="ml-[1em]"><a className="link-dark" href="#"><img src={xIcon} alt="Twitter" className="w-6 h-6" /></a></li>
          <li className="ml-[1em]"><a className="link-dark" href="#"><img src={facebookIcon} alt="Twitter" className="w-6 h-6" /></a></li>
          <li className="ml-[1em]"><a className="link-dark" href="#"><img src={instagramIcon} alt="Twitter" className="w-6 h-6" /></a></li>
        </ul>
      </div>
    </footer>
    </div>

  
  )
}

export default MainFoot