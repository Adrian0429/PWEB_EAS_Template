import { CollectionConfig } from 'payload/types';

export const Channels: CollectionConfig = {
  slug: 'channels',
  admin: {
    description:'ini adalah channel chatting'
  },
  auth:true,
  access: {
    create : () => true,
    read: ()=> true,
    update: ()=> true,
    delete: ()=> true,
  },
  fields: [
    { 
      name : "Channel_Name",
      type : "text",
      label : "Nama Channel",
      required : true 
    },
    {
      name: 'Messages',
      label: 'Messages',
      type: 'relationship',
      relationTo: 'messages',
      hasMany: true,
    },

  ],
};

export default Channels;
