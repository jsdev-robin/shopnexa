export const generateSKU = ({
  category,
  productName,
}: {
  category: string;
  productName: string;
}): string => {
  if (!category || !productName)
    throw new Error("Category and product name are required to generate SKU");

  const categoryCode = category.slice(0, 3).toUpperCase();
  const productCode = productName.slice(0, 3).toUpperCase();
  const timestamp = Date.now().toString().slice(-6);
  const randomNum = Math.floor(100 + Math.random() * 900);

  return `${categoryCode}-${productCode}-${timestamp}-${randomNum}`;
};
