import { HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from './storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const storageService = inject(StorageService);
  const token = storageService.get('accessToken');

  request = request.clone({
    setHeaders: {
      authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
};
