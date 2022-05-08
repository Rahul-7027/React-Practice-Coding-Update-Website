import React from 'react'
import Footer from './Footer'

export default function Blog() {
    return (
        <div className='container' style={{ marginTop: '130px' }}>
            <h2>CodeWithRahul Blog</h2>
            <div class="card w-75" style={{ fontFamily: "cursive" }}>
                <div class="card-body">
                    <h5 class="card-title"><b>[Updated 2022] Best Laptops To Buy in 2022 - Laptop Buying Guide between 40-70k INR</b></h5>
                    <a href="#" style={{ textDecoration: "none" }}>Read More</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
