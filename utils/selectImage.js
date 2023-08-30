import { toast } from "react-hot-toast";

export const handleSelectImage = (event,setPhotoPre) => {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPre(reader.result);
    };
    if(selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  export const handleSelectImages = (event, setPhotoPreviews) => {
    const selectedFiles = event.target.files;
    const newPhotos = [];
    const newPhotoPreviews = [];
    if(selectedFiles.length <= 5) {
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
    }
    else {
      toast.error('En fazla 5 tane fotoğraf seçebilirsiniz.', {position: 'bottom-right'});
    }
  };
  