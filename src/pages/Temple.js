import React from 'react'
import { BsDisplay,BsCart2 } from 'react-icons/bs';

export default function Temple() {
  return (
    <div>
      <section class="bg-cta">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="header-title text-center">
                        <h2>TSNQ - Ta'lim sifatini nazorat qilish elektron platformasi</h2>
                        <p class="title-desc text-muted mt-3"> TSNQ bilan ishlashni boshlang, platformangizni tezda yarating</p>
                        <div class="d-flex flex-wrap gap-3 justify-content-center mt-4">
                            {/* <a href="https://1.envato.market/appspery" target="_blank" class="btn btn-primary"><BsCart2 style={{color: '#fff', marginBottom: '6px'}} /> Sotib olish</a> */}
                            <a href="#demos" class="btn btn-dark"><BsDisplay style={{color:'#fff', marginBottom: '4px'}}/> Demolarni ko‘rish</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
    </div>
  )
}
