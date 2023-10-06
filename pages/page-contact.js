/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function Contact() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover bg-img-about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="mb-10">About Us</h2>
                                        <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
                                    </div>
                                    <div className="col-lg-6 text-lg-end">
                                        <ul className="breadcrumbs mt-40">
                                            <li>
                                                <a className="home-icon" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li>Blog</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80">
                        <div className="container">
                            <div className="box-info-contact">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <a href="#">
                                            <img src="assets/imgs/template/logo.png" alt="joxBox" />
                                        </a>
                                        <div className="font-sm color-text-paragraph">
                                            205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                                            <br /> Phone: (123) 456-7890
                                            <br /> Email: contact@jobbox.com
                                        </div>
                                        <a className="text-uppercase color-brand-2 link-map" href="#">
                                            View map
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <h6>Surabaya</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            2118 Thornridge Cir. Syracuse,
                                            <br className="d-none d-lg-block" /> Connecticut 35624
                                        </p>
                                        <h6>Jakarta</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            4517 Washington Ave.
                                            <br className="d-none d-lg-block" /> Manchester, Kentucky 39495
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <h6>Semarang</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            3891 Ranchview Dr. Richardson,
                                            <br className="d-none d-lg-block" /> California 62639
                                        </p>
                                        <h6>Bandung</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            4140 Parker Rd. Allentown,
                                            <br className="d-none d-lg-block" /> New Mexico 31134
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <h6>Balikpapan</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            3891 Ranchview Dr. Richardson,
                                            <br className="d-none d-lg-block" /> California 62639
                                        </p>
                                        <h6>Makassar</h6>
                                        <p className="font-sm color-text-paragraph mb-20">
                                            4140 Parker Rd. Allentown,
                                            <br className="d-none d-lg-block" /> New Mexico 31134
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mb-40">
                                    <span className="font-md color-brand-2 mt-20 d-inline-block">Hubungi Kami</span>
                                    <h2 className="mt-5 mb-10">Get in touch</h2>
                                    <p className="font-md color-text-paragraph-2">
                                        Langkah yang tepat pada waktu yang tepat akan menghemat investasi Anda. 
                                        <br className="d-none d-lg-block" /> Hidupkan impian untuk mengembangkan bisnis Anda.
                                    </p>
                                    <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                        <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="name" placeholder="Enter your name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="company" placeholder="Comapy (optioanl)" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="email" placeholder="Your email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Phone number" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Tell us about yourself" defaultValue={""} />
                                                </div>
                                                <button className="submit btn btn-send-message" type="submit">
                                                    Kirim Pesan
                                                </button>
                                                <label className="ml-20">
                                                    <input className="float-start mr-5 mt-6" type="checkbox" /> Dengan mengklik tombol hubungi kami, Anda menyetujui persyaratan dan kebijakan kami
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <img src="assets/imgs/page/contact/img.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
