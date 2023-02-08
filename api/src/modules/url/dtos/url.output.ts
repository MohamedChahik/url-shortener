import { ObjectType, PickType } from '@nestjs/graphql';
import { Url } from '../url.model';

@ObjectType()
export class UrlOutput extends PickType(Url, ['shortUrl', 'id']) {}
