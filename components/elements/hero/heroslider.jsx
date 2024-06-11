
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


     <section id="hero-21" className="hero-section">
    <div className="container text-center">
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
                <div className="hero-21-txt wow fadeInUp" >
                    <h2 className="s-56 w-700">Streamlining Military Packaging Compliance</h2>
                    <h6 className='mb-4'></h6>
                    <div className="btns-group">
                        <a href="/register" className="btn r-04 btn--theme hover--theme">Get started for free</a>
                        <a href="#how-to-work" className="btn r-04 btn--tra-black hover--theme">How it works</a>
                    </div>
                    <ul class="advantages ico-15 mt-15 clearfix">
									<li><p class="p-sm">Free to use, no credit card required.</p></li>
								</ul>
                </div>
            </div>
        </div>
        <div className="hero-21-wrapper r-34">
            <div className="hero-overlay bg--fixed">
                <div className="row">
                    <div className="col">
                        <div className="hero-21-img video-preview wow fadeInUp" >
                            
                            <img className="img-fluid" src="assets/images/tablet-01.png" alt="video-preview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


       
    )
};

export default HeroSlider;