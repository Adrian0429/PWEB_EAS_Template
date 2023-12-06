import { CollectionConfig } from 'payload/types';
import Users from './Users';
import create from 'payload/dist/collections/operations/create';
import { adminAuth } from '../access/adminAuth';

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    description:'ini adalah messages channel'
  },
  access: {
    create : ({req:{user}}) => {if(user) return true},
    read:  ({req:{user}}) => {if(user) return true},
    update: adminAuth,
    delete: adminAuth,
  },
  fields: [
    {
      name: 'Messages',
      label: 'Messages',
      type: 'text',
      required:true
    },
    {
      name: 'Sender_name',
      label: 'Sender_name',
      type:'text',
      required : false, 
    }
  ],
};

export default Messages;
