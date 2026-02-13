import React from 'react';
import Section_Heading from '../Section_Heading/section_heading';
import './products.scss';
import { Main_photo1, Main_photo2, couple_hand, single_hand, Single_hand_and_foot } from '../../assets/images';
import { HashLink } from 'react-router-hash-link';

const Projects = () => {
    const products = [
        {
            'name': 'Single baby hand/foot',
            'price': 60,
            'discount': 15,
            'image': single_hand,
        },
        {
            'name': 'Single baby hand and foot',
            'price': 100,
            'discount': 15,
            'image': Single_hand_and_foot,
        },
        {
            'name': 'Both baby hands & feet',
            'price': 180,
            'discount': 15,
            'image': Main_photo1,
        },
        {
            'name': 'Couples hand',
            'price': 140,
            'discount': 15,
            'image': couple_hand,
        },
        {
            'name': 'Full Family Cast',
            'price': 'Contact for price',
            'discount': 0,
            'image': Main_photo2,
        },
    ];
    return (
        <div className='products-container' id='products'>
            <Section_Heading title="Products" />
            <h2 className="hidden-no-heigth">Our Hand Casting Packages in Regina</h2>
            <div className="products-list">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <div className="product-price">
                                <span className="price">{isNaN(product.price) ? `` : `$`}{product.price}</span>
                                {/* {product.discount > 0 && isNaN(product.price) && <span className="discount">${product.price-product.discount}</span>} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="product-notes">
                <p>
                    ✨ <strong>Display Upgrade:</strong> Make your mold display-ready by adding a frame for just <strong>$40</strong>.
                </p>
                <p>
                    We love bringing unique ideas to life—get in touch for any custom requests!
                </p>
            </div>
            <div className="product-button">
                <HashLink to={'#contact'}><button>Contact For More Products</button></HashLink>
            </div>
        </div>
    );
};

export default Projects;
