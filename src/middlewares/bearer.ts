import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    // Token esperado
    const TOKEN_VALIDO =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE3NDA3OTQ1Njl9.XHF2kcORCLQX5SAYLmMn03Gr3Gn2LsKh6kO-iDoq9So';

    // Verificar si el header tiene el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'No autorizado: Falta token de autenticación',
      );
    }

    // Extraer el token y compararlo con el esperado
    const token = authHeader.split(' ')[1];
    if (token !== TOKEN_VALIDO) {
      throw new UnauthorizedException('No autorizado: Token inválido');
    }

    // Si el token es válido, continuar con la petición
    next();
  }
}
