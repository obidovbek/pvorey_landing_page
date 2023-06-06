import React from 'react'

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
                                <div className="badge bg-danger fs-15 mb-3">Version 1.1</div>
                                <p className="text-white-50 fs-17">MILLIY REYTING INDIKATORLARI BO’YICHA MALUMOTLARNI ONLINE QABUL QILISH VA BAXOLASH BO‘YICHA PLATFORMASI</p>

                                <div className="d-flex flex-wrap gap-3 justify-content-center mt-4 pt-2 ">
                                    <a href="https://1.envato.market/appspery" target="_blank" className="btn btn-primary"><i className="bi bi-cart me-1"></i> Buy Now</a>
                                    <a href="#demos" className="btn btn-light"><i className="bi bi-display me-1"></i> Check Demos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
