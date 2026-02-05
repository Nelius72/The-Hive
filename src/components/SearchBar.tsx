"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import beeIcon from "@/assets/images/bee.svg";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-yellow-300 border-2 border-black rounded-full px-3 py-0.5 gap-2 w-full"
    >
      
      <input
        type="text"
        placeholder="Busca tu película, serie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-yellow-300 text-black placeholder-black outline-none px-2 py-0.5 rounded-full
          w-full lg:w-72
          placeholder:text-sm lg:placeholder:text-xs
          focus:w-full lg:focus:w-80
          transition-all duration-300
        "
      />

      
      <button
        type="submit"
        className="hidden lg:inline transition-transform hover:scale-110"
        aria-label="Buscar"
      >
        <Image src={beeIcon} alt="Buscar" width={35} height={35} />
      </button>
    </form>
  );
};

export default SearchBar;
