/* eslint-disable no-unused-expressions */
import * as PDFJS from 'pdfjs-dist';
import XLSX from 'xlsx';

/* eslint-disable import/prefer-default-export */
async function generatePdfPreviewImage(file) {
  const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
  //     console.log(file);
  //     // const pdfDocument = await
  //     console.log(pdfjsLib);
  PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  return PDFJS.getDocument(file).promise.then(async (aa) => {
    const page = await aa.getPage(1);
    const viewPort = page.getViewport({ scale: 1 });
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewPort.height;
    canvas.width = viewPort.width;
    return page.render(
      { canvasContext: context, viewport: viewPort },
    ).promise.then((resolve) => {
        
        const imageData = canvas.toDataURL();
        // document.getElementById('preview12345678').src = imageData;
        // console.log(imageData);
        return imageData
    })
    
    
  });
  //
}

export const createPreviewImage = (file) => {
  if (file.type.match(/image.*/)) {
    const reader = new FileReader();
    reader.onload = () => file;
    reader.readAsDataURL(file);
  } else if (file.type === 'application/pdf') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      let previewImage;
      reader.onload = async (e) => {
          const a = e.target.result;
          previewImage = await generatePdfPreviewImage(a);
        resolve(previewImage);
      };
      reader.readAsDataURL(file);
    });
  }
  else if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'  || file.type === 'application/vnd.ms-excel') {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
              const data = e.target.result;
              const workbook = XLSX.read(data, { type: 'binary' });
              const sheet = workbook.sheet[workbook.SheetNames[0]];
              const html=XLSX.utils
          }
      })
  }
};
