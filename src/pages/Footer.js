import React from 'react'

export default function Footer() {
  return (
    <div>
      <div class="footer py-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="float-start pull-none">
                <p class="text-white-50 mb-0">
                  <script>document.write(new Date().getFullYear())</script>2023 © Appspery. Design by <a href="https://1.envato.market/themesdesign" target="_blank" class="text-white-50">Themesdesign</a>
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="float-end pull-none">
                <ul class="list-unstyled text-sm-end social-icon social mb-0">
                  <li class="list-inline-item mb-0"><a href="https://www.facebook.com/themesdesignstudio/" target="_blank" class="rounded"><i class="bi bi-facebook" title="Facebook"></i></a>
                  </li>
                  <li class="list-inline-item mb-0"><a href="https://dribbble.com/themesdesign" target="_blank" class="rounded"><i class="bi bi-dribbble" title="Instagram"></i></a>
                  </li>
                  <li class="list-inline-item mb-0"><a href="mailto:themesdesign.in@gmail.com" target="_blank" class="rounded"><i class="bi bi-envelope" title="Google +"></i></a></li>
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
