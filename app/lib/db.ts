import 'server-only';

// Datos quemados como diccionario en lugar de PostgreSQL
const data = [
  {
    id: 1,
    imageUrl: 'https://example.com/image1.jpg',
    name: 'Product 1',
    status: 'active',
    price: 10.99,
    stock: 100,
    availableAt: new Date('2024-01-01')
  },
  {
    id: 2,
    imageUrl: 'https://example.com/image2.jpg',
    name: 'Product 2',
    status: 'inactive',
    price: 19.99,
    stock: 50,
    availableAt: new Date('2024-02-01')
  },
  // Agrega más productos según sea necesario
];

// Simulación de la tabla "products" en PostgreSQL
export type SelectProduct = typeof data[0];

// Función para obtener productos
export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Filtro por búsqueda
  let filteredProducts = data;

  if (search) {
    filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      products: filteredProducts.slice(0, 1000),
      newOffset: null,
      totalProducts: filteredProducts.length
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  let paginatedProducts = filteredProducts.slice(offset, offset + 5);
  let newOffset = paginatedProducts.length >= 5 ? offset + 5 : null;

  return {
    products: paginatedProducts,
    newOffset,
    totalProducts: filteredProducts.length
  };
}

// Función para eliminar productos por ID
export async function deleteProductById(id: number) {
  const index = data.findIndex((product) => product.id === id);
  if (index !== -1) {
    data.splice(index, 1);
  }
}
