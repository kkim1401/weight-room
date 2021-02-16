import {
  DateTimeResolver,
  EmailAddressResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
} from 'graphql-scalars';

export default {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  PositiveFloat: PositiveFloatResolver,
  PositiveInt: PositiveIntResolver,
};
