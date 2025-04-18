function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'A member of the skills team',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the member'
      },
      role: {
        type: 'string',
        description: 'The role of the member in the skills team'
      },
      experience: {
        type: 'integer',
        description: 'Years of experience in the skills domain'
      }
    },
    required: ['name', 'role', 'experience']
  };
}