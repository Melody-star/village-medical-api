import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const isPublic = this.reflector.getAllAndOverride<boolean>("isPublic", [
      context.getHandler(),
      context.getClass()
    ]);

    if (!isPublic) {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) throw new HttpException("未携带Token", HttpStatus.FORBIDDEN);
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: "xcyl"
        });
        request["user"] = payload;
      } catch {
        throw new HttpException("Token验证失败", HttpStatus.FORBIDDEN);
      }
      return true;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = (request.headers as any).authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
