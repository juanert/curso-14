import { useState, useEffect } from "react";
import Button from "../components/Button";
import axios from "axios";

function Api() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setData(response.data);
      });
  }, [page]);

  if (!data || !data.results) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1>Characters</h1>
      <div className="grid grid-cols-3 gap-8 bg-black">
        {data.results &&
          data.results.map((character) => (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </div>
          ))}
      </div>
      <div>
        {page > 1 && <Button event={() => setPage(page - 1)} text="Previous" />}
        <Button event={() => setPage(page + 1)} text="Next" />
      </div>
    </div>
  );
}

export default Api;
