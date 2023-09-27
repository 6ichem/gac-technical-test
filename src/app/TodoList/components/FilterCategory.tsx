import React, { useEffect, useState } from "react";
import { instance } from "../../../http/config";
import { Category } from "../types";

interface FilterCategoryProps {
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterCategory({
  setFilterCategory,
}: FilterCategoryProps) {
  const [categories, setCategories] = useState<Category[]>();

  const getCategories = async () => {
    try {
      const { data } = await instance.get("/category");

      setCategories(data);
    } catch (e) {
      console.error("[*] getCategories Error:", e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div style={{ marginBottom: 5 }}>
      <select
        name="categories"
        id="categories"
        onChange={(e) => setFilterCategory(e.target.value)}
        defaultValue="All"
      >
        <option value="All" key="All">
          All
        </option>

        {categories?.map((i: Category) => (
          <option value={i.id} key={i.id}>
            {i.name}
          </option>
        ))}
      </select>
    </div>
  );
}
