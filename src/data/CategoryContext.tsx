import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
  sort_order: string;
  is_active: boolean;
}

interface CategoryContextType {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
