"use client";

import { useEffect, useState } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("Angka habis dibagi 10");
    }
  }, [count]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="flex items-center justify-between border-b border-slate-200 px-6 py-4 sm:px-10">
        <div className="text-lg font-bold">Clement</div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#cards">Cards</a>
          <a href="#counter">Counter</a>
        </div>
      </nav>

      <section id="home" className="px-6 py-10 sm:px-10">
        <h1 className="text-2xl font-bold">TP Modul 10</h1>
      </section>

      <section id="cards" className="px-6 py-6 sm:px-10">
        <h2 className="mb-4 text-xl font-semibold">Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {response.results.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-base font-semibold capitalize">{item.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-600">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="counter" className="px-6 py-10 sm:px-10">
        <h2 className="mb-4 text-xl font-semibold">Counter Demo</h2>
        <div className="inline-flex items-center gap-4 rounded-lg border border-slate-200 px-4 py-3">
          <button
            type="button"
            onClick={() => setCount((current) => current - 1)}
            className="rounded-md border border-slate-300 px-4 py-2"
          >
            -
          </button>
          <span className="min-w-12 text-center text-2xl font-bold">{count}</span>
          <button
            type="button"
            onClick={() => setCount((current) => current + 1)}
            className="rounded-md border border-slate-300 px-4 py-2"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="rounded-md border border-slate-300 px-4 py-2"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}
