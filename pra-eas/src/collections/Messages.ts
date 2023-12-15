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
    create : () => true,
    read:  () => true,
    update: () => true,
    delete: () => true,
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
    }, 
    {
      name:'ChannelID',
      label:'ChannelID',
      type:'relationship',
      relationTo:'channels'
    },
  ],
};

export default Messages;
