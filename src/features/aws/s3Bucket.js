/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import S3 from 'aws-sdk/clients/s3';

const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
const region = import.meta.env.VITE_AWS_BUCKET_REGION;
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
export async function getObjectUrl(key, bucket) {
  const params = {
    Bucket: bucket,
    Key: key,
  };
  try {
    const data = await s3.getObject(params).promise();
    const url = data.Body.toString('utf-8');
    return url;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file, fileStream) {
  const uploadParams = {
    Bucket: bucketName,
    Key: file.name,
    Body: fileStream
}
 return s3.upload(uploadParams).promise()
  // const signedUrl = await s3.getSignedUrlPromise('putObject', {
  //   Bucket: bucketName,
  //   Key: file.name,
  //   ContentType: file.type,

  // });
  // console.log(signedUrl);
  // // upload the file to the signed URL
  // const response = await fetch(signedUrl, {
  //   method: 'PUT',
  //   body: fileStream,
  //   // mode: 'no-cors'

  // });
  // console.log(response);
}
