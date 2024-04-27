
// Import Swiper styles
import 'swiper/css/bundle';

const HeroSlider = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-1-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'make dream gardening',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-2-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'Jik Flower Scaping',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 3,
            sliderBg: '/assets/img/banner/banner-4-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'k.i Flower plants',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        }
    ];

    return (

        <section id="hero-1" className="bg--scroll hero-section">
				<div className="container">	
					<div className="row d-flex align-items-center">


	
						<div className="col-md-6">
							<div className="hero-1-txt color--white wow fadeInRight">

								
								<h2 className="s-58 w-700">Streamlining Military Packaging: Simplify, Comply, Succeed!</h2>

		
								{/* <p className="p-xl">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute 
									ligula and aliquet tortor
								</p> */}

					
								<a href="#banner-3" className="btn r-04 btn--theme hover--tra-white">Get started for free</a>
								<p className="p-sm btn-txt ico-15">
									<span className="flaticon-check"></span> No credit card needed, free 14-day trial
								</p>

							</div>
						</div>	


						<div className="col-md-6">	
							<div className="hero-1-img wow fadeInLeft">	
								<img className="img-fluid" src="/assets/images/hero-1-img.png" alt="hero-image" />					
							</div>
						</div>	
						

					</div>    
				</div>	
			</section>	

       
    )
};

export default HeroSlider;