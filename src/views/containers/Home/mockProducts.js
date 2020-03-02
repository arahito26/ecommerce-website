const sampleProduct = {
  imageUrl: 'https://img.icons8.com/pastel-glyph/64/000000/t-shirt--v1.png',
  title: 'Nama',
  price: '$15',
  loved: 1,
  description: 'The Nintendo DS (abbreviated NDS, DS, or the full name Nintendo Dual Screen, and iQue DS in China) is a handheld game console developed and manufactured by Nintendo, released in 2004. It is visibly distinguishable by its horizontal clamshell design, and the presence of two displays, the lower of which acts as a touchscreen.',
};

let mockProduct = [];
for (let i = 0; i < 6; i++) {
  mockProduct.push(
    {
      ...sampleProduct,
      id: i+1,
      title: `${sampleProduct.title} Baju ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+7,
      title: `${sampleProduct.title} Celana ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+13,
      title: `${sampleProduct.title} Topi ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+19,
      title: `${sampleProduct.title} Tas ${i+1}`
    },
    {
      ...sampleProduct,
      id: i+25,
      title: `${sampleProduct.title} Jam Tangan ${i+1}`
    },
  )
}

export default mockProduct;
