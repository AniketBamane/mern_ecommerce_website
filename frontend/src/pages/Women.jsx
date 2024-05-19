import React from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';

function Women() {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://www.deshidukan.in/cdn/shop/files/Let_sWriteLoveStoryWT_1200x1200.jpg?v=1713869638' },
    { id: 2, name: 'Product 2', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/30062023/410361508013_1.jpg' },
    { id: 3, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0724/8583/0962/files/MEN-S-BADGET-WHITE-T-SHIRT-COTTON-LYCRA-FABRIC-CREW-NECK-SLIM-FIT-T-SHIRT-LOVER-875_c5069726-45c6-41fd-9dba-3477459ec00a.jpg?v=1684005983&width=1920' },
    { id: 4, name: 'Product 4', image: 'https://assets.ajio.com/medias/sys_master/root/20231206/ZPf1/657086f1ddf7791519b4b6fd/-473Wx593H-469535644-white-MODEL.jpg' },
    { id: 5, name: 'Product 5', image: 'https://m.media-amazon.com/images/I/71DD2xmCLTL._AC_UY350_.jpg' },
    { id: 6, name: 'Product 6', image: 'https://edrio.com/cdn/shop/articles/fashion-7539134_1920.jpg?v=1712117428' },
    { id: 7, name: 'Product 7', image: 'https://m.media-amazon.com/images/I/61JjCN19q7L._AC_UY1100_.jpg' },
    { id: 8, name: 'Product 8', image: 'https://i.pinimg.com/736x/a9/9d/d4/a99dd4259f68e2128e0d0e7f8b5c8922.jpg' },
  ];
  return (
    <ProductSection products={products} />
  )
}

export default Women