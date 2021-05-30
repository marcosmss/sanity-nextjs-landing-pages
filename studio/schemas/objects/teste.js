export default {
    type: 'object',
    name: 'teste',
    title: 'teste newsletter signup',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subheading',
      },
      {
        name: 'actionUrl',
        type: 'url',
        title: 'URL to teste signup',
        description:
          'URL for the teste signup form. Remember to add your domain in your teste settings to avoid CORS errors.',
      },
    ],
    preview: {
      select: {
        title: 'heading',
      },
      prepare({ title }) {
        return {
          title,
          subtitle: 'teste newsletter signup section',
        };
      },
    },
  };
  