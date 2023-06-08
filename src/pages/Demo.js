import React from 'react'
import admin from '../assets/img/index-1.png';
import teacher from '../assets/img/index-2.png';

import img_4 from '../assets/img/img-04.png';
import customize from '../assets/img/customize.png';
import responsive from '../assets/img/responsive-design.png';
import css from '../assets/img/css.png';
import code from '../assets/img/code.png';
import task from '../assets/img/task.png';

export default function Demo() {
    return (
        <div>
            <section class="section" id="demos">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="header-title text-center">
                                <h3>Admin va o‘qituvchi uchun demo ko‘rishlar</h3>
                                <div class="title-border mt-3"></div>
                                <p class="text-muted mt-3">Oliy talim muassasalari reytingini hisoblash metodikasiga asosan reyting indikatorlari shakllantirilgan bo’lib, yil davomida ma’lumotlarni qabul qilish va kerakli paytda turli statistik ma’lumotlar va xisobot jadvallari avtomatik shakllantirish
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="https://admin.tsnq.uz/" class="" target="_blank">
                                    <img src={admin} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h5 class="fs-17 mt-4">Admin</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="https://user.tsnq.uz/" target="_blank">
                                    <img src={teacher} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">O‘qituvchi</h4>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-3.html" target="_blank">
                                    <img src={index_3} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Index 3</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-4.html" target="_blank">
                                    <img src={index_4} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Index 4</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-5.html" target="_blank">
                                    <img src={index_5} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Index 5</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-6.html" target="_blank">
                                    <img src={index_5} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Index 6</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <section class="section" id="demos">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="header-title text-center">
                                <h3>Home Dark Demos</h3>
                                <div class="title-border mt-3"></div>
                                <p class="text-muted mt-3">Styza is a beautifully crafted, clean &amp; minimal designed landing
                                    template for corporate business, <br /> professional website, personal portfolios, and many
                                    more.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center px-5">
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-1-dark.html" class="" target="_blank">
                                    <img src={index_6} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h5 class="fs-17 mt-4">Home 1</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-2-dark.html" target="_blank">
                                    <img src={index_7} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Home 2</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-3-dark.html" target="_blank">
                                    <img src={index_8} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Home 3</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-4-dark.html" target="_blank">
                                    <img src={index_9} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Home 4</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-5-dark.html" target="_blank">
                                    <img src={index_10} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Home 5</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="demo-box">
                                <a href="layouts/index-6-dark.html" target="_blank">
                                    <img src={index_11} alt="demo-img" class="img-fluid home-dashboard border-light" />
                                </a>
                            </div>
                            <div class="text-center">
                                <h4 class="fs-17 mt-4">Home 6</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section class="section" id="features">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="header-title text-center">
                                <p class="text-uppercase text-muted mb-2">Quyidagi avzalliklarda egamiz</p>
                                <h3>Biz barcha ijodiy funksiyalarni qilamiz</h3>
                                <div class="title-border mt-3"></div>
                                <p class="text-muted mt-3">Platformamizda quyidagi imkoniyatlarga egamiz</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={img_4} height="65" alt="" />
                                <h5 class=" fs-18 mt-4">To‘liq avtomatlashgan 1.5 indikatori</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3">Hich kim ma'lumot jo‘natmaydi, tekshirmaydi va baholamaydi, siz uchun platforma bajaradi</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={customize} alt="" class="img-fluid" />
                                <h5 class="fs-18 mt-4">Admin indikatorlarni boshqarishi</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3 mb-0">Istalgancha indikator yaratish, ochish yoki yopish imkoniyatlari</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={responsive} alt="" class="img-fluid" />
                                <h5 class="fs-18 mt-4">Haqiqiy vaqtdagi statistika</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3 mb-0">Fakultet, kafedra, indikatorlar bo‘yicha grafikdagi reyting va o‘qituvchilar baholari ko‘rish
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={code} alt="" class="img-fluid" />
                                <h5 class="fs-18 mt-4">Ma'lumatlatni tekshirish</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3 mb-0">Admin jo‘natilgan ma'lumotlarni tekshirib baho berish imkoniyati</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={code} alt="" class="img-fluid" />
                                <h5 class="fs-18 mt-4">Qo'llab-quvvatlash</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3 mb-0">Doimiy qo‘llab-quvvatlash va yangilanishlar</p> 
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6">
                            <div class="service-box text-center mt-4">
                                <img src={task} alt="" class="img-fluid" />
                                <h5 class="fs-18 mt-4">Ishlatish bo‘yicha qo‘llanma</h5>
                                <div class="lighlight-border mt-3"></div>
                                <p class="text-muted mt-3 mb-0">Ishlatish bo‘yicha qo‘llanma</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}
