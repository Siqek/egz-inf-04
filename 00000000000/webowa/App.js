import { useMemo, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [ images, setImages ] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ]);

  const [ flowersFilter, setFlowersFilter ] = useState(true);
  const [ animalsFilter, setAnimalFilter ] = useState(true);
  const [ carFilter, setCarFilter ] = useState(true);

  const imagesToDisplay = useMemo(() => {
    return images.filter(image => {
      if (flowersFilter && image.category == 1)
        return true;
      if (animalsFilter && image.category == 2)
        return true;
      if (carFilter && image.category == 3)
        return true;
      return false;
    });
  }, [ flowersFilter, animalsFilter, carFilter, images ]);

  const downloadClick = (id) => {
    setImages(prev => {
      for (let i = 0; i < prev.length; ++i)
      {
        if (prev[i].id === id) {
          return [...prev.slice(0, i), {...prev[i], downloads: prev[i].downloads + 1}, ...prev.slice(i + 1)]
        }
      }
      return [...prev];
    });
  };

  return (
    <div>
      <h1>Kategorie zdjęć</h1>
      <div className='d-flex gap-4'>
        <div className='form-check form-switch'>
          <input className='form-check-input' type='checkbox' id='flowers' checked={flowersFilter} onChange={() => setFlowersFilter(p => !p)}/>
          <label className='form-check-label' htmlFor='flowers'>Kwiaty</label>
        </div>
        <div className='form-check form-switch'>
          <input className='form-check-input' type='checkbox' id='animals' checked={animalsFilter} onChange={() => setAnimalFilter(p => !p)}/>
          <label className='form-check-label' htmlFor='animals'>Zwierzęta</label>
        </div>
        <div className='form-check form-switch'>
          <input className='form-check-input' type='checkbox' id='cars' checked={carFilter} onChange={() => setCarFilter(p => !p)} />
          <label className='form-check-label' htmlFor='cars'>Samochody</label>
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {imagesToDisplay?.map((image) => (
          <div key={image.id}>
            <img
              style={{ margin: '5px' }}
              className='rounded'
              src={`assets/${image.filename}`}
              alt={image.alt}
            />
            <h4>Pobrań: {image.downloads}</h4>
            <button className='btn btn-success' onClick={() => downloadClick(image.id)}>Pobierz</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
