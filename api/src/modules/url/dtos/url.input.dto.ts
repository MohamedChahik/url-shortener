import { InputType, PickType } from '@nestjs/graphql';
import { Url } from '../url.model';

@InputType()
class BaseUrlInput extends Url {}

@InputType()
export class UrlInputDto extends PickType(BaseUrlInput, ['longUrl']) {}
