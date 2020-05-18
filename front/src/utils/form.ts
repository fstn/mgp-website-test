import {get} from 'lodash';

export const hasErrors = (fieldsError: any) => {
    console.debug("error", fieldsError)
    return Object.keys(fieldsError).some(field => get(fieldsError, `[${field}].errors.length`) > 0)
}
