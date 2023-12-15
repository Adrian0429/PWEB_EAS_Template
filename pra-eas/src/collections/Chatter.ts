import { CollectionConfig } from 'payload/types';
import { adminAuth } from '../access/adminAuth';

export const Chatter: CollectionConfig = {
  slug: 'chatter',
  admin: {
    description:'ini adalah user channel',
    useAsTitle:'Username'
  },
  auth:true,
  access: {
    create : () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { 
      name : "Username",
      type : "text",
      label : "Username",
      required : true, 
    },
  ],
};

export default Chatter;
