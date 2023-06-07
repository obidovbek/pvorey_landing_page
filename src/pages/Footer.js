import React from 'react'
import { BsFacebook,BsDribbble, BsEnvelopeAt } from 'react-icons/bs';

export default function Footer() {

  return (
    <div>
      <div class="footer py-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="float-start pull-none">
                <p class="text-white-50 mb-0">
                  <script>document.write(new Date().getFullYear())</script>2023 © TSNQ. Themesdesign tomonidan dizayn qilingan
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="float-end pull-none">
                <ul class="list-unstyled text-sm-end social-icon social mb-0">
                  <li class="list-inline-item mb-0"><a href="#" target="_blank" class="rounded"><BsFacebook style={{color:'#fff'}}/></a>
                  </li>
                  <li class="list-inline-item mb-0"><a href="#" target="_blank" class="rounded"><BsDribbble style={{color:'#fff'}}/></a>
                  </li>
                  <li class="list-inline-item mb-0"><a href="mailto:obidov.bekzod94@gmail.com" target="_blank" class="rounded"><BsEnvelopeAt style={{color:'#fff'}}/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onclick="topFunction()" id="back-to-top">
        <i class="bi bi-arrow-up fs-15"></i>
    </button>
    </div>
  )
}
