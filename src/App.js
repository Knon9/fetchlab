import React, { useState } from 'react';
import axios from 'axios';

const ApiLab = () => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  // GET
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        setMessage('GET request successful!');
      })
      .catch(error => {
        setMessage('GET request failed: ' + error);
      });
  };

  // POST
  const postData = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .then(response => {
        setData(response.data);
        setMessage('POST request successful!');
      })
      .catch(error => {
        setMessage('POST request failed: ' + error);
      });
  };

  // PUT
  const putData = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'Updated title',
      body: 'Updated body',
      userId: 1
    })
      .then(response => {
        setData(response.data);
        setMessage('PUT request successful!');
      })
      .catch(error => {
        setMessage('PUT request failed: ' + error);
      });
  };

  // PATCH
  const patchData = () => {
    axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Patched title'
    })
      .then(response => {
        setData(response.data);
        setMessage('PATCH request successful!');
      })
      .catch(error => {
        setMessage('PATCH request failed: ' + error);
      });
  };

  // DELETE
  const deleteData = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(null);
        setMessage('DELETE request successful!');
      })
      .catch(error => {
        setMessage('DELETE request failed: ' + error);
      });
  };

  return (
    <div>
      <h1>Axios HTTP Methods Lab</h1>
      <button onClick={getData}>GET Data</button>
      <button onClick={postData}>POST Data</button>
      <button onClick={putData}>PUT Data</button>
      <button onClick={patchData}>PATCH Data</button>
      <button onClick={deleteData}>DELETE Data</button>
      <div>
        <h3>Response Message:</h3>
        <p>{message}</p>
      </div>
      <div>
        <h3>Response Data:</h3>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ApiLab;