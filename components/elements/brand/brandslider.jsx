import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const BrandSlider = ({brand_classA}) => {
    return (
<>

<section id="faqs-3" class="pt-100 faqs-section">				
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9">
                <div class="section-title mb-70">	
                    <h2 class="s-50 w-700">Questions & Answers</h2>	
                    <p class="s-21 color--grey">Quick solutions for your MILPAQ queries.</p>
                </div>	
            </div>
        </div>
        <div class="faqs-3-questions">
            <div class="row">
                <div class="col-lg-6">
                    <div class="questions-holder">
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>1.</span> Can I use MILPAQ for both small and large-scale packaging projects</h5>
                            <p class="color--grey">Absolutely! MILPAQ is designed to accommodate the needs of businesses and government agencies of all sizes. Whether you're packaging a single item or managing a large-scale deployment, MILPAQ's intuitive interface and comprehensive features are here to streamline your packaging process.
</p>
                        </div>	
                        
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>3.</span>Can I purchase the required packaging materials directly through MILPAQ?</h5>
                            <ul class="simple-list color--grey">
                                <li class="list-item">
                                    <p>Yes, MILPAQ provides convenient links to purchase the necessary packaging materials directly from trusted suppliers. This feature saves you time and ensures a seamless packaging process from start to finish.
</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="questions-holder">
                    <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>2.</span> Is MILPAQ compliant with MIL-STD-2073 and MIL-STD-129 requirements?</h5>
                            <p class="color--grey">Yes, MILPAQ is fully compliant with both MIL-STD-2073 and MIL-STD-129 standards. Our software is meticulously designed to interpret the complex packaging codes and provide clear instructions to ensure compliance with government regulations.
</p>
                        </div>
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>4.</span> Is there a support team available to assist if I encounter any issues while using MILPAQ ?</h5>
                            <p class="color--grey">Absolutely! Our dedicated support team is here to assist you every step of the way. Whether you have questions about using the software or encounter any technical issues, we're just a click away. Simply reach out to us via email or through our support portal, and we'll be happy to help.
</p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">	
                <div class="more-questions mt-40">
                    <div class="more-questions-txt bg--white-400 r-100">
                        <p class="p-lg">Have any questions? <a href="/" class="color--theme">Get in Touch</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="help-center" class="pt-100 banner-section">
    <div class="container">
        <div class="banner-3-wrapper bg--03 bg--scroll r-16">
            <div class="banner-overlay">
                <div class="row">
                    <div class="col">
                        <div class="banner-3-txt color--white">
                            <h2 class="s-48 w-700">Getting started with MILPAQ today!</h2>
                            <p class="p-xl">Start your journey to streamlined packaging. MILPAQ ensures compliance and efficiency, making your packaging process effortless and stress-free.</p>
                            <a href="signup-1.html" class="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</a>
                            <p class="p-sm btn-txt ico-15">
                                <span class="flaticon-check"></span>Free to use, no credit card required.
                            </p>
                            <p class="p-sm btn-txt ico-15">
                                <span class="flaticon-check">Email Us:</span>info@milpaq.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</>
    );
};

export default BrandSlider;