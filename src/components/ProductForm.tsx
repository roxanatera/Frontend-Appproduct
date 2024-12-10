import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const ProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    available: false,
  });

  useEffect(() => {
    if (id) {
      // Si estamos en modo edición, cargamos el producto
      const fetchProduct = async () => {
        try {
          const response = await api.get(`/api/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!product.name.trim() || product.price <= 0) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
  
    try {
      if (id) {
        // Modo edición
        await api.put(`/api/products/${id}`, product);
      } else {
        // Modo creación
        await api.post('/api/products', product);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Precio</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Disponibilidad</label>
          <select
            name="available"
            value={product.available ? 'true' : 'false'}
            onChange={(e) =>
              setProduct({ ...product, available: e.target.value === 'true' })
            }
            className="w-full p-2 border rounded"
          >
            <option value="true">Disponible</option>
            <option value="false">No Disponible</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {id ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
