import { photAiApi } from '#apis'


const objectRemove = async ({ sourceUrl, maskImage }) => {
    return await photAiApi.objectRemover({ sourceUrl, maskImage });
}

export default {
    objectRemove
}