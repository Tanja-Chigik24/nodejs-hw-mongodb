import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);
contactsRouter.get(
  '/',
  checkRoles(ROLES.USER),
  ctrlWrapper(getContactsController),
);
contactsRouter.get(
  '/:contactId',
  checkRoles(ROLES.USER),
  isValidId,
  ctrlWrapper(getContactByIdController),
);
contactsRouter.post(
  '/',
  checkRoles(ROLES.USER),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
contactsRouter.delete(
  '/:contactId',
  checkRoles(ROLES.USER),
  isValidId,
  ctrlWrapper(deleteContactController),
);
contactsRouter.patch(
  '/:contactId',
  checkRoles(ROLES.USER),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default contactsRouter;
