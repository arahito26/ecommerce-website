const sampleProduct = {
  title: 'Nama',
  price: '$15',
  loved: 0,
  description: 'The Nintendo DS (abbreviated NDS, DS, or the full name Nintendo Dual Screen, and iQue DS in China) is a handheld game console developed and manufactured by Nintendo, released in 2004. It is visibly distinguishable by its horizontal clamshell design, and the presence of two displays, the lower of which acts as a touchscreen.',
};

let mockProduct = [];
for (let i = 0; i < 6; i++) {
  mockProduct.push(
    {
      ...sampleProduct,
      id: i+1,
      category: 'baju',
      title: `${sampleProduct.title} Baju ${i+1}`,
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/fitness/500/T-shirt-512.png',
    },
    {
      ...sampleProduct,
      id: i+7,
      category: 'celana',
      title: `${sampleProduct.title} Celana ${i+1}`,
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/fashion-clothes-1/64/5-512.png',
    },
    {
      ...sampleProduct,
      id: i+13,
      category: 'topi',
      title: `${sampleProduct.title} Topi ${i+1}`,
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/hats-1/100/08-512.png',
    },
    {
      ...sampleProduct,
      id: i+19,
      category: 'tas',
      title: `${sampleProduct.title} Tas ${i+1}`,
      imageUrl: 'https://banner2.cleanpng.com/20180611/wri/kisspng-handbag-computer-icons-chanel-5b1f2758e9aea2.5486987315287683449572.jpg'
    },
    {
      ...sampleProduct,
      id: i+25,
      category: 'jam-tangan',
      title: `${sampleProduct.title} Jam Tangan ${i+1}`,
      imageUrl: 'https://i.pinimg.com/originals/f0/8c/23/f08c2309dc8114d843e3fba0b1898ddf.png',
    },
  )
}

export default mockProduct;
