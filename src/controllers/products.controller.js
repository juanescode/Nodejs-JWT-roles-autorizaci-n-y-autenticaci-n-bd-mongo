import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const newProduct = new Product({ name, category, price, imgURL });
  const ProductSaved = await newProduct.save();
  res.status(201).json(ProductSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const updateProductById = async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updateProduct)
};

export const deleteProductById = async(req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: req.params.productId });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
