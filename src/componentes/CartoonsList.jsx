import {useEffect, useState} from 'react';

export const CartoonsList = () => {
    const [data, setData] = useState("");
    const getData = async () => {
        try {
          const resp = await fetch('https://api.sampleapis.com/wines/reds');
          const json = await resp.json();
          setData(json);
        } catch (err) {
          setData(err.message);
        }
      }

      useEffect(() => {
        getData();
      }, []);
      console.log(data)
  return (
    <div className='container'>
        <h1>Cartoons</h1>
        <div className='row'>
            {data && data.map((cartoon) => {
                return (
                    <div className='col-4' key={cartoon.id}>
                        <div className='card'>
                            <div className='img-container'>
                            <img src={cartoon.image} className='card-img-top' alt={cartoon.title} />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>{cartoon.winery}</h5>
                                <p className='card-text'>{cartoon.wine}</p>
                                <p className='card-text'>{cartoon.rating.average}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}


