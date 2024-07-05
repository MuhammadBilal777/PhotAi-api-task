import 'dotenv/config'

const envVar = (key, defaultValue) => process.env[key] ?? defaultValue;

export default {
    environment: envVar('NODE_ENV', 'development'),
    port: envVar('PORT', 8000),
    photai:{
        api_key:envVar('PHOTAI_API_KEY', null),
        uri:envVar('PHOTAI_URI', null),
    },
    cloudinary:{
        cloud_name:envVar('CLOUDINARY_CLOUD_NAME', 'object-remove'),
        api_key:envVar('CLOUDINARY_API_KEY', null),
        api_secret:envVar('CLOUDINARY_API_SECRET', null),
    }
}