import React from 'react'
import { BsDisplay,BsCart2 } from 'react-icons/bs';
export default function Banner() {
    return (
        <div>
            <section className="bg-home2" id="home">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center">

                                <h1 className="text-white mb-4"> TSNQ - Ta'lim sifatini <br /> nazorat qilish elektron platformasi</h1>
                                <div className="badge bg-danger fs-15 mb-3">Versiya 2.0.1</div>
                                <p className="text-white-50 fs-17">MILLIY REYTING INDIKATORLARI BO’YICHA MALUMOTLARNI ONLINE QABUL QILISH VA BAXOLASH BO‘YICHA PLATFORMASI</p>

                                <div className="d-flex flex-wrap gap-3 justify-content-center mt-4 pt-2 ">
                                    {/* <a href="https://1.envato.market/appspery" target="_blank" className="btn btn-primary"><BsCart2 style={{color: '#fff', marginBottom: '6px'}} /> Sotib olish</a> */}
                                    <a href="#demos" className="btn btn-light"><BsDisplay style={{color:'#000', marginBottom: '4px'}}/> Demolar ko‘rish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="position-relative">
                <div class="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="150" preserveAspectRatio="none" viewBox="0 0 1440 150">
                        <g mask="url(&quot;#SvgjsMask1022&quot;)" fill="none">
                            <path d="M 0,58 C 144,73 432,131.8 720,133 C 1008,134.2 1296,77.8 1440,64L1440 250L0 250z" fill="rgba(255, 255, 255, 1)"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1022">
                                <rect width="1440" height="250" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
