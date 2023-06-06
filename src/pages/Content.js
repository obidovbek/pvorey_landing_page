import React from 'react'
import img_1 from '../assets/img/bootstrap.png'
import img_2 from '../assets/img/html5.png'
import img_3 from '../assets/img/css3.png'
import img_4 from '../assets/img/js.png'
import img_5 from '../assets/img/sass.png'

export default function Content() {
  return (
    <div>
      <div class="container">
        <div class="bg-feature">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="mt-5 text-center">
                        <img src={img_1} alt="" height="60" class="rounded shadow mx-1 my-2"/>
                        <img src={img_2} alt="" height="60" class="rounded shadow mx-1 my-2"/>
                        <img src={img_3} alt="" height="60" class="rounded shadow mx-1 my-2"/>
                        <img src={img_4} alt="" height="60" class="rounded bg-white shadow mx-1 my-2"/>
                        <img src={img_5} alt="" height="60" class="rounded shadow mx-1 my-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
