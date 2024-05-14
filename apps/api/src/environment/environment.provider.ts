import { Inject, Provider } from '@nestjs/common';
import { environment } from 'src/environment/environment';

export const ENV_TOKEN = 'envProvider';

export const EnvProvider: Provider = {
  provide: ENV_TOKEN,
  useValue: environment,
};

export const InjectEnv = () => Inject(ENV_TOKEN);
