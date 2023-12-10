import { ApiCallProps } from "../../components/api-call";
type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export const apiCalls : Without<ApiCallProps, 'call'>[] = [
    {
        title: 'Create a Community',
        endpoint: '/communities',
        method: "POST",
        content: {
            name: 'BeJS',
            description: 'The Belgian JavaScript Community',
            website: 'https://bejs.io',
        },
    },
    {
        title: 'Get all Communities',
        endpoint: '/communities',
        method: "GET",
    },
    {
        title: 'Get a Community',
        endpoint: '/communities/:id',
        method: "GET",
    },
    {
        title: 'Update a Community',
        endpoint: '/communities/:id',
        method: "PUT",
        content: {
            name: 'The Belgian JavaScript Community',
            description: 'Also known as BeJS',
            website: 'https://bejs.io',
        },
    },
    {
        title: 'Delete a Community',
        endpoint: '/communities/:id',
        method: "DELETE",
    }
];