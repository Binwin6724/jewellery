import React, { useState, useMemo } from 'react';
import '../css/Products.css';

function Products() {
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([
    {
      id: "JR-001",
      selectedImageIndex: 0,
      media: [
        { type: 'image', url: "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-GOLD-EARRINGS-NEW-20241016150737124015.webp" },
        { type: 'image', url: "https://example.com/sample-ring-2.jpg" },
        { type: 'video', url: "https://example.com/sample-ring-video.mp4" }
      ],
      name: "Diamond Engagement Ring",
      category: "Rings",
      price: 1299.99,
      stock: 15,
      material: "18K White Gold",
      description: "1.0 Carat Diamond Solitaire Ring",
      status: "in-stock"
    },
    {
      id: "JN-002",
      selectedImageIndex: 0,
      media: [
        { type: 'image', url: "https://example.com/sample-necklace-1.jpg" },
        { type: 'image', url: "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-TRENDY-GOLD-RINGS-20241016150651436513.webp" }
      ],
      name: "Pearl Strand Necklace",
      category: "Necklaces",
      price: 799.99,
      stock: 3,
      material: "Freshwater Pearls, Sterling Silver",
      description: "18-inch Classic Pearl Strand",
      status: "low-stock"
    },
    {
      id: "JB-003",
      selectedImageIndex: 0,
      media: [
        { type: 'image', url: "https://example.com/sample-bracelet-1.jpg" },
        { type: 'image', url: "https://example.com/sample-bracelet-2.jpg" }
      ],
      name: "Tennis Bracelet",
      category: "Bracelets",
      price: 2499.99,
      stock: 0,
      material: "Platinum",
      description: "3.00 Carat Diamond Tennis Bracelet",
      status: "out-of-stock"
    },
    {
      id: "JE-004",
      selectedImageIndex: 0,
      media: [
        { type: 'image', url: "https://example.com/sample-earrings-1.jpg" },
        { type: 'image', url: "https://example.com/sample-earrings-2.jpg" }
      ],
      name: "Sapphire Drop Earrings",
      category: "Earrings",
      price: 899.99,
      stock: 8,
      material: "14K Yellow Gold",
      description: "Blue Sapphire and Diamond Drop Earrings",
      status: "in-stock"
    },
    {
      id: "JP-005",
      selectedImageIndex: 0,
      media: [
        { type: 'image', url: "https://example.com/sample-pendant-1.jpg" },
        { type: 'image', url: "https://example.com/sample-pendant-2.jpg" }
      ],
      name: "Ruby Heart Pendant",
      category: "Pendants",
      price: 599.99,
      stock: 2,
      material: "14K Rose Gold",
      description: "Heart-shaped Ruby with Diamond Halo",
      status: "low-stock"
    }
  ]);

  const emptyProduct = {
    id: "",
    selectedImageIndex: 0,
    media: [],
    name: "",
    category: "",
    price: 0,
    stock: 0,
    material: "",
    description: "",
    status: "in-stock"
  };

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const searchFields = [
        product.name,
        product.category,
        product.material,
        product.description,
        product.status,
        product.id,
        product.price.toString(),
        product.stock.toString()
      ];
      
      return searchFields.some(field => 
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    return filtered.sort((a, b) => {
      let compareA = a[sortBy];
      let compareB = b[sortBy];

      if (sortBy === 'price' || sortBy === 'stock') {
        return sortDirection === 'asc' 
          ? compareA - compareB 
          : compareB - compareA;
      }

      if (typeof compareA === 'string') {
        compareA = compareA.toLowerCase();
        compareB = compareB.toLowerCase();
      }

      if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
      if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    }); // eslint-disable-next-line
  }, [sortBy, sortDirection, searchQuery, products]);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const getStockStatusClass = (status) => {
    switch(status) {
      case 'in-stock':
        return 'in-stock';
      case 'low-stock':
        return 'low-stock';
      case 'out-of-stock':
        return 'out-of-stock';
      default:
        return '';
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id ? editingProduct : p
      ));
      setEditingProduct(null);
    }
  };

  const handleAdd = () => {
    setEditingProduct({ ...emptyProduct, id: `J${Date.now()}` });
    setShowAddModal(true);
  };

  const handleAddSave = () => {
    if (editingProduct) {
      setProducts([...products, editingProduct]);
      setEditingProduct(null);
      setShowAddModal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) || 0 : value
    }));
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    if (editingProduct.media.length + files.length > 7) {
      alert('Maximum 7 media files allowed');
      return;
    }

    const newMedia = files.map(file => ({
      type: file.type.startsWith('video') ? 'video' : 'image',
      url: URL.createObjectURL(file)
    }));

    setEditingProduct(prev => ({
      ...prev,
      media: [...prev.media, ...newMedia]
    }));
  };

  const handleRemoveMedia = (index) => {
    setEditingProduct(prev => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index)
    }));
  };

  const handleImageSelect = (productId, index) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, selectedImageIndex: index }
        : product
    ));
  };

  const renderMediaPreview = (mediaItem) => {
    if (!mediaItem) {
      return (
        <img 
          src="https://via.placeholder.com/300x300?text=No+Image"
          alt="No Preview Available"
          className="product-media"
        />
      );
    }
    
    if (mediaItem.type === 'video') {
      return (
        <video 
          src={mediaItem.url} 
          controls 
          className="product-media"
        />
      );
    }
    return (
      <img 
        src={mediaItem.url} 
        alt="Product" 
        className="product-media"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
        }}
      />
    );
  };

  return (
    <div className="products-container">
      <h2>Product Inventory</h2>
      
      <div className="controls-container">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        
        <div className="sort-container">
          <select value={sortBy} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
            <option value="status">Status</option>
          </select>
          <button onClick={toggleSortDirection}>
            {sortDirection === 'asc' ? '↑' : '↓'}
          </button>
        </div>

        <button className="add-button" onClick={handleAdd}>
          Add New Product
        </button>
      </div>

      <div className="products-grid">
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="media-container">
              <div className="product-media-container">
                {product.media && product.media.length > 0 ? (
                  <>
                    {renderMediaPreview(product.media[product.selectedImageIndex])}
                    {product.media.length > 1 && (
                      <div className="thumbnails">
                        {product.media.map((media, index) => (
                          <div
                            key={index}
                            className={`thumbnail ${index === product.selectedImageIndex ? 'active' : ''}`}
                            onClick={() => handleImageSelect(product.id, index)}
                          >
                            {media.type === 'video' ? (
                              <span className="video-icon">▶</span>
                            ) : (
                              <img src={media.url} alt={`Thumbnail ${index + 1}`} />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  renderMediaPreview(null)
                )}
              </div>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-id">ID: {product.id}</p>
              <p>Category: {product.category}</p>
              <p>Price: {formatPrice(product.price)}</p>
              <p>Stock: {product.stock}</p>
              <p>Material: {product.material}</p>
              <p className={`status ${getStockStatusClass(product.status)}`}>
                Status: {product.status}
              </p>
              <div className="product-actions">
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(editingProduct && !showAddModal) && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Product</h3>
            <div className="media-upload-section">
              <h4>Product Media (Max 7)</h4>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleMediaChange}
                disabled={editingProduct.media.length >= 7}
              />
              <div className="media-preview-grid">
                {editingProduct.media.map((media, index) => (
                  <div key={index} className="media-preview-item">
                    {media.type === 'video' ? (
                      <video src={media.url} className="preview-thumbnail" />
                    ) : (
                      <img src={media.url} alt={`Preview ${index + 1}`} className="preview-thumbnail" />
                    )}
                    <button 
                      className="remove-media" 
                      onClick={() => handleRemoveMedia(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <input
              name="name"
              value={editingProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
            />
            <input
              name="category"
              value={editingProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
            />
            <input
              name="price"
              type="number"
              value={editingProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              name="stock"
              type="number"
              value={editingProduct.stock}
              onChange={handleInputChange}
              placeholder="Stock"
            />
            <input
              name="material"
              value={editingProduct.material}
              onChange={handleInputChange}
              placeholder="Material"
            />
            <input
              name="description"
              value={editingProduct.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <select
              name="status"
              value={editingProduct.status}
              onChange={handleInputChange}
            >
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Product</h3>
            <div className="media-upload-section">
              <h4>Product Media (Max 7)</h4>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleMediaChange}
                disabled={editingProduct.media.length >= 7}
              />
              <div className="media-preview-grid">
                {editingProduct.media.map((media, index) => (
                  <div key={index} className="media-preview-item">
                    {media.type === 'video' ? (
                      <video src={media.url} className="preview-thumbnail" />
                    ) : (
                      <img src={media.url} alt={`Preview ${index + 1}`} className="preview-thumbnail" />
                    )}
                    <button 
                      className="remove-media" 
                      onClick={() => handleRemoveMedia(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <input
              name="name"
              value={editingProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
            />
            <input
              name="category"
              value={editingProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
            />
            <input
              name="price"
              type="number"
              value={editingProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              name="stock"
              type="number"
              value={editingProduct.stock}
              onChange={handleInputChange}
              placeholder="Stock"
            />
            <input
              name="material"
              value={editingProduct.material}
              onChange={handleInputChange}
              placeholder="Material"
            />
            <input
              name="description"
              value={editingProduct.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <select
              name="status"
              value={editingProduct.status}
              onChange={handleInputChange}
            >
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleAddSave}>Add Product</button>
              <button onClick={() => {
                setEditingProduct(null);
                setShowAddModal(false);
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;