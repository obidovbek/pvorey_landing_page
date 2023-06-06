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
                                    <a href="https://1.envato.market/appspery" target="_blank" className="btn btn-primary"><BsCart2 style={{color: '#fff'}} /> Sotib olish</a>
                                    <a href="#demos" className="btn btn-light"><BsDisplay style={{color:'#000'}}/> Demolar ko‘rish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
