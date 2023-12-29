import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private toastrService: ToastrService) { }

    handleError(params?: ErrorHandlerParams): (error: HttpErrorResponse) => Observable<never> {
        return (error: HttpErrorResponse): Observable<never> => this.performErrorHandling(error, params);
    }

    performErrorHandling(error: HttpErrorResponse | undefined, params?: ErrorHandlerParams): Observable<never> {
        if (error) {
            params = {
                ...new ErrorHandlerParams(),
                ...params,
            };

            if (error.status !== HttpStatusCode.BadRequest || params.displayError) {
                let errorMessage = this.getErrorMessage(error);
                if (!errorMessage) {
                    errorMessage = params.errorMessage;
                }
                this.show(errorMessage, "Error", TypeToast.error);
            }

            console.error(error);
        }
        return throwError(error);
    }

    getErrorMessage(error: HttpErrorResponse | undefined): string | undefined {
        switch (error?.status) {
            case HttpStatusCode.BadRequest:
                const finalError = error.error?.error ? error.error.error : error.error;
                if (this.isValidationProblemDetails(finalError)) {
                    const data: ValidationProblemDetails = finalError;
                    const validationErrorNames: string[] = Object.getOwnPropertyNames(data.errors);
                    let errorMessage = '';
                    validationErrorNames.forEach(name => {
                        errorMessage += `${name}: ${data.errors[name].join(' ')} \r\n`;
                    });
                    return errorMessage;
                }

                if (this.isErrorMessages(finalError)) {
                    const data: ErrorViewModel = finalError;
                    const errorMessage = data.messages.join(', ');
                    return errorMessage;
                }
                return undefined;
            case HttpStatusCode.NotFound:
                return 'Method not found';
            default:
                return undefined;
        }
    }

    show(content?: string,
        title?: string,
        state?: TypeToast
    ): ActiveToast<any> {
        switch (state) {
            case TypeToast.error:
                return this.toastrService.error(content, title);
            case TypeToast.success:
                return this.toastrService.success(content, title);
            case TypeToast.info:
                return this.toastrService.info(content, title);
            case TypeToast.warning:
                return this.toastrService.warning(content, title);
        }
    }

    private isValidationProblemDetails(error: any): error is ValidationProblemDetails {
        return error
            && error.status && typeof (error.status) === 'number'
            && error.title && typeof (error.title) === 'string'
            && error.errors;
    }

    private isErrorMessages(error: any): error is ErrorViewModel {
        return error
            && error.statusCode && typeof (error.statusCode) === 'number'
            && error.messages && Array.isArray(error.messages);

    }
}

export class ErrorHandlerParams {
    // Show error message to user? (only applied if request status is 400, otherwise error message will always be shown)
    displayError?: boolean = true;
    errorMessage?: string = 'Server request failed';
}

export enum TypeToast {
    success,
    error,
    warning,
    info
};

// https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.validationproblemdetails?view=aspnetcore-3.1
export interface ValidationProblemDetails {
    type?: string;
    title: string;
    status: HttpStatusCode;
    traceId?: string;
    errors: { [key: string]: string[] };
}

export interface ErrorViewModel {
    messages: string[];
    statusCode: number;
}
