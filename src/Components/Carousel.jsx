import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const Carousel = () => {

    return <div>
        <UncontrolledCarousel
            items={[
                {
                    altText: 'Slide 1',
                    caption: 'Ovo full cashback',
                    key: 1,
                    src: 'https://www.k24klik.com/blog/wp-content/uploads/2020/01/OVO-2020-web-banner-1024x383.jpg'
                },
                {
                    altText: 'Slide 2',
                    caption: 'Ovo top up',
                    key: 2,
                    src: 'https://news.codashop.com/id/wp-content/uploads/sites/4/2021/12/OnlineGamePromo_December_BannerCoda.jpg'
                },
                {
                    altText: 'Slide 3',
                    caption: 'Ovo extra cashback',
                    key: 3,
                    src: 'https://news.codashop.com/id/wp-content/uploads/sites/4/2021/11/OVOxCodashop_Anniv_CodaBanner.png'
                }
            ]}
        />
    </div>
}

export default Carousel;