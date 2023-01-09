/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import S3 from 'aws-sdk/clients/s3';

const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
const region = import.meta.env.VITE_AWS_BUCKET_REGION;
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;
console.log(region,"😒");

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
export async function getObjectUrl(key,bucket) {
  
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
