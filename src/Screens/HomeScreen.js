import React, { useEffect, useState } from 'react'
import '../Screens/HomeScreen.css'
import { Helmet } from 'react-helmet';


const Products = ({ data }) => {

    console.log(data);

    return (
        <div className="product-grid">
            {data.map((item) => (
                <div className="product-card" key={item.id}>
                    <div className="product-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="product-info">
                        <h4>{item.title}</h4>
                        <p className="category">{item.category}</p>
                        <p className="price">${item.price}</p>
                        <p className="rating">⭐ {item.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}






export default function HomeScreen() {

    const [showFilter, setShowFilter] = useState(true);
    const [idealOpen, setIdealOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [selectedList, setSelectedList] = useState('recommended');
    const [productDetail, setProductDetail] = useState([]);

    console.log(idealOpen);
    const options = ["Men", "Women", "Baby & Kids"];

    const handleChange = (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const unselectAll = () => {
        setSelected([]);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProductDetail(data));
    }, []);

    return (
        <>
            <Helmet>
                <title>Fashion Store | Shop Clothing Online</title>
                <meta name="description" content="Shop the latest fashion products including men's clothing, accessories, and more with great prices." />
                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Fashion Store",
            "url": "https://yourwebsite.com"
          }
          `}
                </script>

            </Helmet>
            <div className='container'>
                <section>
                    <div className='row'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <h1>DISCOVER OUR PRODUCTS</h1>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
                                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                        </div>
                    </div>
                    <div className='row filter-box'>
                        <div className='col filter-items'>
                            <p className='mobile-text'>Filter</p>
                            <p className='product-count'>{productDetail.length} ITEMS</p>
                            <p className='filter-toggle' onClick={() => setShowFilter(!showFilter)}><i className={`fa ${!showFilter ? 'fa-angle-left' : 'fa-angle-right'}`} aria-hidden="true"></i> {!showFilter ? 'HIDE' : 'SHOW'} FILTER</p>
                        </div>
                        <div className='col' style={{ textAlign: 'end', overflow: 'hidden' }}>
                            <select className="product-list" value={selectedList} onChange={e => setSelectedList(e.target.value)} style={{ textAlign: 'end' }}>
                                <option value="recommended">recommended</option>
                                <option value="newest first">Newest first</option>
                                <option value="popular">popular</option>
                                <option value="high">Price : high to low</option>
                                <option value="low">Price : low to high</option>
                            </select>
                        </div>
                    </div>
                    <div className="row product-items" style={{ gap: !showFilter ? "20px" : "0px" }}>
                        <div className="col filters" style={{ width: !showFilter ? "25%" : "0%", borderRight: !showFilter ? '1px solid #E5E5E5' : 'none' }}>
                            <div style={{ padding: '10px' }}>
                                <div className="filter-sidebar">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        CUSTOMIZBLE
                                    </label>

                                    <hr />

                                    <div className="filter-section">
                                        <div
                                            className="filter-title"
                                            onClick={() => setIdealOpen(!idealOpen)}
                                        >
                                            IDEAL FOR
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></span>
                                        </div>
                                        <p className="all">All</p>

                                        {idealOpen && (
                                            <div className="filter-options">
                                                <p className="unselect" onClick={unselectAll}>Unselect all</p>

                                                {options.map((item) => (
                                                    <label key={item}>
                                                        <input
                                                            type="checkbox"
                                                            style={{ margin: '0px 6px 0px 0px' }}
                                                            checked={selected.includes(item)}
                                                            onChange={() => handleChange(item)}
                                                        />
                                                        {item}
                                                    </label>
                                                ))}

                                            </div>
                                        )}
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                    <hr />
                                    <div className="filter-section">
                                        <div className="filter-title">
                                            OCCASION
                                            <span className={`fa ${idealOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                        </div>
                                        <p className="all">All</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col products" style={{ width: !showFilter ? "75%" : "100%" }}>
                            <div style={{ padding: '10px' }}>
                                <Products data={productDetail} />
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
