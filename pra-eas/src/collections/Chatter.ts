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
    read: adminAuth,
    update: adminAuth,
    delete: ({req: {user}})=> {
      return user?.collection === 'users';
    },
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
