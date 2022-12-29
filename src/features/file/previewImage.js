/* eslint-disable import/prefer-default-export */
import pdfjsLib from 'pdfjs-dist';

export function createPreviewImage(file) {
  if (file.type.match(/image.*/)) {
    const reader = new FileReader();
      reader.onload = () => file;
      reader.readAsDataURL(file);
  } else if (file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
          const previewImage=generatePreviewImage(file)
      }
  }
}




async function generatePdfPreviewImage(file) {
    const pdfDocument = await pdfjsLib.getDocument(file)
        const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const objectUrl = URL.createObjectURL(file);
    //     .PDFViewer({
    //     container: canvas,
    //     removePageBorders: true,
    //   })
}
