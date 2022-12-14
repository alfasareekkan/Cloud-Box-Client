/* eslint-disable no-unused-expressions */
import * as PDFJS from 'pdfjs-dist';
import * as XLSX from 'xlsx';
import * as docx from 'docx';
import { Document } from 'docx';
import html2canvas from 'html2canvas';

/* eslint-disable import/prefer-default-export */

async function getImageData(element) {
  // Render the element to a canvas
  const canvas = await html2canvas(element);
  // Extract the image data from the canvas
  const imageData = canvas.toDataURL();
  document.getElementById('xlsxDiv').style.display = 'none';
  return imageData;
}

async function generatePdfPreviewImage(file) {
  const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
  //     console.log(file);
  //     // const pdfDocument = await
  //     console.log(pdfjsLib);
  PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  return PDFJS.getDocument(file).promise
    .then(async (aa) => {
      const page = await aa.getPage(1);
      const viewPort = page.getViewport({ scale: 1 });
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewPort.height;
      canvas.width = viewPort.width;
      return page.render(
        { canvasContext: context, viewport: viewPort },
      ).promise.then(() => {
        const imageData = canvas.toDataURL();
        // document.getElementById('preview12345678').src = imageData;
        // console.log(imageData);
        return imageData;
      });
    });
  //
}

export const createPreviewImage = (file) => {
  if (file.type.match(/image.*/)) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        resolve(imageData); 
      };
      reader.readAsDataURL(file);
    });
  } if (file.type === 'application/pdf') {
    return new Promise((resolve) => {
      const reader = new FileReader();
      let previewImage;
      reader.onload = async (e) => {
        const a = e.target.result;
        previewImage = await generatePdfPreviewImage(a);
        resolve(previewImage);
      };
      reader.readAsDataURL(file);
    });
  } if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const html = XLSX.utils.sheet_to_html(sheet);
        const container = document.getElementById('xlsxDiv');
        container.innerHTML = html;
        const imageData = await getImageData(container);
        resolve(imageData);
      };
      reader.readAsBinaryString(file);
    });
  } if (file.type === 'application/msword') {
    return new Promise((resolve) => {
      // const doc = await docx.parse(file);
      // const docText = doc.getFullText();
      // const pages = docText.split('\n');
      // const pageText = pages[0];
      // const div = document.getElementById('xlsxDiv');
      // div.innerHTML = pageText;
      // const canvas = await html2canvas(div);
      // const imageData = canvas.toDataURL();
      // document.getElementById('xlsxDiv').style.display = 'none';
      // resolve(imageData);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        console.log(data);
        // const docaa = await docx.parse(data);

        const doc = new docx.Document([data]);
        const content = doc.getFullText();
        const pages = content.split('\n');
        const pageText = pages[0];
        const container = document.createElement('xlsxDiv');
        container.innerHTML = pageText;
        // Extract the image data from the container element
        const imageData = getImageData(container);
        container.innerHTML = '';
        resolve(imageData);
      };
      reader.readAsArrayBuffer(file);
    });
  }
};
