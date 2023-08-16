export const handleSelectImage = (event,setPhoto,setPhotoPre) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPre(reader.result);
    };
    if(selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  export const handleSelectImages = (event, setPhotos, setPhotoPreviews) => {
    const selectedFiles = event.target.files;
    const newPhotos = [];
    const newPhotoPreviews = [];
  
    for (let i = 0; i < Math.min(selectedFiles.length, 5); i++) {
      const file = selectedFiles[i];
      newPhotos.push(file);
  
      const reader = new FileReader();
      reader.onload = () => {
        newPhotoPreviews.push(reader.result);
  
        if (newPhotoPreviews.length === newPhotos.length) {
          setPhotoPreviews(newPhotoPreviews);
        }
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  
    setPhotos(newPhotos);
  };
  