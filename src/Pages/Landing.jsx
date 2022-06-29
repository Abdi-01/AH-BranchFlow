import React from "react";
import Carousel from "../Components/Carousel";
import SidebarComponent from '../Components/Sidebar';
import Leftbar from "./Leftbar";
const Landing = () => {

    return (
        <div class="container">
            <Carousel />
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title fw-bold" style={{ color: "#0D6EFD" }}>World</h6>
                                    <h4 class="card-title">Featured post</h4>
                                    <p class="fw-light">Nov 12</p>
                                    <p class="card-text pb-4">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Continue reading</a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80"
                                    width="100%"
                                    class="float-end" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title fw-bold" style={{ color: "#198754" }}>Design</h6>
                                    <h4 class="card-title">Post title</h4>
                                    <p class="fw-light">Nov 11</p>
                                    <p class="card-text pb-4">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Continue reading</a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80"
                                    width="100%"
                                    class="float-end" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="col-12 d-flex"
            >
                <div
                    className='col-md-8 order-md-1'
                >
                    <Leftbar />
                </div>
                <SidebarComponent />
            </div>
        </div>
    )
}

export default Landing
