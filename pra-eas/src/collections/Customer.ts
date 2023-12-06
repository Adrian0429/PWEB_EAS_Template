import { CollectionConfig } from 'payload/types';

export const Customer: CollectionConfig = {
  slug: 'customer',
  admin: {
    description:'ini adalah user Chatting'
  },
  access: {
    create : () => true,
    read: ()=> true,
    update: ()=> true,
    delete: ()=> true,
  },
fields: [
    { 
      name : "Username",
      type : "text",
      label : "Username",
      required : true 
    },
    {
      name: 'Email',
      label: 'Email',
      type: 'text',
      required : true 
    },
    {
      name: 'Password',
      label: 'Password',
      type: 'text',
      required : true 
    },
  ],
};

export default Customer;
