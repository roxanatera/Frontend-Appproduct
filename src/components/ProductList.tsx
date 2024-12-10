import React, { useEffect, useState } from 'react';
import api from '../api';
import { Product } from '../types/product';
import { formatCurrency } from '../utils/currency';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Product[]>('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    if (!selectedProduct) return;
    try {
      await api.delete(`/api/products/${selectedProduct}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== selectedProduct)
      );
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Modal de confirmación */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">¿Estás seguro?</h2>
            <p className="mb-4">Esta acción no se puede deshacer.</p>
            <div className="flex space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Productos</h1>
        <button
          onClick={() => navigate('/add-product')}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Agregar Producto
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left">Producto</th>
              <th className="p-4 text-left">Precio</th>
              <th className="p-4 text-left">Disponibilidad</th>
              <th className="p-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-100">
                <td className="p-4">{product.name}</td>
                <td className="p-4">{formatCurrency(product.price)}</td>
                <td className="p-4">
                  <span
                    className={`${
                      product.available ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {product.available ? 'Disponible' : 'No Disponible'}
                  </span>
                </td>
                <td className="p-4 flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2 items-start sm:items-center">
                  <button
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded shadow hover:bg-yellow-600 w-full sm:w-auto"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => setSelectedProduct(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 w-full sm:w-auto"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
