import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'isImageExtension', async: false })
export class IsImageExtension implements ValidatorConstraintInterface {
  validate(urls: string[], args: ValidationArguments) {
    for (const url of urls) {
      if (typeof url === 'string' && url.trim() !== '') {
        const validExtensions = ['.png', '.jpg', '.jpeg'];

        for (const extension of validExtensions) {
          if (url.toLowerCase().endsWith(extension)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return `The url must be a valid image .png, .jpg, .jpeg`;
  }
}
