import { ApiCallProps } from "../../components/api-call";
type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export const apiCalls : Without<ApiCallProps, 'call'>[] = [
    {
        title: 'Create a Meetup',
        endpoint: '/meetup',
        method: "POST",
        content: {
            title: 'NestJs Meetup',
            description: 'NestJS demystified: what is it, how does it work, and how you can use it to build your next API.',
            speaker: 'Wout Junius',
        },
    },
    {
        title: 'Get all Meetups',
        endpoint: '/meetup',
        method: "GET",
    },
    {
        title: 'Get a Meetup',
        endpoint: '/meetup/:id',
        method: "GET",
    },
    {
        title: 'Update a Meetup',
        endpoint: '/meetup/:id',
        method: "PUT",
        content: {
            title: 'NestJS demystified',
            description: 'What is it, how does it work, and how you can use it to build your next API.',
            speaker: 'Wout Junius',
        },
    },
    {
        title: 'Delete a Meetup',
        endpoint: '/meetup/:id',
        method: "DELETE",
    }
];