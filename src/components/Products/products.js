import React from 'react';
import Section_Heading from '../Section_Heading/section_heading';
import './products.scss';
import { Main_photo1, Main_photo2 } from '../../assets/images';

const Projects = () => {
    const products = [
        {
            'name': 'Single hand/foot',
            'price': 60,
            'discount': 15,
            'image': Main_photo1
        },
        {
            'name': 'Both hands & feet',
            'price': 165,
            'discount': 15,
            'image': Main_photo2,
        },
        {
            'name': 'Couples hand',
            'price': 100,
            'discount': 15,
            'image': Main_photo1
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
            <div className="products-list">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <div className="product-price">
                                <span className="price">{isNaN(product.price) ? `` : `$`}{product.price}</span>
                                {/* {product.discount > 0 && isNaN(product.price) && <span className="discount">${product.price-product.discount}</span>} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="product-button">
                <button>View All Products</button>
            </div>
        </div>
    );
};

export default Projects;