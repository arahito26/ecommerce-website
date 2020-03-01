const sampleProduct = {
  imageUrl: 'https://img.icons8.com/pastel-glyph/64/000000/t-shirt--v1.png',
  name: 'Nama',
  price: '$15',
};

let mockProduct = [];
for (let i = 0; i < 6; i++) {
  mockProduct.push(
    {
      ...sampleProduct,
      id: i+1,
      name: `${sampleProduct.name} Baju ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+7,
      name: `${sampleProduct.name} Celana ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+13,
      name: `${sampleProduct.name} Topi ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+19,
      name: `${sampleProduct.name} Tas ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+25,
      name: `${sampleProduct.name} Jam Tangan ${i+1}`
    },
  )
}

export default mockProduct;
