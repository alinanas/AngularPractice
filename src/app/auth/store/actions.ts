import { createActionGroup, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../shared/types/backendError.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    RegisterSuccess: props<{ currentUser: CurrentUserInterface }>(),
    RegisterFailure: props<{ errors: BackendErrorInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    LoginSuccess: props<{ currentUser: CurrentUserInterface }>(),
    LoginFailure: props<{ errors: BackendErrorInterface }>(),
  },
});
