import { FC, createContext, useState } from "react";
import { ICategory } from "../../data/interfaces/category.interface";
import categoriesData from "../../data/dummy/categories.data";

export const CategoriesContext = createContext<ICategory[]>([]);

type props = {
  children: any;
};

const CategoriesProvider: FC<props> = ({ children }) => {
  const [categories] = useState(categoriesData);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
