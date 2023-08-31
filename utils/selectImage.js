import { toast } from "react-hot-toast";

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
export const handleSelectImages = (event, setPhotos, setPhotosPre) => {
  const selectedFiles = event.target.files;

  if (selectedFiles.length > 5) {
    toast.error('En fazla 5 dosya seçebilirsiniz.', {position: 'bottom-right'});
    event.target.value = null;
    return;
  }

  const newPhotos = [];
  const newPhotosPreviews = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i];
    newPhotos.push(file);

    const reader = new FileReader();
    reader.onload = () => {
      newPhotosPreviews.push(reader.result);

      if (newPhotosPreviews.length === selectedFiles.length) {
        setPhotos(newPhotos);
        setPhotosPre(newPhotosPreviews);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
};



