import { CollectionConfig } from 'payload/types';

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    description:'ini adalah messages channel'
  },
  access: {
    create : () => true,
    read: ()=> true,
    update: ()=> true,
    delete: ()=> true,
  },
  fields: [
    {
      name: 'Messages',
      label: 'Messages',
      type: 'text',
      required:true
    },
    {
      name: 'Customer',
      label: 'Customer',
      type: 'relationship',
      relationTo: 'customer',
      hasMany:false
    }
  ],
};

export default Messages;
