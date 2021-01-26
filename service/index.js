import { list as GalaxyList, create as GalaxyCreate } from './mock/mock.galaxy.crud';
import { list as DocumentList, create as DocumentCreate, update as DocumentUpdate } from './mock/mock.document.crud';

// Galaxies
export const listGalaxy = GalaxyList;
export const createGalaxy = GalaxyCreate;

// Documents
export const listDocument = DocumentList;
export const createDocument = DocumentCreate;
export const updateDocument = DocumentUpdate;
