
import React, { useState } from 'react';
import productImage from "../../assets/images/post1.png"; // Replace with the actual image path

const Checkout = () => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    differentAddress: ""
  });
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.streetAddress) newErrors.streetAddress = "Street address is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.zip) newErrors.zip = "Zip code is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email address is invalid";
    if (!form.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form submitted", form);
    }
  };

  const order = {
    products: [
      { name: "Blushing Bromeliad", sku: "12342124", quantity: 4, price: 1280, image: productImage },
      { name: "Barberton Daisy", sku: "12342124", quantity: 9, price: 207, image: productImage },
      { name: "Angel Wing Begonia", sku: "12342124", quantity: 5, price: 130, image: productImage },
    ],
    subtotal: 1617,
    discount: 161.7,
    shipping: 16,
  };

  const total = order.subtotal - order.discount + order.shipping;

return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 items-center">
            <div className="mb-4">
              <label className="block text-gray-700">First Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="firstName" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.firstName}
                onChange={handleChange}
                required 
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="lastName" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.lastName}
                onChange={handleChange}
                required 
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="mb-4">
              <label className="block text-gray-700">Country / Region <span className="text-red-500">*</span></label>
              <select 
                name="country" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.country}
                onChange={handleChange}
                required 
              >
                <option>Select a country / region</option>
                {/* Add country options here */}
              </select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Town / City <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="city" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.city}
                onChange={handleChange}
                required 
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Street Address <span className="text-red-500">*</span></label>
             <div className="flex items-center gap-2">
             <input 
                type="text" 
                name="streetAddress" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.streetAddress}
                onChange={handleChange}
                required 
                placeholder="House number and street name" 
              />
            <div className="">
              <h1></h1>
              <input 
                type="text" 
                name="additionalAddress" 
                className="w-full border border-gray-300 p-2 rounded mt-2" 
                placeholder="Apartment, suite, unit, etc. (optional)" 
                onChange={handleChange}
              />
              
            </div>
             </div>
              {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State <span className="text-red-500">*</span></label>
              <select 
                name="state" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.state}
                onChange={handleChange}
                required 
              >
                <option>Select a state</option>
                {/* Add state options here */}
              </select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>

<div className="mb-4">
              <label className="block text-gray-700">Zip <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="zip" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.zip}
                onChange={handleChange}
                required 
              />
              {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                className="w-full border border-gray-300 p-2 rounded" 
                value={form.email}
                onChange={handleChange}
                required 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <select 
                  name="phoneCode" 
                  className="border border-gray-300 p-2 rounded-l"
                  onChange={handleChange}
                >
                  <option>+966</option>
                  {/* Add other country codes here */}
                </select>
                <input 
                  type="text" 
                  name="phone" 
                  className="w-full border border-gray-300 p-2 rounded-r" 
                  value={form.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center text-gray-700">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  onChange={handleCheckboxChange} 
                />
                Ship to a different address?
              </label>
            </div>
            {shipToDifferentAddress && (
              <div className="mb-4">
                {/* Add different shipping address fields here */}
                <label className="block text-gray-700">Different Address</label>
                <input 
                  type="text" 
                  name="differentAddress" 
                  className="w-full border border-gray-300 p-2 rounded" 
                  placeholder="Address" 
                  value={form.differentAddress}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Order notes (optional)</label>
              <textarea 
                name="orderNotes" 
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[green] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>


{/* Order Summary */}
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div className="bg-white shadow-md rounded p-4">
            <div className="border-b pb-4 mb-4">
              {order.products.map((product, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">x{product.quantity}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${order.subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Coupon Discount</span>
                <span className="text-red-500">-${order.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <div className="flex items-center mb-2">
                <input type="radio" id="paypal" name="payment" className="mr-2" />
                <label htmlFor="paypal" className="flex items-center cursor-pointer">
                  <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-8 h-8 mr-2" />
                  PayPal
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="credit-card" name="payment" className="mr-2" />
                <label htmlFor="credit-card" className="flex items-center cursor-pointer">
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="w-8 h-8 mr-1" />
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8 h-8 mr-1" />
                  <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-8 h-8 mr-1" />
                  Credit Card
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="bank-transfer" name="payment" className="mr-2" />
                <label htmlFor="bank-transfer" className="cursor-pointer">Direct Bank Transfer</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="cash-on-delivery" name="payment" className="mr-2" />
                <label htmlFor="cash-on-delivery" className="cursor-pointer">Cash on Delivery</label>
              </div>
            </div>
            <button className="w-full bg-[green] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;