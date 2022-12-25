/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import S3 from 'aws-sdk/clients/s3';

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
export async function getObjectUrl(key) {
  const params = {
    Bucket: bucketName,
    key,
  };
  try {
    const data = await s3.getObject(params).promise();
    const url = data.Body.toString('utf-8');
    return url;
  } catch (error) {
    console.log(error);
  }
}
