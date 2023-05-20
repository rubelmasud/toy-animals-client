import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const FutureSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='my-10'>
            <h3 className='text-3xl font-semibold text-center underline mb-10'>My Future Products</h3>
            <div className="">
                <Slider {...settings}>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60 w-full rounded  ' src='https://i.ibb.co/1n0QqTj/71-AFQOow5a-L-AC-UL600-FMwebp-QL65.webp' alt="" />
                        <p className="text-orange-600">Price :$ 20.30 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60 w-full  rounded ' src='https://i.ibb.co/W2JptPf/51-ZP-j-IGtl-L-AC-UL600-FMwebp-QL65.webp' alt="" />
                        <p className="text-orange-600">Price :$ 22.30 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60  w-full rounded ' src='https://i.ibb.co/thcsvbg/71-Uc9x-It-XLL-AC-UL600-FMwebp-QL65.webp' alt="" />
                        <p className="text-orange-600">Price :$ 20.60 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60 w-full  rounded ' src='https://i.ibb.co/gRmYR3y/81-K4-Q8-Ss-Bp-L-AC-UL600-FMwebp-QL65.webp' alt="" />
                        <p className="text-orange-600">Price :$ 33.30 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60  w-full rounded ' src='https://i.ibb.co/c888r4k/81b743-IJUc-L-AC-UL600-FMwebp-QL65.webp' alt="" />
                        <p className="text-orange-600">Price :$ 50.30 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60  w-full rounded ' src='https://i.ibb.co/VDfD8QN/61r-JBd-SQt-XL-AC-UL600-QL65.jpg' alt="" />
                        <p className="text-orange-600">Price :$ 60.30 </p>
                    </div>
                    <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                        <img className='h-60 w-full  rounded ' src='https://i.ibb.co/GPtSd7x/71-Im-SRd-Ya9-L-AC-UL600-QL65.jpg' alt="" />
                        <p className="text-orange-600">Price :$ 10.30 </p>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default FutureSection;
