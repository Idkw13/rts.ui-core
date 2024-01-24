import { Api } from '../api/index';

export const getMedia = (text: string) => {
    try {
        return Api.get('/media/sound', {
            params: {
                text
            }
        });
    } catch (error) {
        console.log(error)
    }
}
