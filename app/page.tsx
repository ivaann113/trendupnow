'use client';
import React, { useState } from 'react';

const products = [
  {
    name: 'Mini proyector portátil',
    image: 'https://example.com/proyector.jpg',
    price: '$39.99',
    link: 'https://www.aliexpress.com/item/example',
    category: 'tecnologia'
  },
  {
    name: 'Lámpara LED para selfies',
    image: 'https://example.com/lampara.jpg',
    price: '$12.49',
    link: 'https://www.amazon.com/dp/example',
    category: 'belleza'
  },
  {
    name: 'Dispositivo de limpieza facial',
    image: 'https://example.com/limpieza.jpg',
    price: '$24.95',
    link: 'https://www.aliexpress.com/item/example2',
    category: 'belleza'
  }
];

const blogPosts = [
  {
    title: 'Los 5 gadgets virales más vendidos en TikTok',
    summary: 'Desde proyectores portátiles hasta anillos de luz, estos son los productos que están explotando en redes.',
    link: '#'
  },
  {
    title: 'Cómo ganar dinero con productos trending',
    summary: 'Guía rápida para creadores de contenido que quieren monetizar usando productos afiliados.',
    link: '#'
  }
];

export default function HomePage() {
  const [filter, setFilter] = useState('todos');
  const filteredProducts = filter === 'todos' ? products : products.filter(p => p.category === filter);

  return (
    <div className='p-6 max-w-6xl mx-auto'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold mb-2'>TrendUpNow</h1>
        <p className='text-lg text-gray-600'>Descubre productos virales y gana comisiones creando contenido.</p>
        <div className='mt-4'>
          <input placeholder='Busca gadgets, belleza, mascotas...' className='w-full max-w-md p-2 border rounded' />
        </div>
      </header>

      <div className='mb-6 flex gap-2 flex-wrap'>
        <button onClick={() => setFilter('todos')} className='bg-gray-200 px-4 py-2 rounded'>Todos</button>
        <button onClick={() => setFilter('tecnologia')} className='bg-gray-200 px-4 py-2 rounded'>Tecnología</button>
        <button onClick={() => setFilter('belleza')} className='bg-gray-200 px-4 py-2 rounded'>Belleza</button>
        <button onClick={() => setFilter('mascotas')} className='bg-gray-200 px-4 py-2 rounded'>Mascotas</button>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {filteredProducts.map((product, index) => (
          <div key={index} className='border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow'>
            <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-1'>{product.name}</h3>
              <p className='text-gray-500 mb-2'>{product.price}</p>
              <a href={product.link} target='_blank' rel='noopener noreferrer'>
                <button className='bg-blue-500 text-white w-full py-2 rounded'>Ver producto</button>
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-bold mb-4'>Últimos artículos del blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {blogPosts.map((post, index) => (
            <div key={index} className='border p-4 rounded-lg shadow hover:shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
              <p className='text-gray-600 mb-4'>{post.summary}</p>
              <a href={post.link} className='text-blue-500 font-medium'>Leer más</a>
            </div>
          ))}
        </div>
      </section>

      <footer className='mt-16 text-center text-gray-400 text-sm'>
        © 2025 TrendUpNow. Todos los derechos reservados.
      </footer>
    </div>
  );
}
