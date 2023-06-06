import React from 'react'

export default function Email() {
  return (
    <div>
      <section class="section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="text-center mb-4">
                <p class="text-uppercase text-muted mb-2">Contact</p>
                <h3 class="text-uppercase">Get In Touch</h3>
                <div class="title-border mt-3"></div>
                <p class="title-desc text-muted mt-3">Our team is happy to help you. support DOES NOT include
                  template customization, installation or any third party software and plugins.</p>
              </div>
            </div>

          </div>

          <div class="row justify-content-center">

            <div class="col-lg-9">
              <div class="custom-form">
                <form method="post" name="myForm" onsubmit="return validateForm()">
                  <p id="error-msg"></p>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label for="name" class="form-label">Name* :</label>
                        <input name="name" id="name" type="text" class="form-control" placeholder="Enter your name" />
                      </div>
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email address* :</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="subject" class="form-label">Your Subject* :</label>
                        <input type="tel" class="form-control" name="text" id="subject" placeholder="Enter your subject" />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label for="comments" class="form-label">Comments :</label>
                        <textarea class="form-control" placeholder="Leave a comment here" name="comments" id="comments"></textarea>
                      </div>
                    </div>


                  </div>


                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mt-3 text-end">
                        <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="Send Message"/>
                          <div id="simple-msg"></div>
                      </div>
                    </div>

                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}
