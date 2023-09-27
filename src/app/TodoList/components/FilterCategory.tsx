import React from "react";
import { Category } from "../types";

interface FilterCategoryProps {
  categories: Category[] | undefined;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterCategory({
  categories,
  setFilterCategory,
}: FilterCategoryProps) {
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
