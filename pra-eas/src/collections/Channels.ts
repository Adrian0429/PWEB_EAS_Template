import { CollectionConfig } from 'payload/types';

export const Channels: CollectionConfig = {
  slug: 'channels',
  admin: {
    description:'ini adalah channel chatting'
  },
  access: {
    create: ()=> true,
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
      name : "Channel_Creator",
      type : "text",
      label : "Pemilik Channel", 
    },


  ],
};

export default Channels;
