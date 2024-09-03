import { PartialJSONValue } from '@lumino/coreutils';


export type SharedFileMetadata = {
  id: string;
  author?: string;
  name?: string;
  title?: string;
  created?: string;
  last_modified?: string;
  version?: number;
  shareable_link?: string;
  server_id?: string;
}


export type Collaborator = {
  email: string;
  name?: string;
}


export type Permission = {
  name: string;
  roles: Array<Role>;
}


export type Role = {
  name: string;
  permissions: Array<Permission>;
}


export type JupyterContentsModel = {
  // This is an extra key than the typical Jupyter Contents Model.
  // which is why we made it optional. An ID is only available 
  // if the Jupyter File ID service is available.
  id?: string;
  name: string;
  path: string;
  type: string;
  writable: boolean;
  created: string;
  last_modified: string;
  mimetype?: string;
  content?: PartialJSONValue;
  format?: 'json' | 'text' | 'base64' | null;
};


export type CollaboratorRole = {
  id: number;
  email: string;
  file: string; // file ID
  role: string;
}


export type ServiceStatusResponse = {
  version: string;
  status: string;
}


export type SharedFileRequestModel = {
  metadata: SharedFileMetadata;
  collaborators?: Array<Collaborator>;
  roles?: Array<Role>;
  contents?: JupyterContentsModel;
}

export type SharedFileResponseModel = {
  metadata: SharedFileMetadata;
  collaborator_roles?: Array<CollaboratorRole>;
  contents?: JupyterContentsModel;
}




// export interface IJupyterContentsModel {
//   name?: string;
//   path?: string;
//   type?: string;
//   created?: string;
//   lastModified?: string;
//   writable?: boolean;
//   mimetype?: string;
//   content?: PartialJSONValue;
//   format?: 'json' | 'text' | 'base64' | null;
//   chunk?: number;
// }

// export interface ICollaborator {
//   id: string;
//   name: string;
//   email: string;
//   permissions?: Array<string> | null;
// }

// export interface IPublishedFileMetadata {
//   id: string;
//   author: string;
//   created?: string;
//   last_modified?: string;
//   version?: number;
//   title?: string;
//   permissions?: Array<string>;
//   shareable_link?: string;
//   collaborators?: Array<ICollaborator>;
//   content?: IJupyterContentsModel;
//   isReadOnly?: boolean;
//   liveEnabled?: boolean;
//   author_server_url?: string;
// }

// export interface IShareDialogBody {
//   value: IPublishedFileMetadata;
//   formState: {
//     isValid: boolean;
//     isDirty: boolean;
//     error: string;
//   };
// }
// export interface IPublishedFileIdentifier {
//   id?: string;
//   path?: string;
//   shareable_link?: string;
// }

// export interface IPreviewFileResponse {
//   id: string;
//   author: string;
//   created: string;
//   last_modified: string;
//   shareable_link: string;
//   version: number;
//   title: string;
//   html: string;
// }

// export type Contact = {
//   id: string;
//   name: string;
//   email: string;
// };
