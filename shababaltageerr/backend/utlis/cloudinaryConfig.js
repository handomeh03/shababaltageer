import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'receipt', 
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
});

const upload = multer({ storage });

export default upload;
