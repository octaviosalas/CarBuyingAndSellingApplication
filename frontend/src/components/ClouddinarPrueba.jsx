import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useEffect } from 'react';

const ClouddinarPrueba = () => {
  const [imagenes, setImagenes] = useState({array: {}});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(imagenes);
  }, [imagenes]);



  const handleDropImage = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset', 'App-Cars');
      formData.append('api_key', '687985773113572');
      formData.append('timestamp', Date.now() / 1000 / 0);
      setLoading(true);
     
      return axios
        .post('https://api.cloudinary.com/v1_1/dgheotuij/image/upload', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          const fileURL = data.secure_url;
          console.log(fileURL);
          setImagenes([fileURL, ...fileURL])
          setLoading(false);
        });
    });

    axios.all(uploaders).then(() => {
      // Aquí puedes realizar alguna acción después de cargar todas las imágenes
    });
  };

  return (
    <div>
      <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Inserta tu imagen</p>
          </div>
        )}
      </Dropzone>

      <button>Guardar Imagen en MONGODB</button>
    </div>
  );
};

export default ClouddinarPrueba;


/*import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useEffect } from 'react';

const ClouddinarPrueba = () => {
  const [imagenes, setImagenes] = useState({array_: {}});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(imagenes);
  }, [imagenes]);



  const handleDropImage = (files) => {
    setImagenes((prevImagenes) => [prevImagenes, ...files]);
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset', 'App-Cars');
      formData.append('api_key', '687985773113572');
      formData.append('timestamp', Date.now() / 1000 / 0);
      setLoading(true);
     
      return axios
        .post('https://api.cloudinary.com/v1_1/dgheotuij/image/upload', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          const fileURL = data.secure_url;
          console.log(fileURL);
          setLoading(false);
        });
    });

    axios.all(uploaders).then(() => {
      // Aquí puedes realizar alguna acción después de cargar todas las imágenes
    });
  };

  return (
    <div>
      <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Inserta tu imagen</p>
          </div>
        )}
      </Dropzone>

      <button>Guardar Imagen en MONGODB</button>
    </div>
  );
};

export default ClouddinarPrueba;*/