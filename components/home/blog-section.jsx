import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';
import "../../public/assets/images/tablet-01.png"

const BlogSection = () => {
    return (
        <>
       
<section id="features" className="py-100 features-section division">
    <div className="container">

        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
                <div className="section-title mb-80">
                    <h2 className="s-50 w-700">Your All-in-One Packaging Partner</h2>
                    <p className="s-21 color--grey">Your go-to solution for military packaging perfection.
</p>
                </div>
            </div>
        </div>

        <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="fbox-2 fb-1 wow fadeInUp">
                        <div className="fbox-img gr--whitesmoke h-175">
                            <img className="img-fluid light-theme-img" src="/assets/images/f_01.png" alt="feature-image" />
                            <img className="img-fluid dark-theme-img" src="/assets/images/f_01_dark.png" alt="feature-image" />
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Code Interpretation</h6>
                            <p>MILPAQ quickly deciphers complex MIL-STD-2073 packaging codes, providing clear instructions on material requirements and packaging procedures.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="fbox-2 fb-2 wow fadeInUp">
                        <div className="fbox-img gr--whitesmoke h-175">
                            <img className="img-fluid light-theme-img" src="/assets/images/f_05.png" alt="feature-image" />
                            <img className="img-fluid dark-theme-img" src="/assets/images/f_05_dark.png" alt="feature-image" />
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Interactive Guide</h6>
                            <p>Step-by-step interactive guide ensures nothing is overlooked in the packaging process, including the correct placement of MIL-STD-129 Labels, guaranteeing compliance with ease.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="fbox-2 fb-3 wow fadeInUp">
                        <div className="fbox-img gr--whitesmoke h-175">
                            <img className="img-fluid light-theme-img" src="/assets/images/f_02.png" alt="feature-image" />
                            <img className="img-fluid dark-theme-img" src="/assets/images/f_02_dark.png" alt="feature-image" />
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Convenient Material Procurement</h6>
                            <p>MILPAQ offers links to purchase required materials directly, streamlining the packaging process and ensuring convenience for users.
</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>

<hr className="divider" />

<section id="how-to-work" className="pt-100 ct-04 content-section division">
				<div className="container">


					
					<div className="row d-flex align-items-center">


						
			 			<div className="col-md-6 order-last order-md-2">
			 				<div className="txt-block left-column wow fadeInRight">


			 					
								<div className="cbox-2 process-step">
									
									
									<div className="ico-wrap">
										<div className="cbox-2-ico bg--theme color--white">1</div>
										<span className="cbox-2-line"></span>
									</div>
	
									
									<div className="cbox-2-txt">
										<h5 className="s-22 w-700">Sign Up</h5>
										<p>Users can easily create an account by clicking on the "Sign Up" button on the website. They have the option to sign up using their Google account for quick access or with their email address and password for added security.
										</p>
									</div>

								</div>


								
								<div className="cbox-2 process-step">
									
									
									<div className="ico-wrap">
										<div className="cbox-2-ico bg--theme color--white">2</div>
										<span className="cbox-2-line"></span>
									</div>
	
									
									<div className="cbox-2-txt">
										<h5 className="s-22 w-700">Access Dashboard</h5>
										<p>Once signed up, users are directed to their personalized dashboard. Here, they can enter the packaging codes into the designated field to initiate the process of obtaining packaging information.
										</p>
									</div>

								</div>	


								
								<div className="cbox-2 process-step">
									
									
									<div className="ico-wrap">
										<div className="cbox-2-ico bg--theme color--white">3</div>
									</div>
	
									
									<div className="cbox-2-txt">
										<h5 className="s-22 w-700">Enter Packaging Codes</h5>
										<p className="mb-0">In the dashboard, users simply enter the packaging codes they need information for. MILPAQ swiftly processes the data and presents users with a breakdown of packaging requirements, including materials needed and step-by-step guidance for packaging procedures.
										</p>
									</div>
									
								</div>	


			 				</div>
					 	</div>	


						
						<div className="col-md-6 order-first order-md-2">
							<div className="img-block wow fadeInLeft" >
								<img className="img-fluid" src="/assets/images/tablet-01.png" alt="content-image" />
							</div>	
						</div>


					</div>


				</div>	   
			</section>
        </>
    );
};

export default BlogSection;