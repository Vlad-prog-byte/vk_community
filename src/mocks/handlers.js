import { HttpResponse, http } from 'msw'
import { mockGroups } from './mockData';
export const handlers = [
    http.get('http://vk/api/group', () => {
        let now = Date.now(), end = now + 1000; 
        while (now < end) { now = Date.now(); }

        return HttpResponse.json({ 
            result: 1,
            data: mockGroups
         });
    })
];