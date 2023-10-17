import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Data<T> {
  data: T;
}

@Injectable()
export class Response<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Data<T>> {
    return next.handle().pipe(map(data => {
      return {
        data,
        status: 200,
        message: "成功",
        success: true
      };
    }));
  }
}